import React, {Component} from 'react';
class Progressbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {config} = this.props;
        const {containerStyle,
            progressStyle,
            stripe,
            animate,
            showLabel,
            width,
            label 
        } = config;
        //className will be a string and style will be an object
        const containerClass = `${'progress-container'} ${typeof containerStyle === 'string' && containerStyle}`;
        const progressClass = `${'progress-indicator'} ${stripe && 'striped'} ${animate && 'animate'} ${typeof progressStyle === 'string' && progressStyle} `;
        const progressLabel = label ? label : `${width}%`;
        return (
            <div className={containerClass} style={typeof containerStyle === 'object' ? containerStyle : {}}>
            <div className={progressClass} style={typeof progressStyle === 'object' ? progressStyle : {}}>{showLabel && progressLabel}</div>
        </div>
        );
    }
};
export default Progressbar;