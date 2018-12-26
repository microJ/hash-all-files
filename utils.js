const chalk = require("chalk")

const emojiError = "❌"

function consoleError(msg) {
  console.log(chalk.red(`${emojiError}  ${msg}`))
}

module.exports = {
  consoleError
}
