import * as icons from '../assets/index';

const plains = [
    {
        section:"Sobre mí",
        description: 
            `¡Hola! Soy Julian Vega, un apasionado desarrollador full stack con 31 años de edad.
            Recientemente he completado mi formación en SoyHenry, especializándome en tecnologías 
            como JavaScript, PostgreSQL, React, HTML, CSS y Sequelize.\n
            Mi misión es ofrecer soluciones innovadoras y eficientes a través del desarrollo de 
            software. Me entusiasma la idea de contribuir al avance tecnológico y la integración 
            continua de la sociedad con el mundo digital.\n       
            ¡Conéctate conmigo y exploremos cómo podemos trabajar juntos para alcanzar nuestros 
            objetivos!`
            //Estoy emocionado por las oportunidades que el futuro tiene reservadas y espero poder 
            //colaborar en proyectos que impulsen el cambio y mejoren la experiencia humana en el 
            //ámbito tecnológico.
    },
    {
        section:"Habilidades duras",
        techs:[
            {
                name: 'node',
                icon: icons.nodejs,
            },
            {
                name: 'express',
                icon: icons.express,
            },
            {
                name: 'mongoDb',
                icon: icons.mongodb,
            },
            {
                name: 'mongoose',
                icon: icons.mongoose,
            },
            {
                name: 'sequelize',
                icon: icons.sequelize,
            },
            {
                name: 'sql',
                icon: icons.sql,
            },
            {
                name: 'typescript',
                icon: icons.typescript,
            },
            {
                name: 'react',
                icon: icons.reactjs,
            },
            {
                name: 'vite',
                icon: icons.vite,
            },
            {
                name: 'css3',
                icon: icons.css3,
            },
            {
                name: 'html5',
                icon: icons.html5,
            },
            {
                name: 'trello',
                icon: icons.trello,
            },
            {
                name: 'jira',
                icon: icons.jira,
            }
            /**
             * AGREGAR ACÄ PARA SACAR FRAMEWORKS
                {
                    name: 'swagger',
                    icon: icons.swagger,
                },
             **/         
        ]
    },
    {
        section:"Habilidades blandas",
        description:
            `Soy capaz de entender las necesidades de los demás y encontrar soluciones 
            colaborativas. Mi capacidad para adaptarme a nuevos desafíos me permiten 
            enfrentar cualquier situación con confianza. Además, mi pasión por el 
            aprendizaje continuo me ayudan a mantenerme al día.`,
            //Como profesional, me distingo por mi capacidad para trabajar en equipo.
    },
    {
        section:"Mis proyectos",
        projects:[
            {
                name:"FilmFlow",
                video:"https://www.youtube.com/embed/eoxyfXsd6xE?si=8ooHsptmZR5B_wnl",
                techs:["PostgreSQL", "Sequelize", "Node", "Express", "React", "Sass", "ChartJS", "SweetAlert"],
                link:[
                    {
                        name: 'Deploy',
                        url: 'https://filmflow.chekogarcia.com.mx/'
                    },
                    {
                        name: 'Github',
                        url: 'https://github.com/lukeskip/filmFlow'
                    }
                ],
                description: 
                    `Este proyecto fue una experiencia grupal junto a seis colegas donde pudimos 
                    replicar el trabajo diario de un desarrollador. Nos propusimos resolver el 
                    problema de los productores independientes a la hora de compartir sus creaciones, 
                    para lo cual creamos una plataforma donde podían subir su contenido y los 
                    usuarios registrados “comprarlo” para verlo. 
                    Tuvimos en cuenta distintos roles de usuarios, una pasarela de pago (Stripe), 
                    filtros, subir contenido (Cloudinary), reseñas, un carrito de compras al mejor 
                    estilo e-commerce, códigos de descuento y notificaciones por email.`
            },
            {
                name:"GameData Hub",
                video:"https://www.youtube.com/embed/ufZpwLdijEo?si=S3vSO8nIczOTOC7i",
                techs:["Vite", "React", "Redux", "Expres", "", "Node", "Sequelize", "PostgreSQL"],
                link:[
                    {
                        name: 'Deploy',
                        url: 'https://videogames-gilt.vercel.app/'
                    },
                    {
                        name: 'Github',
                        url: 'https://github.com/julianfv1150/PI-videogames'
                    }
                ],
                description: 
                    `Este fue mi primer proyecto que hice sólo, usé varias tecnologías del stack que 
                    nos enseñaban y si bien tiene a simple vista detalles que pulir, me resultó interesante
                    dejarlo así y poder comparar dentro de un tiempo mi avance y mejora como desarrollador.`
            },
            // {
            //     name:"PortFolio",
            //     video:"URL",
            //     techs:["Vite", "React", "GitHub Pages", "React", "Sass", "SweetAlert"],
            //     link:[{url:""}],
            //     description: "none"
            // },
            {
                name:"HunterWork",
                video:"URL",
                techs:["string"],
                link:[{name: "inProgress", url:"URL"}],
                description: "none"
            }
        ]
    },
    {
        section:"Contáctame" ,
        country: "Buenos Aires, \u{1F1E6}\u{1F1F7}",
        UTC: "(UTC -03:00)",
        mobile: "+549 236 4267484",
        mail: "julian.f.vega@gmail.com",
        cv: "https://drive.google.com/file/d/1pul2WttzBZXueV3e5G8L9eDAaDYtZrRw/view?usp=sharing",
        social: [
            {
                name: "WhatsApp",
                icon: icons.whatsapp,
                link: "https://wa.me/+5492364267484",
            },
            {
                name: "Google",
                icon: icons.gmail,
                link: "https://mail.google.com/"
            },
            {
                name: "Linkedin",
                icon: icons.linkedin,
                link: "https://www.linkedin.com/in/juli%C3%A1n-vega/"
            },
            {
                name: "GitHub",
                icon: icons.github,
                link: "https://github.com/julianfv1150"
            }
        ]
    },
    {
        section:"Comentarios",
        description:
            `Déjame un comentario si has encontrado algo interesante, alguna recomendación, 
            un proyecto que te gustaría ver en mi portfolio, un bug que deba solucionar, o 
            lo que creas que me puede ayudar a mejorar, anímate a contribuir!
            Los comentarios no se reflejan en el sitio ya que no se registran, se envían por mail.`
    }
]

export default plains;