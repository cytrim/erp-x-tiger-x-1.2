# © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission.

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/share/tigerx-web
COPY --from=build /app/dist ./dist
RUN npm i serve -g && echo '{"type":"module"}' > package.json
CMD ["serve", "-s", "dist", "-l", "5173"]