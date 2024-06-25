# Discord Bot
This is a Discord bot project based on Discord.js, using Docker for containerized deployment. The bot can respond to simple commands such as `/ping` and display its online status. In the future, it will support the creation of Todolist and time notifications.

## System Requirement
- Docker or Docker Desktop
- Node.js 16 

## .env Setting
1. Create an Application on [Discord Dev](https://discord.com/developers/applications)
2. Record the following parameters
    * client ID
    * token
![alt text](/img/image-01.png)
3. Get Discord Channel ID
Follow this [guide](https://en.wikipedia.org/wiki/Template:Discord_channel) to get your Channel Guild.

## Build Set Up
1. change parameters
    * your_discord_token
    * client ID
    * guild ID

2. docker build and run
```
docker build -t my-discord-bot .
docker-compose up -d
```
![alt text](/img/image-02.png)

After compose, you can see the container execution in Docker. And your Discord Bot is online.
![alt text](/img/image-03.png)
![alt text](/img/image-04.png)

If docker-compose not work, try the command below.
```
docker run -d --name discord-bot -e DISCORD_TOKEN=your_discord_token my-discord-bot
```

Or check docker logs to fix problems.
```
docker-compose logs
```

## File Descriptions
* index.js

   The main application file containing the bot's startup and command handling logic.

* deploy.js

   A script used to register bot commands, which runs automatically during deployment.

* Dockerfile

   Defines the Docker image build process, including dependency installation and application startup steps.

* docker-compose.yml

  Defines the Docker Compose services to simplify running and managing the container.

## References
discord.js

https://discord.js.org/
