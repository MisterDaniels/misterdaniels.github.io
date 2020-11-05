import React from 'react';

const userInformation = {
    name: 'Daniel Silva',
    nickname: 'MisterDaniels',
    email: 'dodosilva51@gmail.com',
    bio: () => { 
            return(
                <div class="bio-text">
                    <p>
                        Um carinha aí, que curte replicar algumas coisas, entender algumas outras e 
                        deixar a cabeça fluir nas <strong>ideias</strong> 🧠 
                    </p>
                    <p> 
                        Joga um <strong>game</strong> e acha que cada <strong>música</strong> tem a hora certa (ou vice-versa 🤔) 🎼 
                    </p>
                    <p>
                        Apaixonado pelos <strong>terrores</strong>, por uns papos de <strong>espaço</strong> e <strong>jogos</strong> 😱🌌🎮
                    </p>
                    <p>
                        Conhece uns par de tecnologias mas mal consegue sair do <strong>Hello World</strong> 👋🌎
                    </p>
                    <p>
                        Mistura uns inglês e português nas coisas, é uma sopa 🍲
                    </p>
                    <p>
                        E aquele <strong>emoji</strong> certo vale mais que mil palavras 😄
                    </p>
                </div>
            )
    },
    avatarJokes: [
        {
            emoji: {
                name: 'man-facepalming',
                text: '🤦‍♂️'
            },
            message: 'ÉÉÉ... Só tenho essa foto'
        },
        {
            emoji: {
                name: 'grinning-squinting-face',
                text: '😆'
            },
            message: 'Essa cara merece um meme'
        }
    ],
    social: [
        {
            name: 'Facebook',
            url: 'https://facebook.com/MisterDans'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/Mister_Dans'
        },
        {
            name: 'Linkedin',
            url: 'https://linkedin.com/in/misterdans'
        },
        {
            name: 'Github',
            url: 'https://github.com/MisterDaniels'
        },
        {
            name: 'Dribble',
            url: 'https://dribbble.com/MisterDaniels'
        }
    ]
}

export default userInformation;