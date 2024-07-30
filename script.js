scroll_div = document.getElementsByClassName('scroll-div')[0]
embeds = document.getElementsByClassName('soundcloud')

hovered = false
scroll_div.onmouseenter = () => {
    hovered = true
}
scroll_div.onmouseout = () => {
    hovered = false
}

slide = 0
function shift() {
    if (hovered == false) {
        if (slide < embeds.length - 1) {
            slide += 1
        } else {
            slide = 0
        }
        scroll_div.style.transform = `translateX(-${slide * 444}px)`
        console.log(slide)
    }
    ticker = setTimeout(shift, 5000)
}
ticker = setTimeout(shift, 5000)

function next() {
    clearTimeout(ticker)
    if (slide < embeds.length - 1) {
        slide += 1
    } else {
        slide = 0
    }
    scroll_div.style.transform = `translateX(-${slide * 444}px)`
}

function back() {
    clearTimeout(ticker)
    if (slide > 0) {
        slide -= 1
    } else {
        slide = embeds.length - 1
    }
    scroll_div.style.transform = `translateX(-${slide * 444}px)`
}

window.addEventListener('resize', checkWindowSize, true);

header = document.getElementsByClassName('header')[0]
container = document.getElementsByClassName('container')[0]
function checkWindowSize() {
    if (window.innerWidth <= window.innerHeight) {
        header.style.flexDirection = 'column'
        header.style.height = '12rem'

        container.style.flexDirection = 'column'
    } else {
        header.style.flexDirection = 'row'
        header.style.height = '6rem'

        container.style.flexDirection = 'row'
    }
}
checkWindowSize()

spotify = document.getElementsByClassName('spotify')[0]
banger_txt = document.getElementById('banger-txt')
bangers = [
    ['57VfoS1TXAp5Mx7l12MDNa', 'house'],
    ['7qSeLqSb07k8qtL8LfMokD', 'dnb'],
    ['36xxmNRjLOJdQzVuNDPRJo', 'ukg'],
    ['7Itu104w80JUTTo8UFNeMz', 'dub'],
    ['2wCgQVCF0jhDWiNTFjti7b', 'ukg'],
    ['179eax5WtJDUOA0zq071D4', 'house'],
    ['7L4Yvp5YiCxqj5EbIXSDmU', 'jungle'],
    ['7Cru8mwE5zyGkr80Bnp8qs', 'ukg'],
    ['6FgthnS6GYgLuELf7uRdDz', 'dnb'],
    ['2I6FbtWdilYB0yFvzr9nSw', 'house'],
    ['5CNH1fectMnNkRmq6hMmIN', 'dnb'],
    ['4vk250sguUOlV3O6bPJix8', 'dub'],
    ['6X0Gc6Uu0725HPPNUnAxG2', 'jungle'],
    ['7Ab9Gsy4t67Qdn0ifFjHk3', 'dnb'],
    ['5nusFeYgS2GAHpFAYMDT3U', '140'],
    ['3HJRVjX6s6o2bu4UosPuQ5', 'dnb'],
    ['1chdNlzpfhb0j9ZdBX7uZE', '140'],
    ['29Jv6cwQUdFMEjQCoQvdb5', 'jungle']
]
rand = bangers[Math.round(Math.random() * bangers.length)]
spotify.src = 'https://open.spotify.com/embed/track/' + rand[0]
banger_txt.innerHTML = `here's a free, handpicked, ${rand[1]} banger for you`