#!/bin/bash
set -e

# ============================================
# Medcol Landing — Static Deploy Script
# ============================================
# Run from project directory on your Mac:
#   ./remote-deploy.sh          — build locally + deploy static files
#   ./remote-deploy.sh logs     — show server logs
#   ./remote-deploy.sh status   — container status
#   ./remote-deploy.sh ssh      — open SSH session
#   ./remote-deploy.sh stop     — stop nginx
# ============================================

SSH_KEY="$HOME/.ssh/leo"
SSH_USER="azureuser"
SSH_HOST="20.174.26.198"
REMOTE_HTML="/usr/share/nginx/html"
REMOTE_DIR="/opt/medcol-landing"
SSH="ssh -i $SSH_KEY $SSH_USER@$SSH_HOST"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[DEPLOY]${NC} $1"; }

deploy() {
    log "🔨 Building static site locally..."
    pnpm build

    log "📦 Uploading static files to server..."
    rsync -avz --delete --progress \
        -e "ssh -i $SSH_KEY" \
        out/ "$SSH_USER@$SSH_HOST:$REMOTE_DIR/out/"

    log "📋 Uploading nginx config..."
    scp -i "$SSH_KEY" nginx-static.conf "$SSH_USER@$SSH_HOST:$REMOTE_DIR/nginx-static.conf"

    log "🔄 Syncing to nginx html root and restarting..."
    $SSH "sudo rsync -a --delete $REMOTE_DIR/out/ $REMOTE_HTML/ && sudo docker compose -f $REMOTE_DIR/docker-compose.yml restart nginx"

    log "✅ Deploy complete!"
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
        echo "  deploy   Build locally + upload static files (default)"
        echo "  logs     Show live server logs"
        echo "  status   Show container status"
        echo "  ssh      Open SSH session"
        echo "  stop     Stop nginx"
        echo "  restart  Restart nginx"
        ;;
esac