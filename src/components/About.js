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
                <li>Studied till +2 in Jawahar Navodaya Vidyalaya, Hassan</li>
                <li>Graduated in 2012 from National Institute of Technology Karnataka in Information Technology</li>
                <li>Open to learn new things</li>
                <li>Staunch follower of Yoga</li>
                <li>Likes to read Motivational books</li>
                <li>Good at Swimming, Cricket, Volleyball, Table Tennis</li>
                <li>Loves to train people on new Technologies</li>
                <li>Knows four languages</li>
            </ul>
        </div>
    </div>);
}
export default About;

