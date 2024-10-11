#!/bin/bash

docker compose up -d
docker compose exec -it shop-app sh


# export USER_ID=$(id -u)
# export GROUP_ID=$(id -g)
