#!/bin/bash

SERVICE_NAME="com.nanoAutomator.serialcontrol"
PLIST_PATH="/Library/LaunchDaemons/${SERVICE_NAME}.plist"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

install() {
    echo "Installing ${SERVICE_NAME}..."

    # Copy the plist file to the LaunchDaemons directory
    sudo cp "${SCRIPT_DIR}/${SERVICE_NAME}.plist" "${PLIST_PATH}"
    
    # Load the daemon
    sudo launchctl load "${PLIST_PATH}"
    
    echo "${SERVICE_NAME} installed and loaded."
}

uninstall() {
    echo "Uninstalling ${SERVICE_NAME}..."

    # Unload the daemon
    sudo launchctl unload "${PLIST_PATH}"
    
    # Remove the plist file
    sudo rm "${PLIST_PATH}"
    
    echo "${SERVICE_NAME} unloaded and removed."
}

case "$1" in
    install)
        install
        ;;
    uninstall)
        uninstall
        ;;
    *)
        echo "Usage: $0 {install|uninstall}"
        exit 1
        ;;
esac
