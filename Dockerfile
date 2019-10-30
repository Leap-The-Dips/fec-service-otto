FROM node:10
WORKDIR /alexFEC
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "server"]
