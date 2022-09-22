
FROM node:14.18.2

ENV TZ Asia/Tokyo
ENV APP_ROOT /usr/src/app

WORKDIR $APP_ROOT

COPY package.json $APP_ROOT
COPY npm-shrinkwrap.json $APP_ROOT

RUN npm i

COPY . $APP_ROOT

EXPOSE 3000
CMD ["npm", "run", "start"]
