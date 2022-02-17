const ConverterException = require('../src/Exceptions/converter.exception');
const DocumentFileConverter = require('../src/models/documentFileConverter.model');
const fs = require('fs');

describe('Document Converter tests', () => {
  const saveDocumentPath = `${__dirname}/files/documentFilesFolder/`;

  beforeAll(() => {
    fs.mkdirSync(saveDocumentPath, { recursive: true });
  });

  test('Document converted success', async () => {
    const documentFileConverter = new DocumentFileConverter(
      'pdf',
      __dirname + '/files/DocTest.docx',
      `${saveDocumentPath}`
    );

    expect(() => documentFileConverter.convert()).not.toThrow(
      ConverterException
    );
  });

  afterAll(() => {
    fs.rmSync(saveDocumentPath, { recursive: true, force: true });
  });
});
