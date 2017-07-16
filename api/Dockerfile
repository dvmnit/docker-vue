# Defines the image to build according to specified args.
FROM node:7.5.0

# Sets up the workspace environment at /src/app 
RUN mkdir /api
WORKDIR /api

# Installs package-specific dependencies
RUN npm install -g nodemon
ADD ./package.json ./package.json
RUN npm install 

# Runs the node wrapper nodemon (for restarting node when files are modified) 
CMD ["npm", "start"]
