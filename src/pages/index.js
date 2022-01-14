import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { FaDraftingCompass, FaCode, FaLaptopCode } from 'react-icons/fa'
import { Container, Grid } from '@material-ui/core';
import { AiOutlineVerticalAlignTop, AiOutlineVerticalAlignBottom, AiFillHome } from 'react-icons/ai';
import { FaUserAstronaut, FaFileCode, FaBloggerB, FaLinkedin } from 'react-icons/fa';
import { IoMdArrowDropright, IoIosArrowDown } from 'react-icons/io';
import { MdLocationOn, MdBusinessCenter, MdEmail } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GoButton from '../components/Buttons/GoButton';
import SquareAvatar from '../components/AvatarArea/SquareAvatar';
import NavigationToolStatic from '../components/Tools/NavigationToolStatic';
import SeeButton from '../components/Buttons/SeeButton';
import CategoryBadge from '../components/CategoryBadge';
import Post from '../components/Post';
import ContactForm from '../components/ContactForm';

import jobs from '../data/jobs';
import projectsList from '../data/projectsList';
import userInformation from '../data/user';

import '../styles/home.css';

import 'react-toastify/dist/ReactToastify.css';

export default ({ data }) => {    
    const [jobActive, setJobActive] = useState(0);
    const [projectsToShow, setProjectsToShow] = useState(2);
    const [projectCategorySelected, setProjectCategorySelected] = useState('Todos');
    
    const avatarRandomJoke = userInformation.avatarJokes[Math.floor(Math.random() * userInformation.avatarJokes.length)];

    const { edges: posts } = data.allMdx;

    const currentWorkYears = moment().diff(jobs.areasExperiences.programmer.startTime, 'years');
    const currentWorkMonths = moment().diff(jobs.areasExperiences.programmer.startTime, 'months') - (currentWorkYears * 12);

    return(
        <div>
            <ToastContainer />
            <div className="design-area">
                <motion.img 
                    className="top-design" 
                    alt="Design Back" 
                    src="/design-back.png"
                    animate={{
                        rotate: [0.5, -0.5, 0.5, -0.5, 0.5],
                        scale: [1.02, 1.01, 1.02, 1.01, 1.02]
                    }}
                    transition={{
                        loop: Infinity,
                        ease: 'linear',
                        duration: 10
                    }} />
                <img 
                    className="top-design front" 
                    alt="Design Front" 
                    src="/design-front.png" />
            </div>
            <NavigationToolStatic menus={[
                {
                    title: 'Começo',
                    link: '#',
                    icon: <AiOutlineVerticalAlignTop size={30} />
                },
                {
                    title: 'Biografia',
                    link: '#bio',
                    icon: <FaUserAstronaut size={30} />
                },
                {
                    title: 'Experiências',
                    link: '#experiences',
                    icon: <MdBusinessCenter size={30} />
                },
                {
                    title: 'Projetos',
                    link: '#projects',
                    icon: <FaFileCode size={30} />
                },
                {
                    title: 'Posts',
                    link: '#posts',
                    icon: <FaBloggerB size={30} />
                },
                {
                    title: 'Contato',
                    link: '#contact',
                    icon: <AiOutlineVerticalAlignBottom size={30} />
                }
            ]}/>
            <Container maxWidth="lg">
                <Header hasLogo={ true }
                        hasMenu={ true } />
                <motion.div 
                    id="content"
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} >
                    <Grid id="top" container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6} zeroMinWidth className="content">
                            <div className="top-left">
                                <h4 className="tooltip">
                                    <p className="tooltip-text">É um nick!</p>
                                    MisterDaniels
                                </h4>
                                <motion.h1
                                    transition={{ duration: 0.5 }}>
                                    Daniel Silva
                                </motion.h1>
                                <h5>Desenvolvedor web, UI/UX Designer, Vídeo Editor, Game
                                    developer nas horas vagas e ♥ por código.</h5>
                                <GoButton text="SAIBA MAIS" link="#bio" />
                                <div className="experience-area">
                                    <div className="role-item">
                                        <h2 className="title">Designer</h2>
                                        <div className="detail">
                                            <FaDraftingCompass size={50} color="#F55547" />
                                            <h3 className="time">
                                                { moment().diff(jobs.areasExperiences.designer.startTime, 'years') }+
                                            </h3>
                                            <p className="time-desc">anos</p>
                                        </div>
                                    </div>
                                    <div className="role-item">
                                        <h2 className="title">Programador</h2>
                                        <div className="detail">
                                            <FaCode size={50} color="#F55547" />
                                            <h3 className="time">
                                                { currentWorkYears }
                                            </h3>
                                            <p className="time-desc">anos</p>
                                            <h3 className="time">
                                                { currentWorkMonths }
                                            </h3>
                                            <p className="time-desc">
                                                { currentWorkMonths > 1 ? 'meses' : 'mês' }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="role-item">
                                        <h2 className="title">TI</h2>
                                        <div className="detail">
                                            <FaLaptopCode size={50} color="#F55547" />
                                            <h3 className="time">∞</h3>
                                            <p className="time-desc"></p>
                                        </div>
                                    </div>
                                </div>
                                <p className="invitation">Acesse meu <Link to="/blog">blog</Link>, e conheça-me um pouco mais!</p>
                            </div>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                            <div className="top-right">
                                
                            </div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
            <div id="bio" className="description-card gradient">
                <Container>
                    <Grid container direction="row" className="container">
                        <Grid item xs={8} zeroMinWidth>
                            <section className="text-content">
                                <h1>Quem sou eu, afinal ?</h1>
                                <p>
                                    { userInformation.bio() }
                                </p>
                            </section>
                        </Grid>
                        <Grid item xs={4} zeroMinWidth>
                            <div className="image-content">
                                <SquareAvatar 
                                    img="/avatar.png"
                                    emoji={
                                        {
                                            name: avatarRandomJoke.emoji.name,
                                            text: avatarRandomJoke.emoji.text
                                        }
                                    }
                                    status={ avatarRandomJoke.message } />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container id="experiences">
                <h1>{ '<Experiências />' }</h1>
                <Grid container direction="row">
                    <Grid item xs={4} zeroMinWidth>
                        <div className="jobs">
                            { jobs.jobsExperiences.map((job, index) => (
                                <div 
                                    className="job" 
                                    key={ index } 
                                    active={ jobActive === index ? 'true' : 'false' }
                                    onClick={ () => { setJobActive(index)  } }
                                    onKeyDown={ () => {} }
                                    role="button"
                                    tabIndex={ index }>
                                    <div 
                                        className="circle" 
                                        style={
                                            { backgroundImage: 
                                                `linear-gradient(to right bottom, 
                                                ${job.color1}, ${job.color2})` }}>
                                        <img src={ job.logo } alt="Logo da Empresa"></img>
                                    </div>
                                    <div className="text">
                                        <h5>{ job.company }</h5>
                                        <p>{ job.motto }</p>
                                    </div>
                                    <div className="icon">
                                        <IoMdArrowDropright size={27} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={8} zeroMinWidth>
                        <div className="job-detail">
                            <div className="localizations">
                                <span className="location">
                                    <MdLocationOn size={25}/>
                                    <a 
                                        href={ jobs.jobsExperiences[jobActive].location.link
                                            ? 'https://google.com/maps/' + jobs.jobsExperiences[jobActive].location.link 
                                            : '#' }
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <p>{ jobs.jobsExperiences[jobActive].location.city }-
                                        { jobs.jobsExperiences[jobActive].location.state }</p>
                                    </a>
                                </span>
                                { jobs.jobsExperiences[jobActive].location.hasHomeOffice && 
                                    <span className="location">
                                        <AiFillHome size={25}/>
                                        <p>Tem experiência com Home Office</p>
                                    </span>
                                }
                            </div>
                            <div className="title">
                                <h1>{ jobs.jobsExperiences[jobActive].title }</h1>
                                <p>
                                    { jobs.jobsExperiences[jobActive].start.toLocaleString('default', { month: 'short' }) } 
                                    de { jobs.jobsExperiences[jobActive].start.getFullYear() } 
                                    - { jobs.jobsExperiences[jobActive].end === null ? 'o momento' :
                                     jobs.jobsExperiences[jobActive].end.toLocaleString('default', { month: 'short' }) +
                                     'de ' + jobs.jobsExperiences[jobActive].end.getFullYear() } 
                                </p>
                            </div>
                            <h2 style={{marginBottom: '30px'}}>{ jobs.jobsExperiences[jobActive].role }</h2>
                            <p className="description">
                                { jobs.jobsExperiences[jobActive].description }
                            </p>
                            <div className="actions">
                                { jobs.jobsExperiences[jobActive].site && 
                                    <SeeButton 
                                        text="Conheça mais"
                                        link={ jobs.jobsExperiences[jobActive].site } />
                                }
                            </div>
                            <h5>Principais tecnologias utilizadas:</h5>
                            <div className="tecnologies">
                                { jobs.jobsExperiences[jobActive].technology.map((technology, index) => (
                                    <div className="technology tooltip" key={ index }>
                                        { technology.icon }
                                        <p className="tooltip-text">{ technology.title }</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div id="projects">
                <Container>
                    <h1>Alguns projetos</h1>
                    <div className="menu">
                        <ul>
                            <li
                                active={ projectCategorySelected === 'Todos' ? 'true' : 'false' }
                                onClick={ () => { 
                                    setProjectCategorySelected('Todos');
                                    setProjectsToShow(2); 
                                } }>
                                Todos
                            </li>
                            { projectsList.categories.map((category) => (
                                <li 
                                    key={ category }
                                    active={ projectCategorySelected === category ? 'true' : 'false' }
                                    onClick={ () => { 
                                        setProjectCategorySelected(category);
                                        setProjectsToShow(2);
                                    } }>
                                    { category }
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className="projects">
                        { projectsList.projects
                            .filter(project => projectCategorySelected !== 'Todos' ? 
                                project.categories.includes(projectCategorySelected) : project.title)
                            .slice(0, projectsToShow)
                            .map((project, index) => (
                            <div
                                key={ index }
                                className='project-card' >
                                <div className="left">
                                    { project.media }
                                </div>
                                <div className="right">
                                    <h1>{ project.title }</h1>
                                    <p className="description">
                                        { project.description }
                                    </p>
                                    <div className="actions">
                                        <SeeButton 
                                            text="Conheça mais"
                                            link={ project.link } />
                                    </div>
                                    <h2>Principais tecnologias utilizadas:</h2>
                                    <div className="tecnologies">
                                        { project.tecnologies.map((tecnology, index) => (
                                            <CategoryBadge key={ index } category={ { 'title': tecnology.title } } />
                                        )) }
                                    </div>
                                </div>
                            </div>
                        ))}
                        <IoIosArrowDown 
                            size={50} 
                            color="#FFFFFF"
                            onClick={ () => setProjectsToShow(projectsToShow + 1) }
                            active={ projectsToShow !== projectsList.projects
                                .filter(project => projectCategorySelected !== 'Todos' ? 
                                    project.categories.includes(projectCategorySelected) : project.title).length ? 'true' : 'false' } />
                    </div>
                </Container>
            </div>
            <Container id="posts">
                <h1>Alguns posts</h1>
                <div className="posts">
                    { posts
                        .filter(post => post.node.frontmatter.title.length > 0)
                        .map(({ node: post }) => {
                            return(
                                <Post post={ post } />
                            );
                        })
                    }
                </div>
            </Container>
            <div id="contact" className="description-card gradient">
                <Container>
                    <Grid container direction="row" className="content">
                        <div className="left">
                            <h1>Contatos</h1>
                            <div className="contact-info">
                                <MdEmail size={27} />
                                <h3>dodosilva51@gmail.com</h3>
                            </div>
                            <div className="contact-info">
                                <FaLinkedin size={27} />
                                <h3>/misterdans</h3>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form">
                                <h2>Quer entrar em contato comigo ?</h2>
                                <p>Deixe sua mensagem aqui, prometo que respondo.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export const pageQuery = graphql`
    query IndexQuery {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        path
                      	category
                      	image
                      	imageAuthor
                      	imageAuthorLink
                    }
                }
            }
        }
    }
`