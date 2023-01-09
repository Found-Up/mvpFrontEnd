FROM node:16-alpine AS DEVELOPMENT

ENV NODE_ENV development

# Add work directory
WORKDIR /src

# Cache and install dependenciess
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy src files
COPY . .

# Expose port
EXPOSE 3000

# Start the app

CMD [ "yarn", "start" ]