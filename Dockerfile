FROM node:21 AS build
WORKDIR /app
COPY ./app/package*.json .
RUN npm install
COPY ./app .
RUN npm run build

FROM node:21-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --only=production
ENV PORT=3000
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
