## Devstream-UI

UI for Devstream - Ticker for dev activity

### Setup
- Install `nodejs` for your platform
- Install `webpack` and `webpack-dev-server`
``` bash
npm install -g webpack webpack-dev-server
```
- Install node dependencies locally
``` bash
npm install
```
- Run the development server with hot reloading
``` bash
npm run server
```
- Copy nginx.example.conf locally to nginx.conf in the same folder
``` bash
cp nginx.example.conf nginx.conf
```
- Run nginx server with reverse proxy handlers
``` bash
nginx -p `pwd`/ -c nginx.conf > /tmp/nginx.log 2>&1
```
