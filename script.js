// ------- Rendering My the thechnoligies 

// 1) selecting my elements
const pers = document.querySelectorAll('.pers')
const techParentEl = document.querySelector('.techs')
const projectParentEl = document.querySelector('.projects')
const expParentEl = document.querySelector('.con')
const btnSeeMore = document.querySelector('#see-more')
const btnOpenMenu = document.querySelector('.menu-nav-bar')
const btnCloseMenu = document.querySelector('.close-icon')
const toggleButtonMobile = document.getElementById('btn-troggle-mobile');
let overlay = document.querySelector('.overlay')
let menu = document.querySelector('.nav-bar-mobile')
const parentMobileLinks = document.getElementById('nav-mobile-links')
// 2) Storing my data 
let techsData = [
    {
        srcImage: './assets/logo/html.png',
        name: 'HTML',
        porsentage: 95,
        classColor: 'html'
    },
    {
        srcImage: './assets/logo/css.png',
        name: 'CSS',
        porsentage: 80,
        classColor: 'css'
    },
    {
        srcImage: './assets/logo/js3.png',
        name: 'JavaScript',
        porsentage: 85,
        classColor: 'js'
    },
    {
        srcImage: './assets/logo/reactjs.png',
        name: 'ReactJS',
        porsentage: 80,
        classColor: 'reactJs'
    },
    {
        srcImage: './assets/logo/git.png',
        name: 'GIT',
        porsentage: 95,
        classColor: 'html',
    },
    {
        srcImage: './assets/logo/sql.png',
        name: 'SQL',
        porsentage: 98,
        classColor: 'css',
    },
    {
        srcImage: './assets/logo/php.png',
        name: 'PHP',
        porsentage: 70,
        classColor: 'php',
    },
    {
        srcImage: './assets/logo/laravel.png',
        name: 'Laravel',
        porsentage: 75,
        classColor: 'laravel',
    },
    {
        srcImage: './assets/logo/mongoDB.png',
        name: 'MongoDB',
        porsentage: 85,
        classColor: 'mongoDB', 
    }
];

const projectData = [
    {
        projectName: 'Topico',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: "./assets/projectsImg/ecommerceProject.png",
        type:'Front-end',
        description: 'Ecommerce of tech store',
        API: ''
    },
    {
        projectName: 'Mapty',
        techs: ['HTML', 'CSS', 'JavaScript', 'leafletJs'],
        imageProject: './assets/projectsImg/Mapty.png',
        type: 'Front-end',
        description: 'Localition sport activities',
        API: ''
    },
    {
        projectName: 'Farkify',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: './assets/projectsImg/forkify.png',
        type:'Front-end',
        description: 'Recipe search',
        API: 'https://forkify-api.herokuapp.com/v2'
    },
    {
        projectName: 'Backist',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject:'./assets/projectsImg/bankist.png',
        type:'Front-end',
        description: 'Landing page bank application',
        API: ''
    },
    {
        projectName: 'Backist Dashboard',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject:'./assets/projectsImg/bankistDashbord.png',
        type:'Front-end',
        description: 'Client Dashboard bank application',
        API: ''
    },
    {
        projectName: 'Dice Game',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject:'./assets/projectsImg/diceGame.png',
        type:'Front-end',
        description: 'Dice game',
        API: ''
    }
]

const InfoData = [
    {
        type: 'education',
        year: '2019 - 2020',
        description: 'Baccalauréat in Science at Lycée Lalla Nezha'
    },
    {
        type: 'education',
        year: '2022 - 2023',
        description: 'Specialized Technician Diploma in Digital Development Web Full-Stack at ISTA'
    },
    {
        type: 'experience',
        year: '2023',
        description: 'Internship at IsyChaine company as a full-stack developer'
    },
    {
        type: 'education',
        year: '2024',
        description: 'Certificate in Angular Framework at Orange Digital Center'
    },
    {
        type: 'education',
        year: 'Now',
        description: 'Improving my skills in online courses and make some projects'
    },
]

// 3) generate technologie markup 
const generateTechsMarkup = function (data) {
    return `
        <div class="tech cart">
                <div class="logo">
                    <img src=${data.srcImage} alt="html logo" > 
                    <div class="pers ${data.classColor} hidden">${data.porsentage}%</div>
                </div>
                <h3 class="tech-name" id="dm">${data.name}</h3>
            </div> 
    `
}

// 4) Render it in parent div in html
const renderMarkup = function (data, ParentEl, generateMarkup) {
   data.forEach(d => {
    const markup = generateMarkup(d)
    ParentEl.insertAdjacentHTML('beforeend', markup)
   })
}

// 5) Run renderMarkup function
renderMarkup(techsData, techParentEl, generateTechsMarkup)


// ------- make show and hidden porsentage of technologies

// 1) Select all elements with the class "tech cart"
const techCards = document.querySelectorAll('.tech.cart');

// 2) Add event listeners for mouseenter and mouseleave
techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // 1) Find the element with a class that includes "pers" within this card
        const persElement = card.querySelector('[class*="pers"]');
        if (persElement) {
            persElement.classList.remove('hidden');
        }

    });

    card.addEventListener('mouseleave', () => {
        // 2) Find the element with a class that includes "pers" within this card
        const persElement = card.querySelector('[class*="pers"]');
        if (persElement) {
            persElement.classList.add('hidden');
        }
    });
});

// ------ Rendering project markup

const generateProjectMarkup = function (data){
    return `
         <div class="project">
                <div class="project-content">
                    <ul class="project-info">
                        <li><span>Project name</span> <i class="fa-solid fa-caret-right"></i> ${data.projectName}</li>
                        <li><span>Technologies</span> <i class="fa-solid fa-caret-right"></i> ${data.techs.map(tech => tech).join(', ')}</li>
                        <li><span>Type</span> <i class="fa-solid fa-caret-right"></i> ${data.type}</li>
                        <li><span>Project description</span> <i class="fa-solid fa-caret-right"></i> ${data.description}</li>   
                        ${data.API ? `<li><span>API</span> <i class="fa-solid fa-caret-right"></i> <a href="${data.API}"> ${data.API}</a></li>`: ''}
                    </ul>
                </div>
                <img src=${data.imageProject} alt=${data.decripttion}>
            </div>

    `
}

// const generateExpreMarkup = (data) =>{
//     return `
//         <div class="con">
//             <h2>${data.year}</h2>
//             <p>${data.description}</p>
//          </div>
//     `
// }


renderMarkup(projectData, projectParentEl, generateProjectMarkup)
// renderMarkup(InfoData, expParentEl, generateExpreMarkup)



btnSeeMore.addEventListener('click', function(){
    projectParentEl.style.height = '100%'
    btnSeeMore.style.display = 'none';
})


const openMenu = function (){
    menu.style.left = '0';
    overlay.style.width = '100vw';
}


const closeMenu = function (){
    menu.style.left = '-450px';
    overlay.style.width = 0;
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu)

console.log(parentMobileLinks)

parentMobileLinks.addEventListener('click', function(e){
    const navLink = e.target.closest('.nav-link')
    if(!navLink) return;
    closeMenu();
    console.log(navLink)
})

toggleButtonMobile.addEventListener('click', closeMenu)
