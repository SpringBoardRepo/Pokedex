import React from "react"

const POKEAPI = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';
function PokeCard(props) {
    let imgSrc = `${POKEAPI}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-image" src={imgSrc} alt="" />
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.exp}</div>
        </div>
    );
}

export default PokeCard;