import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import YouTube  from 'react-youtube';
import { FaDraftingCompass, FaCode, FaLaptopCode } from 'react-icons/fa'
import { Container, Grid } from '@material-ui/core';
import { AiOutlineVerticalAlignTop, AiOutlineVerticalAlignBottom} from 'react-icons/ai';
import { FaUserAstronaut, FaFileCode, FaBloggerB, FaLinkedin } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdLocationOn, MdBusinessCenter, MdEmail } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GoButton from '../components/Buttons/GoButton';
import SquareAvatar from '../components/AvatarArea/SquareAvatar';
import NavigationToolStatic from '../components/Tools/NavigationToolStatic';
import SeeButton from '../components/Buttons/SeeButton';
import CategoryBadge from '../components/CategoryBadge';
import Post from '../components/Post';
import ContactForm from '../components/ContactForm';

import jobsExperiences from '../data/jobs';

import '../styles/home.css';

import 'react-toastify/dist/ReactToastify.css';

export default ({ data }) => {    
    const [jobActive, setjobActive] = useState(0);
    
    const { edges: posts } = data.allMdx;

    const youtubeOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1
        },
    };

    return(
        <div>
            <ToastContainer />
            <div className="design-area">
                <img className="top-design" alt="Design Back" src="/design-back.png"></img>
                <img className="top-design front" alt="Design Front" src="/design-front.png"></img>
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
                <div id="content">
                    <Grid id="top" container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6} zeroMinWidth className="content">
                            <div className="top-left">
                                <h4 className="tooltip">
                                    <p className="tooltip-text">That's my nick</p>
                                    MisterDaniels
                                </h4>
                                <h1>Daniel Silva</h1>
                                <h5>Desenvolvedor web, UI/UX Designer, Vídeo Editor, Game
                                    developer nas horas vagas e ♥ por código.</h5>
                                <GoButton text="SAIBA MAIS" link="#bio" />
                                <div className="experience-area">
                                    <div className="role-item">
                                        <h2 className="title">Designer</h2>
                                        <div className="detail">
                                            <FaDraftingCompass size={50} color="#F55547" />
                                            <h3 className="time">3+</h3>
                                            <p className="time-desc">anos</p>
                                        </div>
                                    </div>
                                    <div className="role-item">
                                        <h2 className="title">Programador</h2>
                                        <div className="detail">
                                            <FaCode size={50} color="#F55547" />
                                            <h3 className="time">8</h3>
                                            <p className="time-desc">meses</p>
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
                </div>
            </Container>
            <div id="bio" className="description-card gradient">
                <Container>
                    <Grid container direction="row" className="container">
                        <Grid item xs={8} zeroMinWidth>
                            <section className="text-content">
                                <h1>Quem sou eu, afinal ?</h1>
                                <p>
                                    Desde criança sempre fui apaixonado em conhecer, portanto, tive a 
                                    experiência em desenvolver trabalhos e consequentemente me tornei 
                                    mais maduro e sério desde cedo. Atualmente, trabalho no setor de 
                                    Marketing da Rádio Simpatia FM 105,5 de Campos Novos / SC. 
                                    Tive a oportunidade deste pouco tempo, em desenvolver vídeos 
                                    voltados á apresentar algum produto ou instituição.
                                </p>
                            </section>
                        </Grid>
                        <Grid item xs={4} zeroMinWidth>
                            <div className="image-content">
                                <SquareAvatar 
                                    img="/avatar.png"
                                    emoji={
                                        {
                                            name: 'man-facepalming',
                                            text: '🤦‍♂️'
                                        }
                                    }
                                    status="ÉÉÉ... Só tenho essa foto" />
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
                            { jobsExperiences.map((job, index) => (
                                <div 
                                    className="job" 
                                    key={ index } 
                                    active={ jobActive === index ? 'true' : 'false' }
                                    onClick={ () => { setjobActive(index)  } }
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
                            <span className="location">
                                <MdLocationOn size={25}/>
                                <a 
                                    href={ jobsExperiences[jobActive].location.link
                                         ? 'https://google.com/maps/' + jobsExperiences[jobActive].location.link 
                                         : '/' }
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p>{ jobsExperiences[jobActive].location.city }-
                                    { jobsExperiences[jobActive].location.state }</p>
                                </a>
                            </span>
                            <div className="title">
                                <h1>{ jobsExperiences[jobActive].title }</h1>
                                <p>
                                    { jobsExperiences[jobActive].start.toLocaleString('default', { month: 'short' }) } 
                                     de { jobsExperiences[jobActive].start.getFullYear() } 
                                </p>
                            </div>
                            <h2 style={{marginBottom: '30px'}}>{ jobsExperiences[jobActive].role }</h2>
                            <p className="description">
                                { jobsExperiences[jobActive].description }
                            </p>
                            <div className="actions">
                                { jobsExperiences[jobActive].site && 
                                    <SeeButton 
                                        text="Conheça mais"
                                        link={ jobsExperiences[jobActive].site } />
                                }
                            </div>
                            <h5>Principais tecnologias utilizadas:</h5>
                            <div className="tecnologies">
                                { jobsExperiences[jobActive].technology.map((technology, index) => (
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
                            <li>Todos</li>
                            <li>Desenvolvimento</li>
                            <li>Jogos</li>
                            <li>Artes</li>
                            <li>Vídeos</li>
                        </ul>
                    </div>
                    <div className="projects">
                        <div className="project-card">
                            <div className="left">
                                <YouTube videoId="Bs1ouzYEPk0" opts={youtubeOptions} />
                            </div>
                            <div className="right">
                                <h1>Vídeo cortes espaço</h1>
                                <p className="description">
                                    Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. 
                                    Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante 
                                    blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
                                    Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris que eu tomo,
                                    mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. 
                                    Interagi no mé, cursus quis, vehicula ac nisi.
                                </p>
                                <div className="actions">
                                    <SeeButton 
                                        text="Conheça mais"
                                        link={ jobsExperiences[jobActive].site } />
                                </div>
                                <h2>Principais tecnologias utilizadas:</h2>
                                <div className="tecnologies">
                                    <CategoryBadge category={ { 'title': 'After Effects' } } />
                                    <CategoryBadge category={ { 'title': 'Adobe Photoshop' } } />
                                    <CategoryBadge category={ { 'title': 'Sony Vegas' } } />
                                    <CategoryBadge category={ { 'title': 'Sound Forge' } } />
                                    <CategoryBadge category={ { 'title': 'Artlist.io' } } />
                                </div>
                            </div>
                        </div>
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