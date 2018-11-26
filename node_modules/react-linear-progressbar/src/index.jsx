import React from 'react';
import '../styles/index.scss';
import Progressbar from './components/Progressbar';
import classnames from 'classnames';
const MainContainer = () => {
    const progressWidth= 40;
    const myConfig = {
        containerStyle :{},
        progressStyle:{},
        stripe: true,
        animate: true,
        showLabel: true,
        width: progressWidth,
        label: progressWidth + '%'
    }
    return (
    <div>
        <Progressbar config = {myConfig}/>
        </div>
);
}
export default MainContainer;