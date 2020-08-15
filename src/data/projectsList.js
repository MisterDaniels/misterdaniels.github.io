import React from 'react';
import YouTube  from 'react-youtube';

const youtubeOptions = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1
    }
};

const categories = [
    'Desenvolvimento',
    'Jogos',
    'Artes',
    'Vídeos'
];

const projects = [
    {
        title: 'Vídeo cortes espaço',
        description: `Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. 
            Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante 
            blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
            Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo,
            mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. 
            Interagi no mé, cursus quis, vehicula ac nisi.`,
        media: <YouTube videoId="Bs1ouzYEPk0" opts={ youtubeOptions } />,
        link: 'google.com',
        categories: [
            'Vídeos', 
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'After Effects'
            },
            {
                title: 'Adobe Photoshop'
            },
            {
                title: 'Sony Vegas'
            },
            {
                title: 'Sound Forge'
            },
            {
                title: 'Artlist.io'
            }
        ]
    },
    {
        title: 'Vídeo isometric',
        description: `Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. 
            Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante 
            blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
            Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo,
            mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. 
            Interagi no mé, cursus quis, vehicula ac nisi.`,
        media: <YouTube videoId="GDhH3hh-YmE" opts={ youtubeOptions } />,
        link: 'google.com',
        categories: [
            'Vídeos', 
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'After Effects'
            },
            {
                title: 'Adobe Photoshop'
            },
            {
                title: 'Sony Vegas'
            },
            {
                title: 'Sound Forge'
            },
            {
                title: 'Artlist.io'
            }
        ]
    },
    {
        title: 'Vídeo isometric',
        description: `Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. 
            Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante 
            blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
            Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo,
            mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. 
            Interagi no mé, cursus quis, vehicula ac nisi.`,
        media: <YouTube videoId="GDhH3hh-YmE" opts={ youtubeOptions } />,
        link: 'google.com',
        categories: [
            'Vídeos', 
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'After Effects'
            },
            {
                title: 'Adobe Photoshop'
            },
            {
                title: 'Sony Vegas'
            },
            {
                title: 'Sound Forge'
            },
            {
                title: 'Artlist.io'
            }
        ]
    },
    {
        title: 'Vídeo isometric',
        description: `Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. 
            Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante 
            blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
            Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo,
            mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. 
            Interagi no mé, cursus quis, vehicula ac nisi.`,
        media: <YouTube videoId="GDhH3hh-YmE" opts={ youtubeOptions } />,
        link: 'google.com',
        categories: [
            'Vídeos', 
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'After Effects'
            },
            {
                title: 'Adobe Photoshop'
            },
            {
                title: 'Sony Vegas'
            },
            {
                title: 'Sound Forge'
            },
            {
                title: 'Artlist.io'
            }
        ]
    }
];

const projectsList = {
    categories,
    projects
}

export default projectsList;