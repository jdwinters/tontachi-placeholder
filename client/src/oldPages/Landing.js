//React/UI/Bootstrap imports
import React from 'react';
import { Button } from 'reactstrap';

//Web3  Imports
import Web3 from "web3";
import Web3Modal from "web3modal";
import { convertUtf8ToHex } from '@walletconnect/utils';

//Provider imports
import Arkane from "@arkane-network/web3-arkane-provider";
import Authereum from "authereum";
//Helpers


const INITIAL_STATE = {
    fetching: false,
    address: "",
    web3: null,
    provider: null,
    connected: false,
    chainId: 1,
    networkId: 1,
    assets: [],
    showModal: false,
    pendingRequest: false,
    result: null
}
function initWeb3(provider){
    const web3 = new Web3(provider);
    web3.eth.extend({
        methods: [
            {
                name: "chainId",
                call: "eth_chainId",
                outputFormatter: web3.utils.hexToNumber
            }
        ]
    });
    return web3;
}
class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
        //functions
        this.getProviderOptions = this.getProviderOptions.bind(this);
        this.onConnect = this.onConnect.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        //variables
        this.web3Modal = new Web3Modal({
            // network: "mainnet", // optional
            cacheProvider: true, // optional
            providerOptions: this.getProviderOptions() // required
        });
    }
    componentDidMount(){
        if(this.web3Modal.cachedProvider){
            console.log("going to do this.onConnect()")
            this.onConnect();
        }
    }
    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }
    getProviderOptions(){
        const providerOptions = {
            arkane: {
                package: Arkane, // required
                options: {
                // clientId: process.env.REACTAPP_ARKANE_CLIENT_ID // required
                clientId: 'OinkAR',
                environment: 'staging'
                }
            },
            // authereum: {
            //     package: Authereum, // required
            //     apiKey: 'y7edbh5uw4eTpLg8JAk7tHdzfMOT6wlB'
            // }
        };
        return providerOptions;
    }
    async onConnect (){
        this.web3Modal.clearCachedProvider()
        const provider = await this.web3Modal.connect();
        console.log("provider: ");
        console.log(provider);
        
        await this.subscribeProvider(provider);
        const web3 = initWeb3(provider);
        console.log("web3: ");
        console.log(web3);
        const accounts = await web3.eth.getAccounts();
        console.log("accounts: ");
        console.log(accounts);
        const address = accounts[0];
        console.log("address: ");
        console.log(address);
        const networkId = await web3.eth.net.getId();
        console.log("networkId: ");
        console.log(networkId);
        const chainId = await web3.eth.chainId();
        console.log("chainId: ");
        console.log(chainId);

        await this.setState({
            web3: web3,
            provider: provider,
            connected: true,
            address: address,
            chainId: chainId,
            networkId: networkId
        });
    }
    async resetApp(){
        const { web3 } = this.state;
        if(web3 && web3.currentProvider && web3.currentProvider.close){
            await web3.currentProvider.close();
        }
        await this.web3Modal.clearCachedProvider();
        this.setState({...INITIAL_STATE});
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
    // getNetWork(){
    //     getChainData(this.state.chainId).network;
    // }

    render(){
        const {
            //assets,
            address,
            connected,
            chainId,
            fetching,
            showModal,
            pendingRequest,
            result
        } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">Welcome to the world of Tontachi13</div>
                </div>
                <div className="row">
                    <div className="col text-center">Yay NFTs</div>
                </div>
                <div className="row">
                    <div className="col text-center">On this site you will be able to import your Trees and Crypton! Click to begin!</div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2">
                        <Button className="" onClick={()=> this.onConnect()} color="primary">Enable Ethereum</Button>
                    </div>
                    <div className="col-2">
                        <Button className="" color="secondary">Import Your Crypton!</Button>
                    </div>
                    <div className="col-4"></div>
                </div>
                
            </div>
        );
    }
}

export default Landing;