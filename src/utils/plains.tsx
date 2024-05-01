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
                name: 'swagger',
                icon: icons.swagger,
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
        section:"mis proyectos",
        projects:[
            {
                name:"Project's name",
                techs:"techs",
                description: "none",
                link:"URL"
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