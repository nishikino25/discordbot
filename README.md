# discordbot

## Evierment


## Build/Run in Docker
docker build -t my-discord-bot .
docker-compose up -d
![alt text](image.png)


if compose not work, try this: 
docker run -d --name discord-bot -e DISCORD_TOKEN=your_discord_token my-discord-bot