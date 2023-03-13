;(function () {
  'use strict'

  const listContainer = document.querySelector('.list-Container')
  const details = document.querySelector('.details')
  const cardsContainer = document.querySelector('.cards')
  const cards = cardsContainer.getElementsByTagName('li')
  const iSearch = document.getElementById('isearch')
  const filterImg = document.querySelector('.filterImg')
  const namesList = document.getElementById('namesList')

  const cardsAvailable = [
    {
      pokemonName: 'Bulbasaur',
      img: '../asserts/imgs/bulbassur.png',
      id: 1,
      types: ['grass', 'poison'],
      data: {
        weight: '6.9',
        height: '0.7',
        moves: ['Chlorophyll', 'Overgrow'],
      },
      description: `There is a plant seed on its back right from the day 
      this Pokémon is born. The seed slowly grows larger`,
      stats: {
        hp: 45,
        atk: 49,
        def: 49,
        satk: 65,
        sdef: 65,
        spd: 45,
      },
    },
    {
      pokemonName: 'Charmander',
      img: '/asserts/imgs/charmander.png',
      id: 4,
      types: ['fire'],
      data: {
        weight: '8.5',
        height: '0.6',
        moves: ['Mega-Punch', 'Fire-Punch'],
      },
      description: `It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.`,
      stats: {
        hp: 39,
        atk: 52,
        def: 43,
        satk: 60,
        sdef: 50,
        spd: 65,
      },
    },
    {
      pokemonName: 'Squirtle',
      img: '/asserts/imgs/squirtle.png',
      id: 7,
      types: ['water'],
      data: {
        weight: '9.0',
        height: '0.5',
        moves: ['Torrent', 'Rain-Dish'],
      },
      description: `When it retracts its long neck into its shell, it squirts out water with vigorous force.`,
      stats: {
        hp: 44,
        atk: 48,
        def: 65,
        satk: 50,
        sdef: 64,
        spd: 43,
      },
    },
    {
      pokemonName: 'Butterfree',
      img: '/asserts/imgs/butterfree.png',
      id: 12,
      types: ['bug', 'flying'],
      data: {
        weight: '32.0',
        height: '1.1',
        moves: ['Compound-Eyes', 'Tinted-Lens'],
      },
      description: `In battle, itt flaps its wings at great speed to release highly toxic dust into the air.`,
      stats: {
        hp: 60,
        atk: 45,
        def: 50,
        satk: 90,
        sdef: 80,
        spd: 70,
      },
    },
    {
      pokemonName: 'Pikachu',
      img: '/asserts/imgs/pikachu.png',
      id: 25,
      types: ['electric'],
      data: {
        weight: '6.0',
        height: '0.4',
        moves: ['Mega-Punch', 'Pay-Day'],
      },
      description: `Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.`,
      stats: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spd: 90,
      },
    },
    {
      pokemonName: 'Gastly',
      img: '/asserts/imgs/gastly.png',
      id: 92,
      types: ['ghost'],
      data: {
        weight: '0.1',
        height: '1.3',
        moves: ['Levitate'],
      },
      description: `Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.
      `,
      stats: {
        hp: 30,
        atk: 35,
        def: 30,
        satk: 100,
        sdef: 35,
        spd: 80,
      },
    },
    {
      pokemonName: 'Ditto',
      img: '/asserts/imgs/ditto.png',
      id: 132,
      types: ['normal', 'flying'],
      data: {
        weight: '4.0',
        height: '0.3',
        moves: ['Limber', 'Imposter'],
      },
      description: `It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.`,
      stats: {
        hp: 48,
        atk: 48,
        def: 48,
        satk: 48,
        sdef: 48,
        spd: 48,
      },
    },

    {
      pokemonName: 'Mew',
      img: '/asserts/imgs/mew.png',
      id: 152,
      types: ['psychic'],
      data: {
        weight: '6.9',
        height: '0.4',
        moves: ['Synchronize'],
      },
      description: `When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.`,
      stats: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spd: 100,
      },
    },
    {
      pokemonName: 'Aron',
      img: '/asserts/imgs/aron.png',
      id: 304,
      types: ['steel', 'rock'],
      data: {
        weight: '60.0',
        height: '0.4',
        moves: ['Sturdy', 'Rock-Head'],
      },
      description: `It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.`,
      stats: {
        hp: 50,
        atk: 70,
        def: 100,
        satk: 40,
        sdef: 40,
        spd: 30,
      },
    },
  ]

  function createOption({ pokemonName }) {
    const option = document.createElement('option')
    option.value = pokemonName

    return option
  }
  cardsAvailable.forEach((card) => {
    namesList.appendChild(createOption(card))
  })

  function getFilter() {
    return filterImg.classList.contains('numbers') ? 'numbers' : 'letters'
  }

  iSearch.addEventListener('input', delaySearch)
  let searchTimer
  let cardsList = cardsAvailable

  function delaySearch() {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(doSearch, 700) // espera 0.7s antes de chamar a função doSearch
  }

  function doSearch() {
    const searchTerm = document.getElementById('isearch').value
    cardsList = cardsAvailable.filter((card) =>
      card.pokemonName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    renderCard(cardsList)
  }

  function generateCard(cardData) {
    const card = document.createElement('li')
    const id = document.createElement('p')
    const cardImg = document.createElement('img')
    const pokemonName = document.createElement('h2')

    card.classList.add('card', cardData.types[0])

    id.className = 'id'
    id.textContent = '#' + cardData.id.toString().padStart(3, 0)
    cardImg.className = 'cardImg'
    cardImg.src = cardData.img
    cardImg.alt = cardData.name + ' photo'
    pokemonName.className = 'name'
    pokemonName.textContent = cardData.pokemonName

    card.append(id, cardImg, pokemonName)

    return card
  }

  function renderCard() {
    cardsContainer.innerHTML = ''
    if (getFilter() === 'numbers') {
      cardsList.sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id)
      })
    } else {
      cardsList.sort((a, b) => {
        if (a.pokemonName < b.pokemonName) {
          return -1
        }
        if (a.pokemonName > b.pokemonName) {
          return 1
        }
        return 0
      })
    }
    cardsList.forEach((card) => {
      cardsContainer.appendChild(generateCard(card))
    })
  }

  function updateDetailsCard({
    pokemonName,
    id,
    img,
    types,
    data,
    description,
    stats,
  }) {
    details.className = 'details show ' + types[0]
    const cardName = details.querySelector('.name')
    cardName.textContent = pokemonName

    const cardId = details.querySelector('.id')
    cardId.textContent = '#' + id.toString().padStart(3, 0)

    const cardImg = details.querySelector('.pokemonImg')
    cardImg.src = img
    const ulTypes = details.querySelector('.types')
    ulTypes.innerHTML = ''
    types.forEach((type) => {
      const li = document.createElement('li')
      li.className = type
      li.textContent = type.charAt(0).toUpperCase() + type.slice(1)
      ulTypes.appendChild(li)
    })
    const weight = details.querySelector('.weight')
    weight.textContent = data.weight.replace('.', ',')

    const height = details.querySelector('.height')
    height.textContent = data.height.replace('.', ',')

    const moves = details.querySelector('.moves')
    moves.innerHTML = ''

    const abilities = data.moves
    abilities.forEach((ability) => {
      const li = document.createElement('li')
      li.textContent = ability
      moves.appendChild(li)
    })

    const textDescription = details.querySelector('.description')
    textDescription.textContent = description

    Object.keys(stats).forEach((stat) => {
      const statBar = details.querySelector(`.statsBars .${stat} .bar`)
      statBar.style.width = `${stats[stat]}px`

      const statValue = details.querySelector(`.statsValues .${stat}`)
      const statsValue = stats[stat].toString()
      statValue.textContent =
        statsValue.length === 3 ? statsValue : statsValue.padStart(3, '0')
    })
  }
  function changeFilter() {
    filterImg.classList.toggle('numbers')
    filterImg.classList.toggle('letters')
    renderCard()
  }
  filterImg.addEventListener('click', changeFilter)

  cardsContainer.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) return

    let cardClicked = event.target
    while (cardClicked.nodeName !== 'LI') {
      cardClicked = cardClicked.parentElement
    }
    const cardClickedIndex = [...cards].indexOf(cardClicked)
    updateDetailsCard(cardsList[cardClickedIndex])
    listContainer.classList.remove('show')
    details.classList.add('show')
  })
  const returnButton = details.querySelector('.returnButton')
  returnButton.addEventListener('click', function () {
    listContainer.classList.add('show')
    details.classList.remove('show')
  })

  renderCard()
})()
