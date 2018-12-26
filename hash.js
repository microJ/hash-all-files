const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

const getHash = (file, length) => {
  const hash = crypto.createHash("md5")
  const fileBuffer = fs.readFileSync(file)
  hash.update(fileBuffer)
  return length == null
    ? hash.digest("hex")
    : hash.digest("hex").slice(0, length)
}

const joinHash = (file, hash) => {
  const dotIndex = file.lastIndexOf(".")
  return `${file.slice(0, dotIndex)}.${hash + file.slice(dotIndex)}`
}

module.exports = {
  getHash,
  joinHash
}
