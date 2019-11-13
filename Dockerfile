FROM node:13.10
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

EXPOSE 80
CMD ["npm", "start"] 
