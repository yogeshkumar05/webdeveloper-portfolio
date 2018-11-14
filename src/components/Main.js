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
            <a href='#'><img className='npm-icon' src="src = '../../images/github.png" alt="Github"/></a>
            <a href='#'><img className='npm-icon' src="src = '../../images/npm.png" alt="Npm"/></a>
            <a href="#" className='profile-social-links'><i className="fa fa-twitter"></i></a>  
            <a href="#" className='profile-social-links'><i className="fa fa-linkedin"></i></a>  
            <a href="#" className='profile-social-links'><i className="fa fa-facebook"></i></a>
            <a href="#" className='profile-social-links'><i className="fa fa-skype"></i></a>  
        </div>
                {/* <Link to='/contact' ><button className='profile-contact'>Hire Me</button></Link> */}
            </div>
        </div>
    <div className='main-summary'>
    <ul>
        <li>Total Experience: 6+ years</li>
        <li>Web Development Experience: 4+ years</li>
        <li>Experience across the domains
            <ol>Digital Banking: 3+ years</ol>
            <ol>Storage Area Networking: 2 years</ol>
            <ol>Telecommunication: 1 year</ol>
        </li>
        <li>Co-Applicant of 6 patents in India & US</li>
        <li>10+ Enterprise projects</li>
        <li>15+ trainings</li>
    </ul>
    </div>
    </div>);
}
}
