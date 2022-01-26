// Recognizes objects
const recognizeObjects = (req, res) => {
    const {files: images} = req;
    let imagesploaded = images.map((image)=>{
        return {
            name: image.filename,
            type: image.mimetype,
            destination: (process.env.SERVER_URL + '/download-image/' + image.filename).replace(/ /g, '%20')
        }
    });
    // TODO: calls the ObjectRecognition class

    res.json({
        msg: 'Images were uploaded.',
        images: imagesploaded
    });
}

// downloads image
const downloadImage = (req, res) => {
    const {image} = req.params;
    const path = './uploads/images/' + image;
    res.download(path, (err) => {
        if (err) {
            return res.json({msg: err});
        }
        console.log('File was Donwloaded');
    });
}

module.exports = {
    recognizeObjects,
    downloadImage
}
