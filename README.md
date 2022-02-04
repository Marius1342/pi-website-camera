# PiWebsiteCamera

*You can look at your pi-cam every 10 seconds, over the web browser*

* Why this ?
    * ✅ low energy cost
    * ✅ Free

__Written in javascript (nodejs)__

## Setup

*Installation about 10 minutes 🕐*

* Needed things
    * Pi with nodejs and npm
    * Pi-cam

## Installation

* Install
    * Install nodejs and npm
        * LxTerminal -> sudo apt-get install nodejs npm -y 
    * Install the program
        * Create a new directory LxTerminal -> mkdir /cam
        * Download the source code and copy it to /cam
        * Now go to this directory and type -> npm install
        * Now find your IP
        * LxTerminal -> ifconfig 
        * If you are using the ethernet then eth0 you need the 'inet' address
        * If you are using the w-lan then wlan0 you need the 'inet' address
        * Open this IP in your browser ip-address/live wait 10 seconds, and you see a picture
    * Auto start
        * LxTerminal -> sudo nano /etc/rc.local
            * cd /cam
            * sleep 60
            * node app.js &
        * Press STRG + X to exit
    * Don't needed (kiosk) 
        * Activate the kiosk mode if you don't have the time to shutdown the system
        * LxTerminal -> sudo raspi-config
        * Performance 
        * Overlay File system
        * Activate all

