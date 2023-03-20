# Base image
FROM node:19.3-alpine

# install dependencies
WORKDIR /usr/app
COPY ./package.json ./
COPY ./prisma .
RUN npm install

#copy app source
COPY ./ ./

#generate Prisma client
RUN npx prisma generate

# Default command
CMD ["npm", "run", "start:migrate"]