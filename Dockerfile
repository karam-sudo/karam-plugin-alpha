# Old Node 14 image plus lodash 4.17.20. Both have fixed HIGH findings,
# so the Trivy gate in build-api-plugin.yaml fails this image on purpose.
FROM node:14.21.3
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
CMD ["node", "--version"]
