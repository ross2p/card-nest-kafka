FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . /app

RUN chmod +x /app/entrypoint.sh

CMD ["/app/entrypoint.sh"]