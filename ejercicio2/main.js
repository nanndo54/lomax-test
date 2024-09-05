/*
Instrucciones:  Realiza un programa el cual dibuje un
pino en consola dada una altura para el árbol.
*/

const prompt = require('prompt-sync')({ sigint: true })
const log = console.log

function getValidNumber(promptMessage) {
  while (true) {
    const number = parseFloat(prompt(promptMessage))

    if (isNaN(number)) log('Ingrese un número válido')
    else return number
  }
}

function printTree(height) {
  for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1)
    const asterisks = '*'.repeat(i * 2 + 1)

    log(spaces + asterisks)
  }

  const trunk = ' '.repeat(height - 1) + '*'
  log(trunk)
  log(trunk)
}

const height = getValidNumber('Ingrese la altura del árbol: ')
printTree(height)
