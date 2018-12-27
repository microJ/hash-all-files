# hash-all-files

Hash all files with Node.js

## Install

3 ways:

1. clone this repo, and require `./index.js`

2. `npm install --save-dev hash-all-files`

3. `yarn add --dev hash-all-files`

## Usage

```js
hashAllFile({
  projectPath: "./",
  folderPath: "./test/",
  hashLength: 8,
  filter(file) {
    return /\.png$/.test(file)
  }
})
```

## API

### hashAllFile

**projectPath:**

Mandatory.
Path relative to project root.

**folderPath:**

Mandatory.
Relative folder path will be hashed.

**filter:**

Optional.
Function `filter` receive a file path relative to param `folderPath`. File will be hashed which pass the test implemented by the provided function.

**hashLength:**

Optional.
Default value is `8`.

## Demo

`git clone && yarn && yarn test`

console:

```js
{ 'test/a.png': 'test/a.d41d8cd9.png',
  'test/folder1/666.txt': 'test/folder1/666.fae0b27c.txt',
  'test/folder1/b.png': 'test/folder1/b.d41d8cd9.png',
  'test/folder1/c.jpg': 'test/folder1/c.d41d8cd9.jpg',
  'test/index.js': 'test/index.254a638c.js' }

 { 'test/a.png': 'test/a.d41d.png',
  'test/folder1/b.png': 'test/folder1/b.d41d.png' }

 {}
```

## License

MIT
