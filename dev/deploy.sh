#!/bin/bash
sencha app build modern testing
sudo cp -r /usr/share/nginx/html/dev/build/testing/* /usr/share/nginx/html
