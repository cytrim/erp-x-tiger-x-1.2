# © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission.

FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY src ./src
ENV NODE_ENV=production
CMD ["node", "src/index.js"]
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
