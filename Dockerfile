# Patched runtime. lodash 4.17.21 is the fixed release for the previous HIGH finding.
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
CMD ["node", "--version"]
