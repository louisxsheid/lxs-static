FROM node:16-alpine3.11

WORKDIR '/app'

COPY ["package.json", "package-lock.json", "./" ]

COPY . .

RUN npm install

CMD npm start
