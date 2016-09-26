## Devstream-UI

UI for Devstream - Ticker for dev activity

### Setup
- Add our domain entry in host file
``` bash
sudo vi /etc/hosts (for linux users)
127.0.0.1 devstream.imaginea.com
```
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
