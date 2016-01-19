FROM node:argon

# Create app directory
RUN mkdir -p /
WORKDIR /

# Install app dependencies
COPY package.json /
RUN npm install

# Bundle app source
COPY . /

EXPOSE 3000
CMD [ "npm", "start" ]