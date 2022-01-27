const FfmpegCommand = require('fluent-ffmpeg');
class VideoConvertor {
    constructor(input, output, fps, finalSize){
        this.input = input;
        this.output = output;
        this.fps = fps;
        this.finalSize = finalSize;
    }
    conversor(){
        let variable = false;
        FfmpegCommand(this.input)
            .size(this.finalSize)
            .fps(this.fps)
            .save(this.output)
            .on('start', function(){
                console.log('Processing starting...');
            })
            .on('error', function(err) {
                console.log('An error occurred: ' + err.message);
                variable = false;
                console.log(variable);
                return variable;
              })
            .on('end', function() {
              variable = true;
              console.log(variable);
              console.log("Processing finished! ");
              return variable;
          })
    } 
}
module.exports = VideoConvertor;
let inputPath = './videos/video.mp4';
let outptPath = './imagenes/%2d.jpg';
let framesPerSec = 1;
let imageSize = '100%';
const ejemplo = new VideoConvertor(inputPath, outptPath, framesPerSec, imageSize);
ejemplo.conversor();
