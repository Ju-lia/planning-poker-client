module.exports = {
  name: 'poker-card',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/poker-card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
