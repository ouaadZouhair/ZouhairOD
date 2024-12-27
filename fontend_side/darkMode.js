// Sellect all ellement they're has dark mode class
const els = document.querySelectorAll('#dm')
const toggleButtonLaptop = document.getElementById('btn-troggle-laptop');
const toggleButtonMobile = document.getElementById('btn-troggle-mobile');
const app  = document.getElementById('app');




// Function to toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    
    
    // Save user preference to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-sun hover:text-blue-500 duration-150"></i>`
        toggleButtonMobile.innerHTML = `<i class="fa-solid fa-sun hover:text-blue-500 duration-150"></i>`

    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-moon hover:text-blue-500 duration-150"></i>`
        toggleButtonMobile.innerHTML = `<i class="fa-solid fa-moon hover:text-blue-500 duration-150"></i>`
    }
}

// Function to set initial theme based on user preference
function setInitialTheme() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark');
        toggleButtonLaptop.innerHTML = `<i class="fa-solid fa-sun hover:text-blue-500 duration-150"></i>`
        toggleButtonMobile.innerHTML = `<i class="fa-solid fa-sun hover:text-blue-500 duration-150"></i>`
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
