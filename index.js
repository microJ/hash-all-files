const { getHash, joinHash } = require("./hash")
const { consoleError } = require("./utils")
const readdir = require("fs-readdir-recursive")
const path = require("path")

const getAllHash = ({
  projectPath,
  folderPath,
  filter,
  hashLength = 8
} = {}) => {
  const result = {}
  try {
    readdir(folderPath).forEach(file => {
      if (filter && filter(file) !== true) return
      const filePath = path.resolve(folderPath, file)
      const projectAbsPath = path.resolve(projectPath)
      let fileKey = filePath.replace(projectAbsPath, "")
      if (path.sep !== "/") {
        const { sep } = path
        fileKey = fileKey.split(sep).join("/")
      }
      const filePathWithHash = joinHash(fileKey, getHash(filePath, hashLength))
      result[fileKey] = filePathWithHash
    })
  } catch (err) {
    consoleError(err)
  }
  return result
}

module.exports = getAllHash
