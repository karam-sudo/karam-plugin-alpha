# The High alerts are npm's own libraries inside node:22-alpine
# (sigstore, picomatch, pacote, brace-expansion), not plugin-alpha.
# Node stays. The npm CLI is removed so those package.json files are not in the image.
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
RUN rm -rf /usr/local/lib/node_modules/npm \
           /usr/local/lib/node_modules/corepack \
           /usr/local/bin/npm \
           /usr/local/bin/npx \
           /usr/local/bin/corepack
CMD ["node", "--version"]
