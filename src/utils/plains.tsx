import * as icons from '../assets/index';

const plains = [
    {
        section:"hardSkills",
        techs:[
            {
                name: 'mongoDb',
                icon: icons.mongodb,
            },
            {
                name: 'mongoose',
                icon: icons.mongoose,
            },
            {
                name: 'sql',
                icon: icons.sql,
            },
            {
                name: 'sequelize',
                icon: icons.sequelize,
            },
            {
                name: 'node',
                icon: icons.nodejs,
            },
            {
                name: 'express',
                icon: icons.express,
            },
            {
                name: 'nest',
                icon: icons.nest,
            },
            {
                name: 'typescript',
                icon: icons.typescript,
            },
            {
                name: 'html5',
                icon: icons.html5,
            },
            {
                name: 'css3',
                icon: icons.css3,
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
                name: 'swagger',
                icon: icons.swagger,
            },
            {
                name: 'trello',
                icon: icons.trello,
            },
            {
                name: 'jira',
                icon: icons.jira,
            },
            
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
        section:"Mis proyectos",
        projects:[
            {
                name: "Data's Burger",
                video: null,
                techs: ["MongoDB", 'Mongoose', 'NestJS', 'React', 'Typescript'],
                link:[
                    {
                        name:'Deploy',
                        url: "https://datas-burguers-front.vercel.app/"
                    }
                ],
                description:
                    `Este es un proyecto real en el que estoy desarrollando actualmente para una 
                    hamburguesería en el sur del país donde el objetivo es crear un e-commerce así 
                    los clientes pueden realizar sus pedidos, tambíen se le cuenta con un dashboard 
                    de admin para poder ver los pedidos que van ingresando y los datos del cliente 
                    para realizar el envío. En este momento nos encontramos en el primer sprint 
                    preparándonos para presentar el MVP.`,
                functions: [
                    '✅ Modelado DB', 
                    '✅ Levantar y conectar DB', 
                    '✅ Creación de módulos, entidades, controllers y services',
                    '✅ Creación PIPEs, Guards y autorización con token de JWT',
                    '✅ Creación de login con validaciones y dashboard de admin',
                    '✅ Protección de rutas'
                ]
            },
            {
                name:"FilmFlow",
                video:"https://www.youtube.com/embed/eoxyfXsd6xE?si=8ooHsptmZR5B_wnl",
                techs:["PostgreSQL", "Sequelize", "Node", "Express", "React", "Sass", "ChartJS", "SweetAlert"],
                link:[
                    {
                        name: 'Github',
                        url: 'https://github.com/lukeskip/filmFlow'
                    }
                ],
                description: 
                    `En este proyecto nos enfocamos en el problema de los productores independientes a la 
                    hora de compartir sus obras, creando una plataforma donde podían subir su contenido 
                    para que los usuarios lo vean. El sitio cuenta con roles de usuarios, una pasarela de 
                    pago, filtros, reseñas, carrito de compras, códigos de descuento y envío de notificaciones.`,
                functions: [
                    '✅ Crear componentes sliders y carrouseles', 
                    '✅ Crear vista de filtros', 
                    '✅ Crear dashboard de admin',
                    '✅ Crear gráficos en el dashboard',
                    '✅ Protección de rutas'
                ]
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
                    aprendí y si bien tiene a simple vista detalles que pulir, me resultó interesante
                    poder comparar dentro de un tiempo mi avance y mejora como desarrollador.`,
                functions: [
                    '✅ Crear carrousel de películas', 
                    '✅ Conexión con DB y API externa', 
                    '✅ Creación de entidades, rutas y controllers', 
                    '✅ Crear vistas de login, filtros y formularios',
                    '✅ Estilos',
                    '✅ Deploy'
                ]
            },
            // {
            //     name:"HunterWork",
            //     video:"URL",
            //     techs:["string"],
            //     link:[{name: "inProgress", url:"URL"}],
            //     description: "none"
            // }
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