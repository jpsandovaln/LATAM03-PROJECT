const express = require('express');
const cors = require('cors');

class Server{
    constructor(port, path){
        this._app = express();
        this._port = port
        this._path = path;

        this.middleware();
        this.routes();
    }
    middleware(){
        // Cors 
        this._app.use(cors());

        // Reads json format
        this._app.use(express.json());
    }

    routes(){
        this._app.use(this._path, require('../routes/objectRecognition.routes'));
    }

    listen(){
        this._app.listen(this._port, () => console.info(`It running on port ${this._port}`));
    }
}

module.exports = Server;