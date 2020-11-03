FROM nginx:alpine
LABEL maintainer Jalal Hejazi <jalal.hejazi@gmail.com>

COPY dist/AngularBasics /usr/share/nginx/html

EXPOSE 80