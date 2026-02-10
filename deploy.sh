#!/bin/bash
set -e

# ============================================
# Medcol Landing — Deploy Script
# ============================================
# Usage:
#   ./deploy.sh              — build & start
#   ./deploy.sh ssl          — setup SSL certificate
#   ./deploy.sh update       — pull latest & redeploy
#   ./deploy.sh logs         — show logs
#   ./deploy.sh stop         — stop all containers
# ============================================

DOMAIN="${DOMAIN:-your-domain.com}"
EMAIL="${EMAIL:-admin@your-domain.com}"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[DEPLOY]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Check Docker is installed
check_deps() {
    command -v docker >/dev/null 2>&1 || error "Docker is not installed. Install it first: https://docs.docker.com/engine/install/"
    command -v docker compose >/dev/null 2>&1 || error "Docker Compose is not installed."
    log "Docker and Docker Compose found."
}

# Build and start
start() {
    check_deps
    log "Building and starting containers..."
    docker compose up -d --build
    log "Containers started. Site available at http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo 'localhost')"
    docker compose ps
}

# Setup SSL with Let's Encrypt
setup_ssl() {
    check_deps

    if [ "$DOMAIN" = "your-domain.com" ]; then
        error "Set DOMAIN env variable first: DOMAIN=medcol.example.com EMAIL=admin@example.com ./deploy.sh ssl"
    fi

    log "Setting up SSL for $DOMAIN..."

    # Create certbot directories
    mkdir -p certbot/conf certbot/www

    # Stop nginx temporarily
    docker compose stop nginx 2>/dev/null || true

    # Get certificate
    docker run --rm \
        -v "$(pwd)/certbot/conf:/etc/letsencrypt" \
        -v "$(pwd)/certbot/www:/var/www/certbot" \
        -p 80:80 \
        certbot/certbot certonly \
        --standalone \
        --preferred-challenges http \
        --email "$EMAIL" \
        --agree-tos \
        --no-eff-email \
        -d "$DOMAIN" \
        -d "www.$DOMAIN"

    if [ $? -eq 0 ]; then
        log "SSL certificate obtained successfully!"
        warn "Now update nginx.conf:"
        warn "  1. Replace 'your-domain.com' with '$DOMAIN'"
        warn "  2. Uncomment the HTTPS server block"
        warn "  3. Uncomment the HTTP->HTTPS redirect block"
        warn "  4. Comment out the HTTP server block"
        warn "  5. Run: docker compose restart nginx"
    else
        error "Failed to obtain SSL certificate"
    fi
}

# Update deployment (pull latest code & redeploy)
update() {
    check_deps
    log "Pulling latest code..."
    git pull origin main
    log "Rebuilding and restarting..."
    docker compose up -d --build
    log "Update complete."
    docker compose ps
}

# Show logs
logs() {
    docker compose logs -f --tail=100
}

# Stop all
stop() {
    log "Stopping all containers..."
    docker compose down
    log "All containers stopped."
}

# Main
case "${1:-start}" in
    start)   start ;;
    ssl)     setup_ssl ;;
    update)  update ;;
    logs)    logs ;;
    stop)    stop ;;
    *)       echo "Usage: $0 {start|ssl|update|logs|stop}" ;;
esac