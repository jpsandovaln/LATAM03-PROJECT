const InvalidFileException = require('../src/Exceptions/invalidFile.exception');
const FileChecker = require('../src/helpers/fileChecker.helper');

FORMATS_SUPPORTED_IMAGE = ['jpg, jpeg, png'];

describe('File checker tests', () => {
  let env;

  beforeEach(() => {
    env = process.env;
    process.env.FORMATS_SUPPORTED_IMAGE = FORMATS_SUPPORTED_IMAGE;
  });

  test('Check valid extension', () => {
    const reqFileMock = {
      mimetype: 'image/jpg',
    };

    expect(() => FileChecker.uploadChecker(reqFileMock, 'IMAGE')).not.toThrow(
      InvalidFileException
    );
  });

  test('Check invalid extension', () => {
    const reqFileMock = {
      mimetype: 'video/mp4',
    };
    expect(() => FileChecker.uploadChecker(reqFileMock, 'IMAGE')).toThrow(
      InvalidFileException
    );
  });

  afterEach(() => {
    process.env = env;
  });
});
