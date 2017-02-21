FROM mongo:latest

COPY init-scripts /init-scripts
COPY init_and_start.sh /init_and_start.sh


CMD ["/init_and_start.sh"]