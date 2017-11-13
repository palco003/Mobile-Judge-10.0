#!/bin/bash
cd ../../../..
sencha app build classic testing
sudo cp -a build/testing/* ../
cd classic/src/view/unregistered