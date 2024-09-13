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
const toggleButtonLaptop = document.getElementById('btn-troggle-laptop');


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
        imageProject: "./assets/projectsImg/ecommerceProject.jpg",
        imgLazy: "./assets/projectsImg/ecommerceProject-lazy.png",
        type: 'Front-end',
        description: 'Ecommerce of tech store',
        projectLien: 'https://ecotopico.netlify.app',
        API: ''

    },
    {
        projectName: 'Mapty',
        techs: ['HTML', 'CSS', 'JavaScript', 'leafletJs'],
        imageProject: './assets/projectsImg/Mapty.jpg',
        imgLazy: './assets/projectsImg/Mapty-lazy.png',
        type: 'Front-end',
        description: 'Localition sport activities',
        API: '',
        projectLien: 'https://ouaadzouhair.github.io/mapty-app/'
    },
    {
        projectName: 'Farkify',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: './assets/projectsImg/forkify.jpg',
        imgLazy: './assets/projectsImg/forkify-lazy.png',
        type: 'Front-end',
        description: 'Recipe search',
        projectLien: 'https://ouaadzouhair.github.io/mapty-app/',
        API: 'https://forkify-api.herokuapp.com/v2'
    },
    {
        projectName: 'Backist',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: './assets/projectsImg/bankist.jpg',
        imgLazy: './assets/projectsImg/bankist-lazy.png',
        type: 'Front-end',
        projectLien: 'https://bankist10.netlify.app',
        description: 'Landing page bank application',
        API: ''
    },
    {
        projectName: 'Backist Client Dashboard',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: './assets/projectsImg/bankistDashbord.jpg',
        imgLazy: './assets/projectsImg/bankistDashbord-lazy.png',
        type: 'Front-end',
        projectLien: 'https://backist-client.netlify.app',
        description: 'Client Dashboard bank application',
        API: ''
    },
    {
        projectName: 'Dice Game',
        techs: ['HTML', 'CSS', 'JavaScript'],
        imageProject: './assets/projectsImg/diceGame.jpg',
        imgLazy: './assets/projectsImg/diceGame-lazy.png',
        type: 'Front-end',
        projectLien: 'https://gamedice10.netlify.app',
        description: 'Dice game',
        API: '',
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

// 3) Create the Application
class App {
    constructor() {
        // Init
        this._renderMarkup(techsData, techParentEl, this._generateTechsMarkup)
        this._renderMarkup(projectData, projectParentEl, this._generateProjectMarkup)
        this._observeSections()

        // Events
        btnOpenMenu.addEventListener('click', this.openMenu);
        btnCloseMenu.addEventListener('click', this.closeMenu);
        overlay.addEventListener('click', this.closeMenu)

        parentMobileLinks.addEventListener('click', (e) => {
            const navLink = e.target.closest('.nav-link');
            if (!navLink) return;
            this.closeMenu();  // `this` now correctly refers to the class instance
        });

        toggleButtonMobile.addEventListener('click', this.closeMenu)

        btnSeeMore.addEventListener('click', function () {
            projectParentEl.style.height = '100%'
            btnSeeMore.style.display = 'none';
        })

    }

    openMenu = function () {
        menu.style.left = '0';
        overlay.style.width = '100vw';
    }


    closeMenu = function () {
        menu.style.left = '-450px';
        overlay.style.width = 0;
    }


    _renderMarkup = function (objData, ParentEl, generateMarkup) {
        objData.forEach(data => {
            const markup = generateMarkup(data)
            ParentEl.insertAdjacentHTML('beforeend', markup)
        })
    }

    _generateTechsMarkup = function (data) {
        return `
            <div class="tech cart">
                    <div class="logo">
                        <img src=${data.srcImage} alt="html logo" > 
                        <div class="pers ${data.classColor}">${data.porsentage}%</div>
                    </div>
                    <h3 class="tech-name" id="dm">${data.name}</h3>
                </div> 
        `
    }

    _generateProjectMarkup = function (data) {
        return `
             <div class="project ">
                    <div class="project-content ">
                        <ul class="project-info">
                            <li><span>Project name</span> <i class="fa-solid fa-caret-right"></i> ${data.projectName}</li>
                            <li><span>Technologies</span> <i class="fa-solid fa-caret-right"></i> ${data.techs.map(tech => tech).join(', ')}</li>
                            <li><span>Type</span> <i class="fa-solid fa-caret-right"></i> ${data.type}</li>
                            ${data.API ? `<li><span>API</span> <i class="fa-solid fa-caret-right"></i> <a href="${data.API}"> ${data.API}</a></li>` : ''}
                        </ul>
                        <a class="btn-view" href=${data.projectLien}><i class="fa-solid fa-eye"></i></a>
                    </div>
                    <img id="img" src=${data.imageProject} data-src=${data.imageProject} alt=${data.decripttion}>
                </div>
        `
    }

    _observeSections = () => {
        const allSections = document.querySelectorAll('.section');

        const revealSection = (entries, observer) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15,
        });

        allSections.forEach((section) => {
            sectionObserver.observe(section);
            section.classList.add('section--hidden');
        });
    };

}

// 4) Start the application
const app = new App()
