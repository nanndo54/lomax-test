/*
Instrucciones: Realiza un programa el cual dadas 4 coordenadas sobre un plano
 cartesiano (x,y), determine si las coordenadas forman un cuadrado.
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

function promptCoordinate(coordinateNumber) {
  const x = getValidNumber(
    `Coordenada ${coordinateNumber} (X, Y) - Ingrese X: `
  )
  const y = getValidNumber(
    `Coordenada ${coordinateNumber} (${x}, Y) - Ingrese Y: `
  )

  return { x, y }
}

function getDistance(coordinate1, coordinate2) {
  return Math.sqrt(
    Math.pow(coordinate2.x - coordinate1.x, 2) +
      Math.pow(coordinate2.y - coordinate1.y, 2)
  )
}

function coordinatesFormSquare(coordinates) {
  if (coordinates.length !== 4) return 'Las coordenadas NO forman un cuadrado'

  const distances = [
    getDistance(coordinates[0], coordinates[1]),
    getDistance(coordinates[0], coordinates[2]),
    getDistance(coordinates[0], coordinates[3]),
    getDistance(coordinates[1], coordinates[2]),
    getDistance(coordinates[1], coordinates[3]),
    getDistance(coordinates[2], coordinates[3])
  ]

  distances.sort((a, b) => a - b)

  const isSquare =
    distances.filter((distance, index) => {
      const nextDistance = distances[index + 1] || distances[0]
      return distance === nextDistance
    }).length === 4

  log(
    'Las coordenadas\n',
    coordinates,
    `\n${isSquare ? 'SÍ' : 'NO'} forman un cuadrado`
  )
}

const coordinates = [
  promptCoordinate(1),
  promptCoordinate(2),
  promptCoordinate(3),
  promptCoordinate(4)
]

coordinatesFormSquare(coordinates)
