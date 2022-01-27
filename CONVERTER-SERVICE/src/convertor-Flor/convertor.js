const extractFrames = require('ffmpeg-extract-frames');
let input = './videos/video.mp4';
let outpt = './imagenes/prueba%d.jpg';
let fpers = 1;
class Convertor {
  constructor(input, output, fps) {
    this.input = input;
    this.output = output;
    this.fps = fps;
  }
  async conversor(input, output, fps) {
    let imagenes = await extractFrames({
      input: input,
      output: output,
      fps: fps,
    });
    return imagenes;
  }
}
const prueba1 = new Convertor(input, outpt, fpers);
prueba1.conversor(input, outpt, fpers);
