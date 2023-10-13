FROM python:3.11-alpine

LABEL org.opencontainers.image.title="LinkFix for Discord" \
      org.opencontainers.image.version="2.0.0-alpha" \
      org.opencontainers.image.description="LinkFix for Discord replies to messages containing URLS that don't embed properly (x.com, twitter.com, YouTube Shorts) with URLS that do (fxtwitter.com, youtu.be)." \
      org.opencontainers.image.authors="Ralph <ralph@podaboutli.st>" \
      org.opencontainers.image.url="https://github.com/podaboutlist/linkfix-for-discord" \
      org.opencontainers.image.source="https://github.com/podaboutlist/linkfix-for-discord.git" \
      org.opencontainers.image.licenses="AGPL-3.0-or-later"

ENV DEBIAN_FRONTEND=noninteractive
# Disable Python stdout/stderr buffering so the output of print(), loggers, etc. actually shows up
ENV PYTHONUNBUFFERED=true

ARG POETRY_VERSION=1.6.1

WORKDIR /app

RUN python3 -m pip install poetry==${POETRY_VERSION}

COPY poetry.lock pyproject.toml ./
RUN poetry install --without dev --no-root --no-directory

COPY src/ ./src

ENTRYPOINT [ "poetry", "run", "python", "src/linkfix.py" ]
