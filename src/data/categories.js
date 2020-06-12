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
        icon: <IoLogoGameControllerA size={12} />
    },
    {
        title: 'Desenvolvimento',
        icon: <FaCode size={12} />
    },
    {
        title: 'Vídeo',
        icon: <FaVideo size={12} />
    },
    {
        title: 'Designer',
        icon: <IoLogoDesignernews size={12} />
    },
];

export default blogCategories;