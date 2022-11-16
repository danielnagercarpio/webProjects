import React from 'react';
import AnimalContainer from './AnimalContainer';
class Header extends React.Component {
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Daniel Nager Carpio - La granja de pepito</a>
                </nav>
                <br/>
                <h1> Llistat d'animals </h1>
                <br/>
            </header>
            
        );
    }
}

export default Header;