import React, { Component } from 'react';

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top text-dark">
                <div className="collapse navbar-collapse text-light" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/">HOME</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}