import React from 'react';

import CategoryBadge from '../CategoryBadge';
import SeeButton from '../Buttons/SeeButton';

import categories from '../../data/categories';
import './index.css';

export default (props) => {
    return(
        <div className="post" key={ props.post.id } >
            <div className="image">
                <img src={ props.post.frontmatter.image }></img>
                { props.post.frontmatter.imageAuthor &&
                <a 
                    className="point"
                    href={ props.post.frontmatter.imageAuthorLink }
                    target="_blank"
                    rel="noopener noreferrer" >
                    <span className="tooltip">
                        <p className="tooltip-text">
                            { props.post.frontmatter.imageAuthor }
                        </p>
                    </span>
                </a>
                }
            </div>
            <div className="details">
                <div className="categories">
                    <CategoryBadge category={ categories[0] } />
                    <CategoryBadge category={ categories[1] } />
                </div>
                <div className="texts">
                    <h1>{ props.post.frontmatter.title }</h1>
                    <h2>{ props.post.frontmatter.date }</h2>
                    <p> { props.post.excerpt } </p>
                    <div className="actions">
                        <h3>NOVO</h3>
                        <SeeButton 
                            text="Ver post"
                            link={ props.post.frontmatter.path } />
                    </div>
                </div>
            </div>
        </div>
    );
}