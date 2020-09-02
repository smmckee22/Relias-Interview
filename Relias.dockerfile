FROM 	cypress/base:12

WORKDIR /usr

COPY package.json package.json
RUN npm i

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npm test