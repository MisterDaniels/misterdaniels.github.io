import React from 'react';

const userInformation = {
    name: 'Daniel Silva',
    nickname: 'MisterDaniels',
    email: 'dodosilva51@gmail.com',
    bio: () => { 
            return(
                <div class="bio-text">
                    <p>
                        Tentativa de gamer 🎮, criativo para nomes de playlists 🎵, miniatura em bodybuilder 💪 e péssimo imitador  
                    </p>
                    <p> 
                        Desenvolve alguns <strong>games</strong> e na maioria das vezes o assunto é 
                        Pokémon, por que será? 🤔 
                    </p>
                    <p>
                        Apaixonado por motocar 🏍️ e nas aventuras que as 2 rodas proporcionam
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
                name: 'circus-tent',
                text: '🎪'
            },
            message: 'Dev in circus...'
        },
        {
            emoji: {
                name: 'blushing',
                text: '😊'
            },
            message: 'A wild selfie appears!'
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