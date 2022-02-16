const FfmpegCommandMock = jest.fn();

const mockedFfmpeg = {
  events: {},
  emit(event) {
    this.events[event]();
  },
  on(event, handler) {
    this.events[event] = handler;
    return this;
  },
  save() {
    return this;
  },
  fps() {
    return this;
  },
  size() {
    return this;
  },
};

FfmpegCommandMock.mockReturnValue(mockedFfmpeg);

module.exports = FfmpegCommandMock;
module.exports.mockedFfmpeg = mockedFfmpeg;
