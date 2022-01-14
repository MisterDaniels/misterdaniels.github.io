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
        title: 'Pokemon-Java-Battle-Simulator',
        description: `Desenvolvimento de um jogo utilizando a linguagem Java.
            Todo baseado em interação com interface, possui sistemas de captura
            de Pokémons, sistema de lojas (venda/compra de itens), gerenciamento
            de itens, sistema de batalha e nível de Pokémons.`,
        media: '',
        link: 'https://github.com/MisterDaniels/Pokemon-Java-Battle-Simulator',
        categories: [
            'Desenvolvimento', 
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'Netbeans'
            },
            {
                title: 'Java'
            },
            {
                title: 'Photoshop'
            },
            {
                title: 'Swing'
            }
        ]
    },
    {
        title: 'Sistema de eleição',
        description: `
        `, 
        media: '',
        link: '',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'Node.js'
            },
            {
                title: 'Javascript'
            },
            {
                title: 'Express'
            },
            {
                title: 'Passport'
            },
            {
                title: 'MongoDB'
            },
            {
                title: 'React'
            },
            {
                title: 'Expo'
            },
            {
                title: 'React Native'
            }
        ]
    },
    {
        title: 'Widget para Elementor',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: '',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'Wordpress'
            },
            {
                title: 'PHP'
            },
            {
                title: 'Elementor'
            },
            {
                title: 'l10n'
            }
        ]
    },
    {
        title: 'Sistema de acompanhamento de noticias de jogos',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: '',
        categories: [
            'Artes'
        ],
        tecnologies: [
            {
                title: 'Adobe XD'
            },
            {
                title: 'Photoshop'
            }
        ]
    },
    {
        title: 'Situacao dos nomes no Brasil',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://github.com/MisterDaniels/ibge-names',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'Netlify'
            },
            {
                title: 'React'
            },
            {
                title: 'Chart.js'
            }
        ]
    },
    {
        title: 'Blog pessoal',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://misterdaniels.github.io/blog',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'MDX'
            },
            {
                title: 'GraphQL'
            },
            {
                title: 'Gatsby'
            },
            {
                title: 'React'
            },
            {
                title: 'Disqus'
            }
        ]
    },
    {
        title: 'Cuidar do Pokemon utilizando PokeAPI',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://github.com/MisterDaniels/PokemonAPIConsume',
        categories: [
            'Desenvolvimento',
            'Jogos'
        ],
        tecnologies: [
            {
                title: 'Javascript'
            },
            {
                title: 'JQuery'
            },
            {
                title: 'Socket.IO'
            },
            {
                title: 'Bootstrap'
            },
            {
                title: 'Express'
            },
            {
                title: 'Node.js'
            },
            {
                title: 'Google Maps'
            }
        ]
    },
    {
        title: 'Sistema de agendamento de manicure/pedicure',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://github.com/MisterDaniels/PokemonAPIConsume',
        categories: [
            'Desenvolvimento',
            'Artes'
        ],
        tecnologies: [
            {
                title: 'Figma'
            },
            {
                title: 'Storybook'
            },
            {
                title: 'Bit'
            },
            {
                title: 'React'
            },
            {
                title: 'Next.js'
            },
            {
                title: 'MongoDB'
            },
            {
                title: 'Node.js'
            },
            {
                title: 'Passport'
            },
            {
                title: 'Express'
            },
            {
                title: 'Stripe'
            },
            {
                title: 'Jest'
            },
            {
                title: 'intl'
            },
            {
                title: 'Expo'
            },
            {
                title: 'React Native'
            }
        ]
    },
    {
        title: 'COVID-19 noticia de casos diario',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://github.com/MisterDaniels/covid19-discord-bot',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'Discord'
            },
            {
                title: 'Bot'
            },
            {
                title: 'Google Cloud'
            },
            {
                title: 'Node.js'
            }
        ]
    },
    {
        title: 'Portal de palestras Expo Videira 2020',
        description: `Aplicacao que envolve um plugin para gerenciamento de elementos
            customizados para o Elementor. Esses elementos, possuem toda uma logica para
            funcionarem, sendo assim, requisitam de API para coleta de dados, podem ser
            customizados atraves de presets e de recursos nativos do proprio Elementor.
            Todo o projeto foi visionado em manter bons padroes e costumes, criando assim, 
            padroes para traducao de texto posterior(l10n), possibilidade de utilizacao
            de recursos do Elementor para padroes de estilizacao.`,
        media: '',
        link: 'https://github.com/MisterDaniels/covid19-discord-bot',
        categories: [
            'Desenvolvimento'
        ],
        tecnologies: [
            {
                title: 'Node.js'
            },
            {
                title: 'Express'
            },
            {
                title: 'PostgreSQL'
            },
            {
                title: 'Electron'
            }
        ]
    }
];

const projectsList = {
    categories,
    projects
}

export default projectsList;