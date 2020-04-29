import React from 'react';

import {
    IoLogoGameControllerA,
    IoLogoDesignernews
} from 'react-icons/io';

import {
    FaCode,
    FaVideo
} from 'react-icons/fa';

const blogCategories = [
    {
        title: 'Games',
        icon: <IoLogoGameControllerA size={33} />
    },
    {
        title: 'Desenvolvimento',
        icon: <FaCode size={33} />
    },
    {
        title: 'Vídeo',
        icon: <FaVideo size={33} />
    },
    {
        title: 'Designer',
        icon: <IoLogoDesignernews size={33} />
    },
];

export default blogCategories;