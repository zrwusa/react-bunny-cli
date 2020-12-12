const { promisify } = require('util')
const ora = require('ora')
const chalk = require('chalk')
const download = promisify(require('download-git-repo'))

const clone = async function(repo, dir, opotions = {}) {
  console.log('---repo, dir, opotions', chalk.yellow(repo, dir, JSON.stringify(opotions)))
  const process = ora(`Start downloading ${chalk.blue(repo)}`)
  process.start()
  process.color = 'yellow'
  process.text = `Downloading..... ${chalk.yellow(repo)} `

  try {
    await download(repo, dir, opotions)
    process.color = 'green'
    process.text = `Successfully downloaded ${chalk.green(repo)} `
    process.succeed()
  } catch (error) {
    process.color = 'red'
    process.text = 'Failed to download' + JSON.stringify(error)
    process.fail()
  }
}

module.exports = clone
