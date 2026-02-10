#!/bin/bash
set -e

# ============================================
# Medcol Landing — Deploy Script
# ============================================
# Run from project directory on your Mac:
#   ./remote-deploy.sh          — upload + rebuild + restart
#   ./remote-deploy.sh logs     — show server logs
#   ./remote-deploy.sh status   — container status
#   ./remote-deploy.sh ssh      — open SSH session
#   ./remote-deploy.sh stop     — stop all containers
# ============================================

SSH_KEY="$HOME/.ssh/leo"
SSH_USER="azureuser"
SSH_HOST="20.174.26.198"
REMOTE_DIR="/opt/medcol-landing"
SSH="ssh -i $SSH_KEY $SSH_USER@$SSH_HOST"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[DEPLOY]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Default action: deploy
deploy() {
    log "📦 Uploading files to server..."
    rsync -avz --progress \
        -e "ssh -i $SSH_KEY" \
        --exclude 'node_modules' \
        --exclude '.next' \
        --exclude '.git' \
        --exclude '.DS_Store' \
        --exclude 'documentation' \
        --exclude 'certbot' \
        . "$SSH_USER@$SSH_HOST:$REMOTE_DIR/"

    log "🔨 Building and restarting on server..."
    $SSH "cd $REMOTE_DIR && sudo docker compose up -d --build app 2>&1 | tail -10"

    log "⏳ Waiting for app to be healthy..."
    $SSH "cd $REMOTE_DIR && sleep 8 && sudo docker compose restart nginx 2>&1"

    log "✅ Deploy complete!"
    $SSH "cd $REMOTE_DIR && sudo docker compose ps"
    echo ""
    log "🌐 Site: https://medcol.io"
}

case "${1:-deploy}" in
    deploy|build) deploy ;;
    logs)    $SSH "cd $REMOTE_DIR && sudo docker compose logs -f --tail=100" ;;
    status)  $SSH "cd $REMOTE_DIR && sudo docker compose ps" ;;
    ssh)     $SSH ;;
    stop)    $SSH "cd $REMOTE_DIR && sudo docker compose down" && log "Stopped." ;;
    restart) $SSH "cd $REMOTE_DIR && sudo docker compose restart" && log "Restarted." ;;
    *)
        echo "Usage: $0 [deploy|logs|status|ssh|stop|restart]"
        echo ""
        echo "  deploy   Upload files + rebuild + restart (default)"
        echo "  logs     Show live server logs"
        echo "  status   Show container status"
        echo "  ssh      Open SSH session"
        echo "  stop     Stop all containers"
        echo "  restart  Restart all containers"
        ;;
esac