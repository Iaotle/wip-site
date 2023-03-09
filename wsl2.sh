#!/bin/bash

# Install a rule to forward the WSL server to the host Windows installation
netsh interface portproxy remove v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=127.0.0.1
netsh advfirewall firewall add rule name="Allowing LAN connections" dir=in action=allow protocol=TCP localport=3000