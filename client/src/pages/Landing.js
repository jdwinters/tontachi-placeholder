import React from 'react';
import '../pageCSS/Landing.css';
import discorbButton from '../images/discorbButton.png';
import twitterButton from '../images/twitterButton.png';
import mediumButton from '../images/mediumButton.png';

class Landing extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="landingImg">
                <img class="socialMediaLink" src={discorbButton} id="discorbButton"/>
                <img class="socialMediaLink" src={twitterButton} id="twitterButton"/>
                <img class="socialMediaLink" src={mediumButton}  id="mediumButton"/>
            </div>
        )
    }
}

export default Landing;