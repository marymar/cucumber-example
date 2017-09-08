FROM node

# PROXY?
#   You shouldn't worry about proxy settings, because Docker uses the HTTP_PROXY environment variable if present.
# BUT: NPM requires setting up the HTTP_PROXY variable using a CLI command.
# If building behind an http_proxy, set them for git and npm
# @todo mary: use ENV Settings
RUN git config --global http.proxy [PROXY:PORT] && \
    npm config set proxy [PROXY:PORT] && \
    npm config set https-proxy [PROXY:PORT]


# set work dir
WORKDIR /dest

# install app dependencies
COPY package.json .

RUN npm install

# bundle app source
COPY . .

# make port 8080 available to the world outside this container
EXPOSE 8080

CMD [ "npm", "test" ]
