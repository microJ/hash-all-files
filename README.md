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

## License

MIT
