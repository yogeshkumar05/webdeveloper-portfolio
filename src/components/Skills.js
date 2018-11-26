import React, {Component} from 'react'; 
import TopActionBar from './TopActionBar';
export default class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='skills-wrapper'>
                <TopActionBar heading='Skills Page'/>
            <div className='skills-container'>
                <div className='skills-anime'>
                <div className='skill-details'>
                    <div className='skill-name'>HTML5</div>
                    <div className='progress-container'>
                        <div className='progress-html'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>CSS3</div>
                    <div className='progress-container'>
                        <div className='progress-css'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>Javascript ES6</div>
                    <div className='progress-container'>
                        <div className='progress-js'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>ReactJS</div>
                    <div className='progress-container'>
                        <div className='progress-react'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>Redux</div>
                    <div className='progress-container'>
                        <div className='progress-redux'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>Sass</div>
                    <div className='progress-container'>
                        <div className='progress-sass'>Advanced</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>NodeJS</div>
                    <div className='progress-container'>
                        <div className='progress-node'>Beginner</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>React Native</div>
                    <div className='progress-container'>
                        <div className='progress-native'>Beginner</div>
                    </div>
                </div>
                <div className='skill-details'>
                    <div className='skill-name'>Mongo</div>
                    <div className='progress-container'>
                        <div className='progress-mongo'>Beginner</div>
                    </div>
                </div>
                </div>

                <div className='skills-list'>
                    <h3>Other Skills</h3>
                    <ul>
                        <li>React Bootstrap</li>
                        <li>npm</li>
                        <li>webpack</li>
                        <li>babel</li>
                        <li>ajax</li>
                        <li>json</li>
                        <li>sql</li>
                        <li>jest + enzyme</li>
                        <li>PWA</li>
                        <li>AMP</li>
                        <li>Google lighthouse</li>
                    </ul>
                </div>

            </div>
            </div>
        );
    }
}


// Advanced
// Advanced
// Intermediate background-color: #2196F3
// Beginner





