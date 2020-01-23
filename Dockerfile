# build environment
FROM node:12.14.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
RUN yarn
RUN yarn react-scripts
COPY . /app
RUN yarn build

# production environment
FROM nginx:1.17.7-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["nginx", "-g", "daemon off;"]