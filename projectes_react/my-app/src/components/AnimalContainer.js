import React from 'react';
import '../styles/AnimalContainer.css'

const AnimalContainer = (props) => {
    const { imageURL, text, name } = props;

    const handleClick = () => {
        let audio = null;
        if (name === "Ase") {
            audio = new Audio("https://sonidosmp3gratis.com/sounds/shrek.mp3");
        } else if (name === "Girafa") {
            audio = new Audio("https://sonidosmp3gratis.com/sounds/jirafa-.mp3");
        } else if (name === "Lèmur") {
            audio = new Audio("https://www.sonidosmp3gratis.com/sounds/008698831_prev.mp3");
        }

        if (audio) {
            audio.play();
        }

    };

    return (
        <div className="card mb-3" style={{ maxWidth: "50%" }}>
            <div className="row no-gutters">
                <div onClick={handleClick} className="col-md-4">
                    <img className='image' src={imageURL}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">L'animal és: {name}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AnimalContainer;
