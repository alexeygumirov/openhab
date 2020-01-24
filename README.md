# My OpenHab project

In this repository I share my OpenHab2 configuration files.

## Short description of the setup

I run my OpenHab2 automation on the Raspberry Pi 2 Model B. It includes:

- [OpenHab2 server](https://www.openhab.org/)
- [MQTT Bus](http://mqtt.org/)
- [Zigbee2MQTT bridge](https://github.com/Koenkk/zigbee2mqtt)

I use Raspberry Pi 2B+ with standard "Raspbian GNU/Linux 9 (stretch)" distribution there.

In order to improve system stability and performance I connected external SSD via USB port to the Raspberry and moved (via symlink) all large and regularly updated logs there:
- MQTT (Mosquitto) logs
- NGINX logs
- Openhab logs
- Letsencrypt logs

Following defices are connected and automated in my OpenHab2 automation setup:
- ZigBee devices integrated via Zigbee2MQTT bridge:
	- Xioami Aqara contact sensors for doors and windows (Zigbee).
	- Xiaomi Aqare temperature and humidity sensors.
- User location tracking with OwnTracks application on smartphones:
	- OwnTracks is connected to MQTT bus via TLS protected connection.
- TP-Link HS100 SmartPlug (WiFi)
- Fritz!Box 7490:
	- MAC addresses presence tracking.
	- Guest Wi-Fi ON/OFF control.

To collect metrics and present them I use [InfluxDB](https://docs.influxdata.com/influxdb/v1.7/) and [Grafana](https://grafana.com/) in Docker containers.
InfluxDB also provides me persistence for the OpenHab.

All OpenHab configuration I do via config files, not GUI. This approach is more robust and also gives you ability to migrate OpenHab configuration to other system.

Additional information:
- OpenHab is behind Nginx reverse proxy with TLS authentication [Let's Encrypt](https://letsencrypt.org/).
- The same TLS certificates are used by Mosquitto WebSocket.
- Connection to Telegram messenger channel for notifications.
- I use Basic UI for the web-page.
- On the smart phone I use [OpenHab App beta](https://play.google.com/store/apps/details?id=org.openhab.habdroid.beta&hl=en). It works fine. But if you do not like "beta" in the name, you can use stable release version instead: [OpenHab App](https://play.google.com/store/apps/details?id=org.openhab.habdroid&hl=en).

## Grafana and InfluxDB containers

I run Grafana and InfluxDB in docker containers. In order to avoid complicated networking setup, I use `host` networking for both.
To launch containers I use following `docker-compose.yml` file:

```yaml
version: "3.7"
services:
    
    db:
        image: influxdb:latest 
        container_name: influxdb_openhab
        restart: always
        network_mode: host
        volumes:
            - <your path to folder with influxdb files>:/var/lib/influxdb

    front:
        image: grafana/grafana:latest
        container_name: grafana_openhab
        restart: always
        network_mode: host
        depends_on:
            - db
        volumes:
            - grafana-storage:/var/lib/grafana

volumes:
    grafana-storage:
        external: true
        name: grafana-storage
```

I created docker volume with the name `grafana-storage` for the Grafana files. You can also use docker volume for InfluxDB files.

If you do not want to use docker-compose for containers management (for some reason), you can use following equivalent command line commands:

```sh
docker run -d --restart always \
	--name=influxdb_openhab
	--volume=<your path to folder with InfluxDB files>:/var/lib/influxdb \
	--network host influxdb

docker run -d --restart always \
	--name=grafana_openhab --volume=grafana-storage:/var/lib/grafana \
	--network host grafana/grafana
```

Before you are going to bring up containers first time using this compose file, you shall create docker volume for Grafana using following command:

```sh
docker create volume grafana-storage
```

Or you can use direct path mapping for Grafana volume, the same way as for InfluxDB. Then you have just create a folder for Grafan on your drive and map it to the container `/var/lib/grafana`. 
