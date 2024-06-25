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
![alt text](image-1.png)
3. Get Discord Channel ID
Follow this [guide](https://en.wikipedia.org/wiki/Template:Discord_channel) to get your Channel Guild.

## Build&Run in Docker
```
docker build -t my-discord-bot .
docker-compose up -d
```
![alt text](image.png)


if compose not work, try the command below.
`docker run -d --name discord-bot -e DISCORD_TOKEN=your_discord_token my-discord-bot`

## File Descriptions
index.js
The main application file containing the bot's startup and command handling logic.

deploy.js
A script used to register bot commands, which runs automatically during deployment.

Dockerfile
Defines the Docker image build process, including dependency installation and application startup steps.

docker-compose.yml
Defines the Docker Compose services to simplify running and managing the container.FileInfo
index.js
主应用文件，包含了机器人启动和命令处理逻辑。

deploy.js
用于注册机器人命令的脚本，部署时会自动运行。

Dockerfile
定义了 Docker 镜像的构建过程，包括依赖安装和应用启动步骤。

docker-compose.yml
定义了 Docker Compose 服务，用于简化容器的运行和管理。