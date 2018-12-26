const hashAllFile = require("../index")

const log = (...payload) => {
  console.log("\n", ...payload)
}

log(
  hashAllFile({
    projectPath: "./",
    folderPath: "./test/"
  })
)

log(
  hashAllFile({
    projectPath: "./",
    folderPath: "./test/",
    filter(file) {
      return /\.png$/.test(file)
    }
  })
)

log(
  hashAllFile({
    projectPath: "./",
    folderPath: "./test/",
    filter() {}
  })
)
