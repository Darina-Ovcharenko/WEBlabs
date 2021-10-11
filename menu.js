const switchLinks = document.querySelectorAll('[data-switch]')

const hideAllSwitches = () => {
    for (const link of switchLinks) {
        const element = document.getElementById(link.dataset.switch)
        element.style.display = 'none'
        link.classList.remove('active')
    }
}
hideAllSwitches()

for (const link of switchLinks) {
    link.addEventListener('click', () => {
        hideAllSwitches()

        const element = document.getElementById(link.dataset.switch)
        if (element) element.style.display = 'block'

        link.classList.add('active')
    })
}