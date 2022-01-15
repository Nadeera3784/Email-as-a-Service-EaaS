
# O2O CAAS

# Installation

O2O CAAS requires 
Node.j v14+  (https://nodejs.org/) 
Redis (https://redis.io/download)
MongoDB (https://www.mongodb.com/)

Install the dependencies and devDependencies

```sh
npm install
``` 
Copy the example env file and make the required configuration changes in the .env file
```sh
cp .env.example .env
```
## Production
Setup  PM2 (https://pm2.keymetrics.io/docs/usage/quick-start/)

## Development

```sh
npm install -g nodemon
npm run dev
```

## Run Test 

```sh
npm run test
```