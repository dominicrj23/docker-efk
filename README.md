# Docker EFK(Elasticsearch, Fluentd, Kibana)

EFK setup with docker, docker-compose.

## Requirements

- docker
- docker-compose

## Usege

```sh
docker-compose up
```

Use Background

```sh
docker-compose up -d
```
Check status
```sh
docker-compose ps
          Name                         Command               State                Ports
-----------------------------------------------------------------------------------------------------
dockerefk_elasticsearch_1   /docker-entrypoint.sh elas ...   Up      0.0.0.0:9200->9200/tcp, 9300/tcp
dockerefk_fluentd_1         sh -c /tmp/entrypoint.sh         Up      0.0.0.0:24224->24224/tcp
dockerefk_kibana_1          /docker-entrypoint.sh /tmp ...   Up      0.0.0.0:5601->5601/tcp
dockerefk_nginx_1           sh -c /tmp/entrypoint.sh         Up      443/tcp, 0.0.0.0:80->80/tcp
#dockerefk_node_app_1        sh -c /tmp/entrypoint.sh         Up      0.0.0.0:8080->8080/tcp
```
for now node_app running at 8080 has been disabled so that it doesn't interfere with your existing application.
```sh
# open kibana
open http://localhot
```
to connect your nodejs app to fluentD, use localhost:24224 to direct your events.
default configuration of fluentD forwards events labels with app.log to elasticsearch. All other events are directed to stdout.
See the configuration in nodejs app
