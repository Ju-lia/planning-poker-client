module.exports = {
  name: 'poker-room',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/poker-room',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
