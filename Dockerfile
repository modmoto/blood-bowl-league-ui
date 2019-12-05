# Stage 1
FROM node:12
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build --production

EXPOSE 80
CMD ["npm", "start"]
