const FfmpegCommand = require('fluent-ffmpeg');
let inputPath = './videos/video.mp4';
let outptPath = './imagenes/%2d.jpg';
let framesPerSec = 1;
let imageSize = '100%';
class videoConvertor {
    constructor(input, output, fps, finalSize){
        this.input = input;
        this.output = output;
        this.fps = fps;
        this.finalSize = finalSize;
    }
    async conversor(){
        await FfmpegCommand(inputPath)
        .size(imageSize)
        .fps(framesPerSec)
        .on('error', function(err) {
              console.log('An error occurred: ' + err.message);
            })
        .on('end', function() {
            console.log('Processing finished !');
        })
        .save(outptPath);
    } 
}
const ejemplo = new videoConvertor(inputPath, outptPath, framesPerSec, imageSize);
ejemplo.conversor();
