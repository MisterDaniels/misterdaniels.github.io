import React from 'react';

import { 
    FaDocker,
    FaSymfony,
    FaVuejs,
    FaNpm,
    FaUbuntu,
    FaJava,
    FaCss3,
    FaHtml5,
    FaPhp,
    FaWordpress,
    FaGithub,
    FaAndroid,
    FaMicrosoft
} from 'react-icons/fa';

import {
    IoLogoJavascript
} from 'react-icons/io';

import {
    GiTechnoHeart
} from 'react-icons/gi';

import SimpleIcon from 'simple-icons-react-component';

const jobsExperience = [
    {
        location: {
            city: 'Videira',
            state: 'SC',
            link: '@-27.004182,-51.1500183,21z'
        },
        title: 'Auryn Soluções Web to Print',
        company: 'Auryn',
        motto: 'Soluções Web to Print',
        start: new Date('2019', '10'),
        end: null,
        site: 'https://auryn.com.br',
        role: 'Desenvolvedor Full-Stack',
        description: 'Foi a primeira empresa que trabalhei envolvendo a área da programação, portanto,' +
            'foi uma das experiências mais marcantes pra mim, principalmente, o fato que tive ' +
            'que arriscar muita coisa, começar um vida completamente nova. Tive a chance de ' +
            'conhecer uma arquitetura complexa e muito bem planejada, bem como o primeiro' +
            'contato com a metodologia do SCRUM e a experiência de mexer naquilo que já ' +
            'está pronto.',
        logo: '/logo-auryn.svg',
        color1: '#02BCD3',
        color2: '#17BAB5',
        technology: [
            {
                title: 'Docker',
                icon: <FaDocker size={33} />
            },
            {
                title: 'Symfony',
                icon: <FaSymfony size={33} />
            },
            {
                title: 'Vue.js',
                icon: <FaVuejs size={33} />
            },
            {
                title: 'NPM',
                icon: <FaNpm size={33} />
            },
            {
                title: 'Ubuntu',
                icon: <FaUbuntu size={33} />
            },
            {
                title: 'Github',
                icon: <FaGithub size={33} />
            },
            {
                title: 'Java',
                icon: <FaJava size={33} />
            },
            {
                title: 'Javascript',
                icon: <IoLogoJavascript size={33} />
            },
            {
                title: 'PHP',
                icon: <FaPhp size={33} />
            },
            {
                title: 'CSS3',
                icon: <FaCss3 size={33} />
            },
            {
                title: 'HTML5',
                icon: <FaHtml5 size={33} />
            }
        ]
    },
    {
        location: {
            city: 'Campos Novos',
            state: 'SC',
            link: '@-27.4013799,-51.2294378,21z'
        },
        title: 'Rádio Simpatia FM',
        company: 'Simpatia FM',
        motto: 'O tempo todo com você',
        start: new Date('2017', '08'),
        end: new Date('2019', '10'),
        site: 'http://simpatiafm.com.br/novo',
        role: 'Auxiliar Marketing | TI | Auxiliar Administrativo',
        description: 'Foi a primeira empresa que trabalhei envolvendo a área da programação, portanto,' +
            'foi uma das experiências mais marcantes pra mim, principalmente, o fato que tive ' +
            'que arriscar muita coisa, começar um vida completamente nova. Tive a chance de ' +
            'conhecer uma arquitetura complexa e muito bem planejada, bem como o primeiro' +
            'contato com a metodologia do SCRUM e a experiência de mexer naquilo que já ' +
            'está pronto.',
        logo: '/logo-simpatia.png',
        color1: '#ffffff',
        color2: '#ECECEC',
        technology: [
            {
                title: 'Adobe Photoshop',
                icon: <SimpleIcon name="Adobe Photoshop" />
            },
            {
                title: 'Adobe After Effects',
                icon: <SimpleIcon name="Adobe After Effects" />
            },
            {
                title: 'Adobe Premiere',
                icon: <SimpleIcon name="Adobe Premiere" />
            },
            {
                title: 'Adobe Lightroom',
                icon: <SimpleIcon name="Adobe Lightroom CC" />
            },
            {
                title: 'Wordpress',
                icon: <FaWordpress size={33}/>
            },
            {
                title: 'Android',
                icon: <FaAndroid size={33}/>
            },
            {
                title: 'Java',
                icon: <FaJava size={33}/>
            }
        ]
    },
    {
        location: {
            city: 'Campos Novos',
            state: 'SC',
            link: '@-27.4028728,-51.2262646,21z'
        },
        title: 'YBR Cursos',
        company: 'YBR Cursos',
        motto: 'Cursos profissionalizantes',
        start: new Date('2018', '04'),
        end: new Date('2018', '07'),
        site: 'https://facebook.com/ybrcursoscn',
        role: 'Professor de Wordpress, Android e GlassFish Server',
        description: 'Foi a primeira empresa que trabalhei envolvendo a área da programação, portanto,' +
            'foi uma das experiências mais marcantes pra mim, principalmente, o fato que tive ' +
            'que arriscar muita coisa, começar um vida completamente nova. Tive a chance de ' +
            'conhecer uma arquitetura complexa e muito bem planejada, bem como o primeiro' +
            'contato com a metodologia do SCRUM e a experiência de mexer naquilo que já ' +
            'está pronto.',
        logo: '/logo-ybr.png',
        color1: '#2F3855',
        color2: '#424653',
        technology: [
            {
                title: 'Wordpress',
                icon: <FaWordpress size={33}/>
            },
            {
                title: 'Android',
                icon: <FaAndroid size={33}/>
            },
            {
                title: 'Java',
                icon: <FaJava size={33}/>
            }
        ]
    },
    {
        location: {
            city: 'Campos Novos',
            state: 'SC',
            link: null
        },
        title: 'Faz Tudo Manutenção Integrada',
        company: 'Faz Tudo',
        motto: 'Manutenção Integrada',
        start: new Date('2017', '01'),
        end: new Date('2017', '08'),
        site: null,
        role: 'Técnico de Manutenção | Marketing | Desenvolvedor',
        description: 'Foi a primeira empresa que trabalhei envolvendo a área da programação, portanto,' +
            'foi uma das experiências mais marcantes pra mim, principalmente, o fato que tive ' +
            'que arriscar muita coisa, começar um vida completamente nova. Tive a chance de ' +
            'conhecer uma arquitetura complexa e muito bem planejada, bem como o primeiro' +
            'contato com a metodologia do SCRUM e a experiência de mexer naquilo que já ' +
            'está pronto.',
        logo: '/logo-faz-tudo.png',
        color1: '#000000',
        color2: '#000000',
        technology: [
            {
                title: 'Manutenção de Hardware',
                icon: <GiTechnoHeart size={33} />
            },
            {
                title: 'Manutenção de Software',
                icon: <FaMicrosoft size={33} />
            },
            {
                title: 'Adobe Photoshop',
                icon: <SimpleIcon name="Adobe Photoshop" />
            },
            {
                title: 'Java',
                icon: <FaJava size={33}/>
            }
        ]
    }
];

export default jobsExperience;