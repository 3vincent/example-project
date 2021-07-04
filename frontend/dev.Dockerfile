FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD .browserslistrc vue.config.js .prettierrc .eslintrc.js babel.config.js ./ 

CMD [ "npm", "run", "serve" ]