FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# 對外port
EXPOSE 3000

# 在容器啟動時運行deploy.js
# RUN node deploy.js

# 运行应用
CMD ["node", "index.js"]

# 合併部屬與啟動
# CMD ["node", "deploy.js", "&&", "node", "index.js"]