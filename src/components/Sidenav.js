import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';

class Sidenav extends Component {
    componentWillMount() {
        const prevCount = localStorage.getItem('totalVisits');
        let counter = 0;
        if(prevCount) {
            counter = Number(prevCount) +1 ;
            localStorage.setItem('totalVisits', counter);
        } else {
            counter++;
            localStorage.setItem('totalVisits', 1);
        }
        localStorage.setItem('totalVisits', counter);
        console.log(counter);
    }
    render() {
    return(<div className='sidenav-container'>
        <div className='top-sidenav'>
            <NavLink exact to="/"  activeClassName='active-route'><img className='icon-thumbnail' src = '../../images/dp.jpg' /> <div className='name-thumbnail'>Yogesh</div></NavLink>
            <NavLink to='/skills'  activeClassName='active-route'>Skills</NavLink>
            <NavLink to='/experience' activeClassName='active-route'>Experience</NavLink>
            <NavLink to='/about' activeClassName='active-route'>Personal</NavLink>
            <NavLink to='/resume' activeClassName='active-route'>Resume</NavLink>
            <NavLink to='/appendix' activeClassName='active-route'>Appendix</NavLink>
        </div>
    </div>);
    }
}
export default Sidenav;