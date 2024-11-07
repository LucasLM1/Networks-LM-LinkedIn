//Tema dark e light
const themeButton = document.getElementById('theme-button')
const lightTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

window.sr = ScrollReveal({ reset: true });

const elements = [
    document.querySelector('header'),
    document.querySelector('footer'),
    
    document.querySelector('.LM1'),
    document.querySelector('.LM2'),
    document.querySelector('.LM3'),
    document.querySelector('.LM4')
]

var cascading = {
    duration: '2500',
    origin: 'top',
    distance: '25px'
}

sr.reveal(elements, cascading);

sr.reveal('.LM1',{
    delay: 1000,
})

sr.reveal('.LM2',{
    delay: 1500,
})

sr.reveal('.LM3',{
    delay: 2000
})

sr.reveal('.LM4',{
    delay: 2500
})

sr.reveal('footer',{
    delay: 3000
});

// const typing = document.querySelector('[data-js="typing"]');

// const messages = [
//     'Desenvolvido por: Lucas M. Souza',
//     'Entre em contato comigo através de uma das minhas redes sociais', 
//     'Obrigado por visitar ❤️'
// ];

// let messageIndex = 0;
// let characterIndex = 0;
// let currentMessage = '';
// let currentCharacters = '';

// const type = () => {
//     if(messageIndex === messages.length){
//         messageIndex = 0
//     }

//     currentMessage = messages[messageIndex]
//     currentCharacters = currentMessage.slice(0, characterIndex++)
//     typing.textContent = currentCharacters

//     if(currentCharacters.length === currentMessage.length){
//         messageIndex++
//         characterIndex = 0
//     }
// }
// setInterval(type, 200)