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
import arkaneButton from '../images/ArkaneButton.png';
//components

//web3 imports
import Web3 from "web3";
import { ArkaneConnect } from '@arkane-network/arkane-connect'

const INITIAL_STATE = {
    arkaneConnect: null,
    fetching: false,
    address: "",
    web3: null,
    provider: null,
    connected: false,
    chainId: 1,
    networkId: 1,
    assets: [],
    pendingRequest: false,
    result: null
}
class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
        this.connectArkane = this.connectArkane.bind(this);
        this.connectWeb3 = this.connectWeb3.bind(this);
        this.subscribeProvider = this.subscribeProvider.bind(this);
    }
    async connectArkane(){
        const arkaneConnect = new ArkaneConnect('OinkAR',{
             environment: 'staging',
             windowMode: 'POPUP'

        });
        await this.setState({
            arkaneConnect: arkaneConnect
        });
        arkaneConnect.flows.getAccount();
    }
    connectWeb3(){
        if(window.ethereum){
            const web3 = new Web3(window.ethereum);
            try{
                window.ethereum.enable()
                .then(async provider=>{
                    await this.subscribeProvider(provider);
                    const accounts = await web3.eth.getAccounts();
                    const address = accounts[0];
                    const networkId = await web3.eth.net.getId();
                    const chainId = await web3.eth.getChainId();
                })
            }catch(e){
                console.log(e);
            }
        }
    }
    async subscribeProvider(provider){
        if(!provider.on){
            return;
        }
        provider.on("close", ()=>this.resetApp());
       //  provider.on("accountsChanged", async (accounts) => {
       //     const { web3 } = this.state;
       //     const networkId = await web3.eth.net.getId();
       //     await this.setState({chainId, networkId});
       //     await this.getAccountAssets();
       //  });
       // provider.on("chainChanged", async (chainId) => {
       //     const { web3 } = this.state;
       //     const networkId = await web3.eth.net.getId();
       //     await this.setState({chainId, networkId});
       //     await this.getAccountAssets();
       // });
       // provider.on("networkChanged", async (networkId) => {
       //     const { web3 } = this.state;
       //     const chainId = await web3.eth.chainId();
       //     await this.setState({ chainId, networkId});
       //     await this.getAccountAssets();
       // });
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
                                <img className="socialMediaLink m-4" src={downButton}  
                                id="scrollButton" alt="" 
                                onClick={()=>scrollToElement(
                                    '#connectSection', {
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
                                    <img 
                                    onClick={()=>this.connectArkane()}
                                    className="connectButton p-2 ml-3" src={arkaneButton}  id="" alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-start">
                                    <img 
                                    onClick={()=>this.connectWeb3()}
                                    className="connectButton p-2 ml-3" src={detectProviderButton}  id="" alt="" />
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