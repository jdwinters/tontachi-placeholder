import React from 'react';
//css
import '../pageCSS/Landing.css';
//images
import discorbButton from '../images/discorbButton.png';
import twitterButton from '../images/twitterButton.png';
import mediumButton from '../images/mediumButton.png';
import tontachiLogo from '../images/tontachiLogo.png';
import downButton from '../images/downButton.png';
import detectProviderButton from '../images/detectProviderButton.png';
import arkaneButton from '../images/arkaneButton.png';
//components

class Landing extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var scrollToElement = require('scroll-to-element');
        return(
            <div>
                <div id="landingImg" style={{height: window.innerHeight}}>
                    <div className="container-fluid">
                        <div className="row">
                            <img className="tontachiLogo" src={tontachiLogo} id="tontachiLogo" alt="tontachiLogo"/>
                        </div>
                        <div className="row">
                            <div className="col-6 m-2" id="socialLinks">
                                <div className="row">
                                    <a href="https://discord.gg/QYH8sqTmRw" target="_blank">
                                    <img className="socialMediaLink p-2 ml-3" src={discorbButton} id="discorbButton" alt="discorbButton"/>
                                    </a>
                                </div>
                                <div className="row">
                                    <a href="https://twitter.com/tontachiAR" target="_blank">
                                    <img className="socialMediaLink p-2 ml-3" src={twitterButton} id="twitterButton" alt="twitterButton" />
                                    </a>
                                </div>
                                <div className="row">
                                    <a href="https://medium.com/kaimon-international/oinkoink/home" target="_blank">
                                        <img className="socialMediaLink p-2 ml-3" src={mediumButton}  id="mediumButton" alt="mediumButton" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-6" id="scrollLink">
                                <img className="socialMediaLink m-4" src={downButton}  id="scrollButton" alt="" onClick={()=>scrollToElement('#connectSection', {
                                                                                                                                                offset: 0,
                                                                                                                                                ease: 'linear',
                                                                                                                                                duration: 500
                                                                                                                                            })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blueSection" id="connectSection" style={{height: window.innerHeight}}>
                    <div className="container-fluid">
                        <div className="row">
                            <img className="tontachiLogo mt-4 ml-4" src={tontachiLogo} id="" alt="tontachiLogo"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    PLEASE CONNECT OR CREATE A WALLET<br/>TO ENETER THE SHOP
                                </div>
                            </div>                                                                                                      
                        </div>    
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-end">
                                <div className="d-flex justify-content-end">
                                    <a>
                                        <img className="connectButton p-2 ml-3" src={arkaneButton}  id="" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-start">
                                    <a>
                                        <img className="connectButton p-2 ml-3" src={detectProviderButton}  id="" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                                                                                           
                </div>
            </div>
            
        )
    }
}

export default Landing;