# Stage 1
FROM arm32v7/node:12
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

EXPOSE 80
CMD ["npm", "start"]
