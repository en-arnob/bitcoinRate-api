FROM node

COPY . .

RUN npm install

CMD ["node", "app.js"]
