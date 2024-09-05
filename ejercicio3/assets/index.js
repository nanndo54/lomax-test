const $ = document.querySelector.bind(document)

const formElement = $('#input-form')
const cardElement = $('#card')

const nameDisplayElement = $('#card-name')
const companyDisplayElement = $('#card-company')
const positionDisplayElement = $('#card-position')
const phoneDisplayElement = $('#card-phone')
const emailDisplayElement = $('#card-email')

const resetFormButton = $('#reset-form')
const printCardButton = $('#print-card')

const cardData = [
  {
    id: 'name',
    displayElement: nameDisplayElement,
    defaultValue: 'Keanu Reeves'
  },
  {
    id: 'company',
    displayElement: companyDisplayElement,
    defaultValue: 'Marvel Studios'
  },
  {
    id: 'position',
    displayElement: positionDisplayElement,
    defaultValue: 'Actor de reparto'
  },
  {
    id: 'phone',
    displayElement: phoneDisplayElement
  },
  {
    id: 'email',
    displayElement: emailDisplayElement
  }
]

formElement.addEventListener('input', (event) => {
  const target = event.target
  const id = target.id

  const data = cardData.find((data) => data.id === id)
  const { displayElement, defaultValue } = data

  const value = target.value || defaultValue || ''

  displayElement.textContent = value
})

resetFormButton.addEventListener('click', () => {
  cardData.forEach(({ displayElement, defaultValue }) => {
    displayElement.textContent = defaultValue
  })
})

printCardButton.addEventListener('click', () => {
  html2canvas(cardElement, {
    allowTaint: true,
    foreignObjectRendering: true,
    useCors: true
  }).then((canvas) => {
    const imageData = canvas.toDataURL('image/png')

    const link = document.createElement('a')
    link.href = imageData
    link.download = 'image.png'
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
  })
})
