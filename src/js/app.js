// Настройка темной темы

const changerStyles = document.getElementById('changerStyles')

changerStyles.onclick = (() => {
    let theme = document.getElementById('changerTheme')
    if (theme.getAttribute('href') == '/src/css/components/theme/lite.css') {
        theme.href = '/src/css/components/theme/dark.css'
    } else {
        theme.href = '/src/css/components/theme/lite.css'
    }
}) 
 
// Настройка подсветки кнопок опции и переход по вкладкам

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')


function changeStyleCard (id1, id2, id3, item) {
    id1.onclick =  (() => {
        let newLink = document.querySelector('.options__cards-link')
        if (id1.style.background == '') {
            id1.style.background = 'linear-gradient(225deg, #894AC9 0%, #4D46B1 100%)'
            id1.style.backdrop = 'blur(9.06094px)'
            id1.style.color = 'white'
            id2.style.background = ''
            id2.style.color = ''
            id3.style.background = ''
            id3.style.color = ''
            if (newLink.getAttribute('href') !== item) {
                newLink.href = item
            }
        }
    })
}

changeStyleCard (card1, card2, card3, 'https://www.google.com/search?q=1')
changeStyleCard (card2, card1, card3, 'https://www.google.com/search?q=2')
changeStyleCard (card3, card1, card2, 'https://www.google.com/search?q=3')

// Остановка анимации слайдера по клику

let cardOff = document.querySelector('.review__cards')

cardOff.onclick = (() => {
    if (cardOff.style.animationPlayState == '') {
        cardOff.style.animationPlayState = 'paused'
        cardOff.style.overflowX = 'scroll'
        cardOff.style.maxWidth = ''
    }
})