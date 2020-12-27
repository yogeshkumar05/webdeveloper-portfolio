import React from 'react';
import TopActionBar from './TopActionBar';

const Appendix = (props) => {
  const { users } = props;
  return (<div className='body-container'>
    <TopActionBar heading='Appendix' />
    <ul>
      <li> Design Patent in India
                <ol>Title: Financial Technology Robot</ol>
        <ol>Design No: 255003</ol>
        <ol>Date of issue: 20/02/2014</ol>
      </li>
      <li> Design Patent in US
                <ol>Application No: 29461112</ol>
      </li>
      <li> Utility Patents in India: Application Nos
                <ol>4773/CHE/2013</ol>
        <ol>4772/CHE/2013</ol>
        <ol>4771/CHE/2013</ol>
        <ol>4770/CHE/2013</ol>
      </li>
    </ul>
  </div>);
}
export default Appendix;
