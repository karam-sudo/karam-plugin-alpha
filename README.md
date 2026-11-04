# plugin-alpha

First package in `karam-monorepo`. CI in `.github/workflows/ci.yaml` calls the parent quality and build workflows.

The Dockerfile is `FROM scratch`. The build workflow scans this image with Trivy and pushes `ghcr.io/karam-sudo/plugin-alpha:main` only after that scan passes.
