module.exports = {
   preset: 'ts-jest/presets/js-with-babel',
   testPathIgnorePatterns: ['/node_modules/', '/dist/'],
   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
   globals: {
     'ts-jest': {
       isolatedModules: true,
       tsconfig: 'tsconfig.json'
     }
   },
 }
 