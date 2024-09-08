// Sellect all ellement they're has dark mode class
const els = document.querySelectorAll('#dm')
const toggleButtonLaptop = document.getElementById('btn-troggle-laptop');
const toggleButtonMobile = document.getElementById('btn-troggle-mobile');
const btns = [toggleButtonLaptop, toggleButtonMobile]

const elsDarlmode = [...els, ...btns]
console.log(elsDarlmode)

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    elsDarlmode.forEach(el => el.classList.toggle('dark-mode'))
    
    
    // Save user preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-sun"></i>`

    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }
}

// Function to set initial theme based on user preference
function setInitialTheme() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        elsDarlmode.forEach(el => el.classList.toggle('dark-mode'))
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
}

// Add event listeners to toggle buttons
document.addEventListener('DOMContentLoaded', () => {
    toggleButtonLaptop.addEventListener('click', toggleDarkMode);
    toggleButtonMobile.addEventListener('click', toggleDarkMode);
    
    // Set initial theme
    setInitialTheme();
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  
    localStorage.setItem('darkMode', 'enabled');
  }
