// 1) selecting my elements
const pers = document.querySelectorAll('.pers')
const exAndEduParent = document.querySelector('#exAndEdu')
const projectParentEl = document.querySelector('#projects')
const techsBackEndParentEl = document.getElementById('techBack-end');
const techsFrontEndParentEl = document.getElementById('techFront-end');
const btnLoadMore = document.getElementById('load-more')

const btnOpenMenu = document.getElementById('menuBtn')
const btnCloseMenu = document.getElementById('close-menu')
const toggleButtonMobile = document.getElementById('btn-troggle-mobile');
let overlay = document.querySelector('.overlay')
let menu = document.querySelector('.nav-bar-mobile')
const parentMobileLinks = document.getElementById('nav-mobile-links')
const toggleButtonLaptop = document.getElementById('btn-troggle-laptop');


// 2) Storing my data 
const techsData = [
    {
        srcImage: './assets/logo/html.png',
        name: 'HTML',
        porsentage: 95,
        type: 'frontEnd'
    },
    {
        srcImage: './assets/logo/css.png',
        name: 'CSS',
        porsentage: 90,
        type: 'frontEnd'
    },
    {
        srcImage: './assets/logo/tailwind.png',
        name: 'CSS',
        porsentage: 90,
        type: 'frontEnd'
    },
    {
        srcImage: './assets/logo/bootstrap.png',
        name: 'Bootstrap',
        porsentage: 90,
        type: 'frontEnd'
    },
    {
        srcImage: './assets/logo/js.png',
        name: 'JavaScript',
        porsentage: 85,
        type: 'frontEnd'
    },
    {
        srcImage: './assets/logo/reactjs.png',
        name: 'ReactJS',
        porsentage: 80,
        type: 'frontEnd'
    },
    // {
    //     srcImage: './assets/logo/git.png',
    //     name: 'GIT',
    //     porsentage: 95,
    // },
   
    {
        srcImage: './assets/logo/php.png',
        name: 'PHP',
        porsentage: 70,
        type: 'backEnd'
    },
    {
        srcImage: './assets/logo/laravel.png',
        name: 'Laravel',
        porsentage: 75,
        type: 'backEnd'
    },
    {
        srcImage: './assets/logo/mysql.png',
        name: 'MySQL',
        porsentage: 80,
        type: 'backEnd'
    },
    {
        srcImage: './assets/logo/mongoDB.png',
        name: 'MongoDB',
        porsentage: 85,
        type: 'backEnd'
    }
];

const techsFrontEnd = techsData.filter(tech => tech.type === 'frontEnd');
const techsBackEnd = techsData.filter(tech => tech.type === 'backEnd');


const projectData = [
    {
        projectName: 'Topico',
        techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
        imageProject: "./assets/projectsImg/ecommerceProject.jpg",
        type: 'Front-end',
        description: 'Ecommerce of tech store',
        projectLien: 'https://ecotopico.netlify.app',
        API: ''

    },
    // {
    //     projectName: 'Mapty',
    //     techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
    //     imageProject: './assets/projectsImg/Mapty.jpg',
    //     type: 'Front-end',
    //     description: 'Localition sport activities',
    //     API: '',
    //     projectLien: 'https://ouaadzouhair.github.io/mapty-app/'
    // },
    {
        projectName: 'Farkify',
        techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
        imageProject: './assets/projectsImg/forkify.jpg',
        type: 'Front-end',
        description: 'Recipe search',
        projectLien: 'https://ouaadzouhair.github.io/mapty-app/',
        API: 'ForkifyJs'
    },
    {
        projectName: 'Backist',
        techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
        imageProject: './assets/projectsImg/bankist.jpg',
        type: 'Front-end',
        projectLien: 'https://bankist10.netlify.app',
        description: 'Landing page bank application',
        API: ''
    },
    {
        projectName: 'Backist Client Dashboard',
        techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
        imageProject: './assets/projectsImg/bankistDashbord.jpg',
        type: 'Front-end',
        projectLien: 'https://backist-client.netlify.app',
        description: 'Client Dashboard bank application',
        API: ''
    },
    // {
    //     projectName: 'Dice Game',
    //     techs: ['./assets/logo/html.png', './assets/logo/css.png', './assets/logo/js.png'],
    //     imageProject: './assets/projectsImg/diceGame.jpg',
    //     type: 'Front-end',
    //     projectLien: 'https://gamedice10.netlify.app',
    //     description: 'Dice game',
    //     API: '',
    // }
]

