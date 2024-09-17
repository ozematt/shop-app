FROM node:21 AS builder
WORKDIR /app
COPY ./app/package*.json .
RUN npm install
COPY ./app .
RUN npm run build

FROM node:21-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
RUN npm install --production

RUN npm i -g serve
USER node

EXPOSE 3000
CMD [ "serve", "-s", "dist"]