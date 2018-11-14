import React from 'react';
import TopActionBar from './TopActionBar';

const About = (props) => {
    const {users} = props;    
    return(<div className='body-container'>
        <TopActionBar heading='Personal Info'/>
        <div className='aboutme-container'>
            <ul>
                <li>Born and raised in <a href='https://en.wikipedia.org/wiki/Hassan,_Karnataka' target='_blank'>Hassan</a>, Karnakata</li>
                <li>Residing in <a href='https://en.wikipedia.org/wiki/Bangalore' target='_blank'>Bangalore</a>, Karnakata</li> 
            </ul>
        </div>
    </div>);
}
export default About;

