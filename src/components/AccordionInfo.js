import React, {Component, Fragment} from 'react';
import Languages from './Languages';

export default class AccordionInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {showPanel: false};
    }
    togglePanel = () => {
        const current = this.state.showPanel;
        this.setState({showPanel: !current});
    }
    render()
    {
        const {title, icon, dataKey} = this.props;
        console.log(dataKey)
        return(<Fragment>
            <button className="accordion" onClick={this.togglePanel}><i class={`${'fa fa-'}${icon}`}/> {title}</button>
            <div className={this.state.showPanel? 'show-panel': 'panel'}>
                {
                    dataKey === 'languages' && <Languages/> 
                }
                {
                    dataKey === 'hobbies' && <ul>
                        <li>Reading Books</li>
                        <li>Follows Yoga Regularly</li>
                        <li>Swimming</li>
                        <li>Games: Football, Cricket, Volleyball, Table Tennis</li>
                        <li>Movies</li>
                        <li>Music</li>
                    </ul>
                }
                {
                    dataKey==='education' && 
                    <ul>
                        <li>Studied till +2 in Jawahar Navodaya Vidyalaya, Hassan</li>
                        <li>Graduated in 2012 from National Institute of Technology Karnataka in Information Technology</li>
                    </ul>
                }
            </div>
        </Fragment>)
    }
}