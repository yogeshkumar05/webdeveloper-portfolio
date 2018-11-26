# react-linear-progressbar
simple and customizable linear progress bar built using ReactJS

# Installation
```javascript
npm i react-linear-progressbar --save
```

# Usage
```javascript
import React, Component from 'react';
import Progressbar from 'react-linear-progressbar';

export default function MyComponent (props) {
    const myConfig = {
        containerStyle :{},
        progressStyle:{},
        stripe: false,
        animate: false,
        showLabel: true,
        width: 40,
        label: 40 + '%'
    }
    return <Progressbar config = {myConfig}/>;
}
```
# Options
all the below configuration options (settings) should be passed as props in the form of an object named 'config' as shown in the example above.

1. **containerStyle** : either a css className or an object of styles. This indicates the styles for progress bar container
    * Examples
    1. passing a css classname
    ```javascript

    <!-- style -->
    .sampleStyle {
        background-color: #000 !important;
    }

    <!-- config -->
    myConfig = {
        containerStyle : 'sampleStyle'
        .....
    }
    ```
    2. passing an object of styles
     ```javascript

    <!-- style -->
    const sampleStyle =  {
        'backgroundColor': '#000 !important';
    }

    <!-- config -->
    myConfig = {
        containerStyle : sampleStyle
        .....
    }
    ```


2. **progressStyle** : similar to containerStyle property above, progressStyle is also either a css className or an object of styles. This indicates the styles for the progress bar (for example, color of the progress)

3. **stripe** : a boolean to specify the progress should have stripes
    * possible values: true | false ; false by default
    
4. **animate** : a boolean to indicate if the the progress bar should have animation effect
    * possible values: true | false ; false by default

5. **showLabel** : a boolean to indicate if the the progress bar percentage should be shown
    * possible values: true | false ; true by default

6. **width** : a number which denotes the progress percentage
     * possible values: any number >=0 && <=100

7. **label** : a string value which will display on the progress bar
     * possible values: any string ; width + '%' by default
     

# Test the code
1. git clone https://github.com/yogeshkumar05/react-linear-progressbar.git
2. npm install
3. npm start
4. launch http://localhost:3001/
    
# Demo is published at 
https://yogeshkumar05.github.io/react-linear-progressbar/
