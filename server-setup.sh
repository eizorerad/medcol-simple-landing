#!/bin/bash
set -e

# ============================================
# Medcol Landing — Remote Server Setup
# Run ON the server (Azure VM)
# ============================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[SETUP]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

log "=== Medcol Landing — Server Setup ==="
log "OS: $(lsb_release -ds 2>/dev/null || cat /etc/os-release | grep PRETTY_NAME | cut -d= -f2)"

# 1. Update system
log "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# 2. Install essential packages
log "Installing essential packages..."
sudo apt install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    git \
    ufw \
    htop \
    unzip

# 3. Install Docker
if command -v docker &>/dev/null; then
    log "Docker already installed: $(docker --version)"
else
    log "Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker $USER
    log "Docker installed: $(docker --version)"
fi

# 4. Ensure Docker Compose plugin
if docker compose version &>/dev/null; then
    log "Docker Compose available: $(docker compose version)"
else
    log "Installing Docker Compose plugin..."
    sudo apt install -y docker-compose-plugin
fi

# 5. Start and enable Docker
sudo systemctl enable docker
sudo systemctl start docker

# 6. Configure firewall
log "Configuring UFW firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
echo "y" | sudo ufw enable
sudo ufw status

# 7. Create project directory
log "Creating project directory..."
sudo mkdir -p /opt/medcol-landing
sudo chown $USER:$USER /opt/medcol-landing

# 8. Setup swap (safety for builds)
if [ ! -f /swapfile ]; then
    log "Creating 2GB swap file for build safety..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    log "Swap enabled."
else
    log "Swap already exists."
fi

log "=== Server setup complete! ==="
log ""
log "Next steps:"
log "  1. Log out and back in (for docker group): exit && ssh back in"
log "  2. Upload project files to /opt/medcol-landing"
log "  3. Run: cd /opt/medcol-landing && ./deploy.sh"