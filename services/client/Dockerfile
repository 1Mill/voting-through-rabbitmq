FROM node:13-alpine

RUN apk add --update-cache \
	g++ \
	make \
	python

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV \
	HOST=0.0.0.0 \
	NODE_ENV=production \
	PORT=8080

EXPOSE ${PORT}

CMD [ "npm", "run", "build", "&&", "npm", "run", "start" ]
