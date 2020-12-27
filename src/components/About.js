import React from 'react';
import AccordionInfo from './AccordionInfo';
import TopActionBar from './TopActionBar';

class About extends React.Component {

  render() {
    const { users } = this.props;
    return (<div className='body-container'>
      <TopActionBar heading='Personal Info' />
      <div className='aboutme-container'>
        <div className='aboutme-info'>
          <i class="fa fa-calendar"></i><span>DOB:</span> <span className='aboutme-data'>10 Feb 1990</span>
        </div>
        <div className='aboutme-info'>
          <i class="fa fa-flag" /><span>Nationality:</span> <span className='aboutme-data'>Indian</span>
        </div>
        <AccordionInfo title='Hobbies & Interests' icon='certificate' dataKey='hobbies' />
        <AccordionInfo title='Education' icon='graduation-cap' dataKey='education' />
        <AccordionInfo title='Languages' icon='language' dataKey='languages' />
      </div>
    </div>);
  }
}
export default About;

