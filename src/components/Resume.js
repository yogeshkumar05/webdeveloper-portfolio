import React, {Component} from 'react';

export default class TestResume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <object className='body-container' data='../images/resume.pdf' type="application/pdf" width="100%" height="100%">
                    <p>Download Resume <a href='../data/resume.pdf'>to the PDF!</a></p>
                </object>
        );
    }
}