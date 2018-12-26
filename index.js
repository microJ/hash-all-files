const { getHash, joinHash } = require("./hash")
const { consoleError } = require("./utils")
const readdir = require("fs-readdir-recursive")
const path = require("path")

const getAllHash = ({ projectPath, folderPath, filter } = {}) => {
  const result = {}
  try {
    readdir(folderPath).forEach(file => {
      if (filter && filter(file) !== true) return
      const filePath = path.resolve(folderPath, file)
      const projectAbsPath = path.resolve(projectPath)
      let fileKey = filePath.replace(projectAbsPath, "")
      let filePathWithHash = joinHash(fileKey, getHash(filePath, 8))
      if (path.sep !== "/") {
        const { sep } = path
        fileKey = fileKey.replace(sep, "/")
        filePathWithHash = filePathWithHash.replace(sep, "/")
      }
      result[fileKey] = filePathWithHash
    })
  } catch (err) {
    consoleError(err)
  }
  return result
}

module.exports = getAllHash
