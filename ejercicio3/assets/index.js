const $ = document.querySelector.bind(document)

const formElement = $('#input-form')
const cardElement = $('#card')

const nameDisplayElement = $('#card-name')
const companyDisplayElement = $('#card-company')
const positionDisplayElement = $('#card-position')
const phoneDisplayElement = $('#card-phone')
const emailDisplayElement = $('#card-email')
const logoDisplayElement = $('#card-logo')

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
  },
  {
    id: 'logo',
    displayElement: logoDisplayElement,
    type: 'image'
  }
]

formElement.addEventListener('input', (event) => {
  const target = event.target
  const id = target.id

  const data = cardData.find((data) => data.id === id)
  const { displayElement, defaultValue, type = 'text' } = data

  if (type === 'image') {
    const file = target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      displayElement.src = event.target.result
    }

    reader.readAsDataURL(file)
    return
  } else if (type === 'text') {
    const value = target.value || defaultValue || ''
    displayElement.textContent = value
  }
})

resetFormButton.addEventListener('click', () => {
  cardData.forEach(({ displayElement, defaultValue }) => {
    displayElement.textContent = defaultValue
  })
})

printCardButton.addEventListener('click', () => {
  htmlToImage.toPng(cardElement).then((dataUrl) => {
    download(dataUrl, 'tarjeta de presentación.png')
  })
})
