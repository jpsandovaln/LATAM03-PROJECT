
class ObjectRecognitionController{

    static recognizeObjects = (req, res) => {
        const {files: images} = req;
        let imagesploaded = images.map((image)=>{
            return {
                name: image.filename,
                type: image.mimetype,
                destination: (process.env.SERVER_URL + '/download-image/' + image.filename).replace(/ /g, '%20')
            }
        });
        
        res.json({
            msg: 'Images were uploaded.',
            images: imagesploaded
        });
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