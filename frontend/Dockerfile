FROM node:22-alpine

WORKDIR /app

COPY frontend/package*.json ./

ENV NODE_OPTIONS=--max-old-space-size=256

RUN npm install

COPY frontend/ .

EXPOSE 5173

CMD ["npm","run","dev","--","--host"]

