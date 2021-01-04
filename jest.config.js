module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  transformIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json-summary', 'json', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}
