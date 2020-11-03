FROM nginx:alpine
LABEL maintainer Jalal Hejazi <jalal.hejazi@gmail.com>

COPY dist/DemoApp /usr/share/nginx/html

EXPOSE 80