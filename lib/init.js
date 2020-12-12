const chalk = require('chalk')
const Prompt = require('inquirer')

const clone = require('./clone')

const remote = 'github:zrwusa/react-bunny#main'

const initQuestions = name => [
  {
    type: 'confirm',
    name: 'isInit',
    message: `Are you sure to create project at ${chalk.green(name)} path?`,
    prefix: '?'
  }
]

const init = async name => {
  try {
    const { isInit } = await Prompt.prompt(initQuestions(name))
    if (isInit) {
      await clone(remote, name)
    } else {
      console.log(chalk.red('Process exits advanced'))
    }
  } catch (error) {
    console.log(chalk.red(error))
  }
}

module.exports = init
