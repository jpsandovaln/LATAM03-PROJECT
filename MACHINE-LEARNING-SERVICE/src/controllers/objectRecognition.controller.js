const path = require('path');
const ObjectML = require('../models/objectML');

class ObjectRecognitionController{

    static recognizeObjects = async (req, res) => {
        const {files: images} = req;
        const modelOne = new ObjectML(path.join(__dirname, '../uploads/images/Dogs_cats.jpg'), 0.80, 'dog');
        const result = await modelOne.predict();
        if (result.length === 0) {
            res.json({msg: 'There is not the object in the image.'});
        }
        return res.json(result);
    }
    
    static downloadImage = (req, res) => {
        const {image} = req.params;
        const path = './uploads/images/' + image;
        res.download(path, (err) => {
            if (err) {
                return res.json({msg: err});
            }
        });
    }
}

module.exports = ObjectRecognitionController;