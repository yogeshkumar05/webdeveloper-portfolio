import React from 'react';
import TopActionBar from './TopActionBar';

const Appendix = (props) => {
    const {users} = props;    
    return(<div className='body-container'>
         <TopActionBar heading='Appendix'/>
    </div>);
}
export default Appendix;
