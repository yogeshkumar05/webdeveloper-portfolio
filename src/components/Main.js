import React, {Component} from 'react';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {showLogin : false, showRegister : false};
    }
    showLoginModal = () => {
        this.setState({showLogin:true});
    }
    showRegisterModal = () => {
        this.setState({showRegister:true});
    }
    hideLoginModal = () => {
        this.setState({showLogin:false});
    }
    hideRegisterModal = () => {
        this.setState({showRegister:false, showLogin:false});
    }
    render() {
    const {users} = this.props;    
    return(<div className='main-container'>
        <div className="profile-card">
            <div className='profile-img-container'>
                <img src="src = '../../images/img_avatar.png" alt="Yogesh"/>
            </div>
            <div className='profile-details-container'>
                {/* <h1 className='profile-name'>Yogesh Kumar</h1> */}
                <div className='role-wrapper'>
                    <i class="fa fa-code" aria-hidden="true"></i>
                    <div className="profile-title">Fullstack Web Developer</div>
                </div>
                
                <div className='location-wrapper'>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <div className='profile-location'>Bangalore</div>
                </div>
                <p className='email-phone'>
                    <div className='email-wrapper'>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <div> yogeshkumar.05@live.in</div>
                    </div>
                    <div className='phone-wrapper'>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <div>+91-8939758254</div>
                    </div>
                </p>
                <div className='contact-urls'> 
            {/* <a href="#" className='profile-social-links'><i class="fa fa-github-square"></i></a> */}
            <a href='https://github.com/yogeshkumar05/' target='_blank'><img className='npm-icon' src="src = '../../images/github.png" alt="Github"/></a>
            <a href='https://www.npmjs.com/~yogeshkumar.05' target='_blank'><img className='npm-icon' src="src = '../../images/npm.png" alt="Npm"/></a>
            <a href="https://twitter.com/yogeshkumar05" target='_blank' className='profile-social-links'><i className="fa fa-twitter"></i></a>  
            <a href="https://www.linkedin.com/in/yogesh-kumar-a8617957/" target='_blank' className='profile-social-links'><i className="fa fa-linkedin"></i></a>  
            <a href="https://www.facebook.com/yogesh05kk" target='_blank' className='profile-social-links'><i className="fa fa-facebook"></i></a>
            <a href="skype:live:yogeshkumar.05?call" target='_blank' className='profile-social-links'><i className="fa fa-skype"></i></a>  
        </div>
                {/* <Link to='/contact' ><button className='profile-contact'>Hire Me</button></Link> */}
            </div>
        </div>
    <div class="row">
  <div class="column">
    <div class="card">
      <p><i class="fa fa-briefcase"></i></p>
      <h3>6+</h3>
      <p>years of Experience</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <p><i class="fa fa-star"></i></p>
      <h3>6</h3>
      <p>Patents</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <p><i class="fa fa-check"></i></p>
      <h3>8+</h3>
      <p>Enterprise Projects</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <p><i class="fa fa-slideshare"></i></p>
      <h3>10+</h3>
      <p>Technical Trainings</p>
    </div>
  </div>
</div>    
    </div>);
}
}
