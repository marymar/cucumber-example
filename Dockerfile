FROM node

# PROXY?
#   You shouldn't worry about proxy settings, because Docker uses the HTTP_PROXY environment variable if present.
# BUT: NPM requires setting up the HTTP_PROXY variable using a CLI command.
# If building behind an http_proxy, set them for git and npm

ARG HTTP_PROXY=${HTTP_PROXY:-""}
ENV HTTP_PROXY=${HTTP_PROXY}
ARG HTTPS_PROXY=${HTTPS_PROXY:-""}
ENV HTTPS_PROXY=${HTTPS_PROXY}

# set the proxy settings for underlying programs
RUN if [ "$HTTP_PROXY" != "" ] \
    ; then \
        git config --global http.proxy $HTTP_PROXY && \
        npm config set proxy $HTTP_PROXY && \
        npm config set https-proxy $HTTPS_PROXY \
    ; fi

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
