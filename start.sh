#!/bin/bash

zcat -f /var/log/nginx/access.log* | goaccess -o /var/www/html/index.html --real-time-html --daemonize