const exAndEdu = [
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
    currentIndex = 0; // Track the currently loaded projects
    itemsPerPage = 2; // Number of projects per load
    constructor() {
        // Init
        this._renderMarkup(exAndEdu, exAndEduParent, this._generateExAndEduMarkup)
        this._renderProjects(projectData);
        this._renderMarkup(techsFrontEnd, techsFrontEndParentEl, this._generateTechsMarkup)
        this._renderMarkup(techsBackEnd, techsBackEndParentEl, this._generateTechsMarkup)
        // this._observeSections()
        
        toggleButtonMobile.addEventListener('click', this.closeMenu)
        btnLoadMore.addEventListener('click', this._renderProjects.bind(this, projectData));

    }



    _renderMarkup = function (objData, ParentEl, generateMarkup) {
        objData.map((data, i) => {
            const markup = generateMarkup(data, i)
            ParentEl.insertAdjacentHTML('beforeend', markup)
        })
    }

    _generateTechsMarkup = function (data, i){
        return `
            <div class="relative">
                <img src=${data.srcImage} class="w-14 lg:w-20" alt=${data.name}>

                <div class="w-10 h-10 md:w-12 md:h-12  rounded-full bg-white/80 absolute -bottom-5 -right-4 flex justify-center items-center">
                    <h1 class="font-mono text-lg md:text-xl font-semibold ">${data.porsentage}%</h1>
                </div>
            </div>
        `
    }

    _generateExAndEduMarkup = function (data, i) {
        return `
            <div class="flex ${(i % 2 === 0) ? "md:flex-row" : "md:flex-row-reverse"} flex-row-reverse gap-3 justify-between items-center w-full mb-8">
                    
                    <div class=" w-full lg:w-1/2 md:w-1/2 text-left">
                        <div
                            class="border border-gray-300 bg-gray-100 rounded-xl p-4 shadow-l cursor-pointer hover:scale-105 duration-200 dark:bg-indigo-950/40 dark:border-indigo-950/40">
                            <h3 class=" font-bold text-lg md:text-xl dark:text-white">${data.year}</h3>
                            <p class="text-sm md:text-lg lg:text-lg text-gray-600 dark:text-gray-200">${data.description}</p>
                        </div>
                    </div>
                    
                    <div class="relative w-8 h-8 flex justify-center items-center">
                        <div class="absolute w-6 h-6 rounded-full bg-amber-400">
                        </div>
                        <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                  
                    <div class="w-0 md:w-1/2 lg:w-1/2"></div>
                </div>
        `
    }

    _generateProjectMarkup = function (data, i) {
        return `
             <a href=${data.projectLien} class="flex ${(i % 2 === 0) ? "md:flex-row-reverse" : "md:flex-row"} flex-col items-center bg-white shadow-lg rounded-xl border border-none hover:scale-105 duration-150 cursor-pointer dark:bg-indigo-950/40 overflow-hidden w-11/12 mx-auto md:w=full">
                <img src=${data.imageProject} alt="Project ${i+1}" class="w-full md:w-1/2 lg:w-2/5 basis-1/3 h-auto border-none">
                <div class="p-6 dark:text-white text-black w-full basis-2/3 h-full flex justify-center items-start md:items-center backdrop-blur-2xl rounded-xl">
                   <ul class="flex flex-col gap-2 w-full md:w-auto">
                    <li class='text-lg lg:text-xl font-bold'> <span class="font-medium text-lg lg:text-xl">Project name <i class="fa-solid fa-caret-right"></i> </span> ${data.projectName}</li>
                    <li class='text-lg lg:text-xl font-medium'> <span class="font-medium text-lg lg:text-xl">Description <i class="fa-solid fa-caret-right"></i> </span> ${data.description}</li>
                    <li class="flex flex-row gap-3 justify-start items-center"><span class="font-medium text-lg lg:text-xl">Techs <i class="fa-solid fa-caret-right"></i> </span>${data.techs.map(img => `<img src="${img}" alt="Tech" class="w-8 h-8">`).join('')}</li>
                    ${data.API ? `<li class='text-lg lg:text-xl font-medium'><span class="font-medium text-lg lg:text-xl">API <i class="fa-solid fa-caret-right"></i> </span> ${data.API}</li>` : ''} 
                   </ul>
                </div>
            </a>
        `
    }

    _renderProjects = function (projects) {
        const projectArr = [...projects];

        const nextProjects = projectArr.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);

        this._renderMarkup(nextProjects, projectParentEl, this._generateProjectMarkup)
    
       this.currentIndex += this.itemsPerPage;
    
        // Hide the button if all projects are loaded
        if (this.currentIndex >= projects.length) {
            btnLoadMore.style.display = "none";
        }
    }

    _observeSections = () => {
        const allSections = document.querySelectorAll('.section');
        console.log(allSections)

        const revealSection = (entries, observer) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15,
        });

        allSections.forEach((section) => {
            sectionObserver.observe(section);
            section.classList.add('hidden');
        });
    };

}



// 4) Start the application
const app = new App()



