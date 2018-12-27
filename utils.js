const chalk = require("chalk")

const emojiError = "❌"

function consoleError(msg) {
  console.log(chalk.red(`${emojiError}  ${msg}`))
}

function joinPath(...args) {
  const joinedPath = args
    .join("/")
    .split("/")
    .reduce((pv, cv) => pv + (cv === "" ? "" : `${cv}/`), "")
  const joinedPathLen = joinedPath.length
  return joinedPathLen ? joinedPath.slice(0, joinedPathLen - 1) : joinedPath
}

module.exports = {
  consoleError,
  joinPath
}
