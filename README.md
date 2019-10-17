# openhab

In this repository I share my OpenHab2 configuration files.

## Short setup description

I run my OpenHab2 automation on the Raspberry Pi 2 Model B. It includes:

- [OpenHab2 server](https://www.openhab.org/)
- [MQTT Bus](http://mqtt.org/)
- [Zigbee2MQTT bridge](https://github.com/Koenkk/zigbee2mqtt)

I use Raspberry Pi 2B+ with standard "Raspbian GNU/Linux 9 (stretch)" distribution there.

In order to improve system stability and performance I connected external SSD via USB port to the Raspberry and moved (symlinked) all large and regularly updated logs there:
- MQTT (Mosquitto) logs
- NGINX logs
- Openhab logs
- Letsencrypt logs

Following defices are connected and automated in my OpenHab2 automation setup:

- ZigBee devices integrated via Zigbee2MQTT bridge:
	- Xioami Aqara contact sensors for doors and windows (Zigbee).
	- Xiaomi Aqare temperature and humidity sensorsn.
- User location tracking with OwnTracks application on smartphones:
	- OwnTracks is connected to MQTT bus via TLS protected connection.

- TP-Link HS100 SmartPlug (WiFi)
- Fritz!Box 7490:

	- MAC addresses presence tracking.
	- Guest Wi-Fi ON/OFF control.

- OpenHab is behind Nginx reverse proxy with TLS authentication [Let's Encrypt](https://letsencrypt.org/).
- The same TLS certificates are used by Mosquitto WebSocket.
- Connection to Telegram Messanger channel for notifications.
- I use Basic UI for the web-page.
- On the smart phone I use [OpenHab App beta](https://play.google.com/store/apps/details?id=org.openhab.habdroid.beta&hl=en). It works fine. But if you do not like "beta" in the name, you can use stable release version instead: [OpenHab App](https://play.google.com/store/apps/details?id=org.openhab.habdroid&hl=en).
