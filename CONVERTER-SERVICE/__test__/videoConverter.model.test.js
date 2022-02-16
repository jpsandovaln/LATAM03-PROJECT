const ConverterException = require('../src/Exceptions/converter.exception');
const VideoConverter = require('../src/models/videoConverter.model');
const fs = require('fs');

describe('Video Converter tests', () => {
  const saveImagesPath = `${__dirname}/files/videoFilesFolder`;

  beforeEach(() => {
    fs.mkdirSync(saveImagesPath, { recursive: true });
  });

  test('Video success', async () => {
    const videoConverter = new VideoConverter(
      __dirname + '/files/animals.mp4',
      `${saveImagesPath}/%3d.jpg`,
      1,
      '100%'
    );
    const result = await videoConverter.convert();
    const { response } = result;
    expect(response).toBe(true);
  });

  // test('Invalid video input', async () => {
  //   const videoConverter = new VideoConverter(
  //     __dirname + '/files/DocTest.docx',
  //     __dirname + '/files/%3d.jpg',
  //     1,
  //     '100%'
  //   );
  //   const result = await videoConverter.convert();
  //   const { response } = result;
  //   expect(response).toBe(false)
  //   // videoConverter.convert().catch((error) => {
  //   //   expect(error).toBeInstanceOf(asds);
  //   // });
  // });

  afterEach(() => {
    fs.rm(saveImagesPath, { recursive: true, force: true });
  });
});
