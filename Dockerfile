# Training image. No OS packages, so the Trivy HIGH/CRITICAL gate passes.
# Change the base to node:22-bookworm-slim to watch that gate fail a push.
FROM scratch
COPY README.md /README.md
