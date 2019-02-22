# openhab

In this repository I share my OpenHab2 configuration files.

## Short setup description

I run my OpenHab2 automation on the Raspberry Pi 2 Model B. It includes:

- [OpenHab2 server](https://www.openhab.org/)
- [MQTT Bus](http://mqtt.org/)
- [Zigbee2MQTT bridge](https://github.com/Koenkk/zigbee2mqtt)

I use standard Raspbian OS.

Following defices are connected and automated in my OpenHab2 automation setup:

- Xioami Aqara contact sensors for doors and windows (Zigbee). They are integrated via Zigbee2MQTT bridge.
- Xiaomi Aqare temperature and humidity sensors.
- User location tracking with OwnTracks application on smartphones:

	- OwnTracks is connected to MQTT bus via secured connection.

- TP-Link HS100 SmartPlug (WiFi)
- Fritz!Box 7490:

	- MAC addresses presence tracking
	- Guest Wi-Fi ON/OFF control

- OpenHab is behind Nginx reverse proxy with TLS authentication (CertBot)
- The same TLS certificates are used by Mosquitto WebSocket.
- Connection to Telegram Messanger channel for notifications.
- I use Basic UI for the web-page.
- On the smart phone I use [OpenHab App beta](https://play.google.com/store/apps/details?id=org.openhab.habdroid.beta&hl=en). It works fine. But if you do not like "beta" in the name, you can use stable release version instead: [OpenHab App](https://play.google.com/store/apps/details?id=org.openhab.habdroid&hl=en).
