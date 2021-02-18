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
    FaMicrosoft,
    FaBootstrap,
    FaDiscord,
    FaAws
} from 'react-icons/fa';

import {
    IoLogoJavascript
} from 'react-icons/io';

import {
    GiTechnoHeart
} from 'react-icons/gi';

import {
    DiComposer
} from 'react-icons/di';

import {
    SiJest,
    SiMocha,
    SiJenkins,
    SiMariadb,
    SiRedis,
    SiSlack,
    SiGrafana,
    SiKibana,
    SiPrometheus
} from 'react-icons/si';

import SimpleIcon from 'simple-icons-react-component';

const jobsExperiences = [
    {
        location: {
            city: 'Videira',
            state: 'SC',
            link: '@-27.004182,-51.1500183,21z',
            hasHomeOffice: true
        },
        title: 'Auryn Soluções Web to Print',
        company: 'Auryn',
        motto: 'Soluções Web to Print',
        start: new Date('2019', '10'),
        end: null,
        site: 'https://auryn.com.br',
        role: 'Desenvolvedor Full-Stack',
        description: 'Foi a primeira empresa que trabalhei envolvendo a área da programação, portanto, ' +
            'foi uma das experiências mais marcantes pra mim, principalmente, o fato que tive ' +
            'que arriscar muita coisa, começar um vida completamente nova. Tive a chance de ' +
            'conhecer uma arquitetura complexa e muito bem planejada, bem como o primeiro ' +
            'contato com a metodologia do SCRUM e as oportunidades de utilizar diversas ' +
            'ferramentas e as melhores tecnologias do mercado.',
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
            },
            {
                title: 'Composer',
                icon: <DiComposer size={33} />
            },
            {
                title: 'Jest',
                icon: <SiJest size={33} />
            },
            {
                title: 'Mocha',
                icon: <SiMocha size={33} />
            },
            {
                title: 'Bootstrap',
                icon: <FaBootstrap size={33} />
            },
            {
                title: 'AWS',
                icon: <FaAws size={33} />
            },
            {
                title: 'Discord',
                icon: <FaDiscord size={33} />
            },
            {
                title: 'Slack',
                icon: <SiSlack size={33} />
            },
            {
                title: 'Wordpres',
                icon: <FaWordpress size={33} />
            },
            {
                title: 'Jenkins',
                icon: <SiJenkins size={33} />
            },
            {
                title: 'MariaDB',
                icon: <SiMariadb size={33} />
            },
            {
                title: 'Redis',
                icon: <SiRedis size={33} />
            },
            {
                title: 'Grafana',
                icon: <SiGrafana size={33} />
            },
            {
                title: 'Kibana',
                icon: <SiKibana size={33} />
            },
            {
                title: 'Prometheus',
                icon: <SiPrometheus size={33} />
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
        role: 'Auxiliar Marketing - TI - Auxiliar Administrativo',
        description: 'Dentro da Rádio Simpatia FM, tive a oportunidade de desempenhar a criatividade ' +
            'dentro de estratégias de marketing, engajando leads através metodologias de publicidade  ' +
            'para com os clientes da empresa. Com isso, aprendi a utilizar as melhores ferramentas do ' +
            'mercado do design, construindo mídias estáticas ou animadas, através de artes de posts ou ' +
            'vídeos. Além disso, faziamos reuniões para decisões e criações de novas ideias, prestando ' +
            'uma espécie de consultoria para com os clientes.',
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
        description: `

        `,
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
        role: 'Técnico de Manutenção <span>&&</span> Marketing <span>&&</span> Desenvolvedor',
        description: `Minha primeira experiência profissional com a TI, onde tive
            a oportunidade de automatizar processos. Não só no setor da manutenção de hardware/, 
            software, mas também no desenvolvimento de ferramentas para cadastro de peças, 
            acompanho do estado da manutenção do item do cliente e processos para facilitar
            o setor de almoxarifado. Fora isso, fiz o controle do marketing, envolvendo com 
            mídias frequentes em diversas plataformas.`,
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

const areasExperiences = {
    designer: {
        startTime: new Date('2017-01-02')
    },
    programmer: {
        startTime: new Date('2019-10-05')
    }
};

const jobs = {
    jobsExperiences,
    areasExperiences
};

export default jobs;