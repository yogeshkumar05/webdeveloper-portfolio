import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/MainPage';
import '../styles/index.scss'
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Resume from './components/Resume';
import Appendix from './components/Appendix';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('container');
// const initialRoute = window.innerWidth >= 1024 ? Sidenav : Main;
ReactDOM.render(<BrowserRouter>
                        <div className='app-container'>
                            <Route path="/" component={Navbar}/>
                            <Route path="/" exact component={Main}/>
                            <Route path="/skills" component={Skills}/>
                            <Route path="/experience" component={Experience}/>
                            <Route path="/about" component={About}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/appendix" component={Appendix}/>
                        </div>
                    </BrowserRouter>, container );
