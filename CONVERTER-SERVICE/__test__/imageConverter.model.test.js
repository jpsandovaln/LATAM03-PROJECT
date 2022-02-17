const ImageConverter = require('../src/models/imageConverter.model');
const fs = require('fs');

describe('Image Converter tests', () => {
  const saveImagesPath = `${__dirname}/files/imagesFilesFolder`;
  const size = {
    width: Number(100) || null,
    height: Number(100) || null,
  };

  beforeAll(() => {
    fs.mkdirSync(saveImagesPath, { recursive: true });
  });

  test('Image success', async () => {
    const imageConverter = new ImageConverter(
      __dirname + '/files/imageTest.jpg',
      `${__dirname}/files/`,
      size,
      'jpg',
      0,
      true,
      true,
      true
    );
    
    const result = await imageConverter.convert();
    const { response } = result;
    
    expect(response).toBe(true);
  });

  afterAll(() => {
    fs.rmSync(saveImagesPath, { recursive: true, force: true });
  });
});
