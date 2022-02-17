const VideoConverter = require('../src/models/videoConverter.model');
const fs = require('fs');

describe('Video Converter tests', () => {
  const saveImagesPath = `${__dirname}/files/videoFilesFolder`;

  beforeAll(() => {
    fs.mkdirSync(saveImagesPath, { recursive: true });
  });

  test('Video success', async () => {
    const videoConverter = new VideoConverter(
      __dirname + '/files/videoTest.mp4',
      `${saveImagesPath}/%3d.jpg`,
      1,
      '100%'
    );
    
    const result = await videoConverter.convert();
    const { response } = result;
    
    expect(response).toBe(true);
  });

  afterAll(() => {
    fs.rmSync(saveImagesPath, { recursive: true, force: true });
  });
});
