FROM node:13-alpine

RUN apk add --update-cache \
	g++ \
	make \
	python

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV \
	NODE_ENV=production\
	PORT=8080

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
