FROM node:8.1
MAINTAINER Dashiel Mansfield

RUN mkdir /vue
WORKDIR /vue

RUN npm install -g nodemon
ADD package.json package.json
RUN npm install

# Run app via ./build/dev-server (for hot reloading during development)
CMD ["npm", "start"]
