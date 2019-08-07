FROM node:9.6.1 as compiler

USER root

# Our hosted npm repository is passed in as a build-arg
ARG npm_registry
RUN echo "Our npm installation registry is ${npm_registry}"

# Creates base dir's
RUN mkdir /usr/src/app

# Set the dir for the copy and npm cmds below
WORKDIR /usr/src/app

# Copy in (dependencies) source code prior to build
COPY datalab/package.json /usr/src/app

# Run the npm install using our hosted nexus
RUN npm install --registry ${npm_registry}
RUN npm install gatsby-cli --registry ${npm_registry}

# Copy in source code
COPY datalab /usr/src/app

# Create a path so npm knows where the node modules were installed
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Run build via gatsby
RUN gatsby build
