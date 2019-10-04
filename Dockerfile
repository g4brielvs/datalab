FROM node:9.6.1

# Example: --build-arg npm_install_options="--registry http://example.com"
ARG npm_install_options
RUN echo "Running with npm install options: '${npm_install_options}'"

# Creates base dirs
RUN mkdir /usr/src/app

# Set the dir for the copy and npm cmds below
WORKDIR /usr/src/app

# Copy in (dependencies) source code prior to build
COPY package.json /usr/src/app

# Run the npm install using any flags/options
RUN npm install ${npm_install_options}
RUN npm install gatsby-cli ${npm_install_options}

# Copy in source code
COPY . /usr/src/app

# Create a path so npm knows where the node modules were installed
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Run build via gatsby
RUN gatsby build
