module.exports = {
  name: 'square',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/square',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
