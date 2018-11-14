import React, {Component} from 'react';
import TopActionBar from './TopActionBar';

export default class TestExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className='body-container'>
          <TopActionBar heading='Experience Page'/>
          <div className='experience-wrapper'>
            <div class="timeline">
  <div class="experience-container left">
    <div class="content">
    <h5 className='project-title'>True IService</h5>
      <div className='project-title'>Xebia / McKinsey / True Telecom Ltd., Bangalore </div>
      <div className='project-title'>ReactJS Developer</div>
      <div className='project-time'>Dec 2017 - Oct 2018</div>
      <p className='project-details'>Web application to manage prepaid, postpaid, DTH and Internet services provided by True Telecommunications</p>
      <ul className='project-skills'>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript ES6</li>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>React Bootstrap</li>
        <li>NPM</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>Jest</li>
        <li>Enzyme</li>
      </ul>
    </div>
  </div>
  <div class="experience-container right">
    <div class="content">
    <h5 className='project-title'>Brocade Network Advisor</h5>
      <div className='project-title'>HCL / Brocade, Chennai </div>
      <div className='project-title'>ReactJS Developer</div>
      <div className='project-time'>Mar 2016 - Dec 2017</div>
      <p className='project-details'>Web application to configure & monitor all the Brocade Storage Area Networking devices</p>
      <ul className='project-skills'>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript ES6</li>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>React Bootstrap</li>
        <li>NPM</li>
        <li>Webpack</li>
        <li>Babel</li>
      </ul>
    </div>
  </div>
  <div class="experience-container left">
    <div class="content">
    <h5 className='project-title'>Configuration Management</h5>
      <div className='project-title'>Polaris Financial Technology Ltd., Chennai </div>
      <div className='project-title'>Configuration Management Engineer</div>
      <div className='project-time'>Oct 2015 - Feb 2016</div>
      <p className='project-details'>Branch plan creation, source code management, unit test coverage, build & deployment of all the Intellect products</p>
      <ul className='project-skills'>
        <li>SVN</li>
        <li>Jenkins</li>
        <li>Cobertura</li>
        <li>Shell Scripts</li>
      </ul>
    </div>
  </div>
  <div class="experience-container right">
    <div class="content">
    <h5 className='project-title'>LinkedIn API Integration</h5>
      <div className='project-title'>Polaris Financial Technology Ltd., Chennai </div>
      <div className='project-title'>FTResearch Engineer</div>
      <div className='project-time'>Jan 2015 - Sep 2015</div>
      <p className='project-details'>Integration of LinkedIn with Internal Social Platform to fetch employee details</p>
      <ul className='project-skills'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>LinkedIn JS API</li>
      </ul>
    </div>
  </div>
  <div class="experience-container left">
    <div class="content">
      <h5 className='project-title'>AWS Cloud Deployment Automation</h5>
      <div className='project-title'>Polaris Financial Technology Ltd., Chennai </div>
      <div className='project-title'>FTResearch Engineer</div>
      <div className='project-time'>Oct 2014 - Dec 2014</div>
      <p className='project-details'>Automation of deployment of Intellect Products on Amazon cloud using AWS CLI</p>
      <ul className='project-skills'>
        <li>AWS</li>
        <li>CLI Commands</li>
        <li>Batchscripts</li>
      </ul>
    </div>
  </div>
  <div class="experience-container right">
    <div class="content">
      <h5 className='project-title'> Robin- Robot for Banking & Insurance </h5>
      <div className='project-title'> Polaris Financial Technology Ltd., Chennai </div>
      <div className='project-title'>FTResearch Engineer</div>
      <div className='project-time'>Oct 2012 - Feb 2016</div>
      <p className='project-details'>a patented innovation, designed and developed by FTResearch under the guidance of the Chief Design Officer of PolarisFT, which aims to automate and digitize all the branch banking operations</p>
      <ul className='project-skills'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Visual C#</li>
        <li>WPF</li>
        <li>WCF</li>
        <li>Microsoft Kinect</li>
        <li>Banking Devices APIs</li>
      </ul>
    </div>
  </div>
</div></div>
</div>
        )
    }
}