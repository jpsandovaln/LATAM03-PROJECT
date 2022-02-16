const ConverterException = require('../src/Exceptions/converter.exception');
const VideoConverter = require('../src/models/videoConverter.model');

const video = require('../__mocks__/videoConverter');
jest.mock('fluent-ffmpeg');

const FfmpegCommandMock = require('fluent-ffmpeg');
const { mockedFfmpeg } = FfmpegCommandMock;

// FfmpegCommandMock.mockReturnThis();

describe('Video Converter tests', () => {
  test('Converter success', async () => {
    const videoConverter = new VideoConverter('fileName', 'route', 1, '100%');
    const result = videoConverter.convert();
    mockedFfmpeg.emit('end');
    const { response } = await result;

    expect(response).toBe(true);
  });
  test('Converter fail', async () => {
    const videoConverter = new VideoConverter('fileName', 'route', 1, '100%');
    const result = videoConverter.convert();
    mockedFfmpeg.emit('error');
    await result.catch((error) => {
      expect(error).toBeInstanceOf(ConverterException);
    });
  });
});
