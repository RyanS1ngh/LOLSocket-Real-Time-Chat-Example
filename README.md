# Real-time chat example - LOLSocket
This serves as an example of how you can create a real time chat using LOLSocket. 

## Installation 

Firstly, install all the necessary dependencies using `npm`.

```bash
npm install
```

then replace the API keys in `/public/index.html` and `server.js` with your own API keys which you can get from [LOLSocket](https://lolsocket.com)

``` javascript
const lol = new LOLsocket('API-KEY', 'API-SECRET');
```

Then just run the following command and enjoy the real-time chat. 

```bash
npm run dev
```

## License
MIT