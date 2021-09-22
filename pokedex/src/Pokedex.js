import PokeCard from "./PokeCard"

function Pokedex(props) {
    return (
        <div>
            {props.pokemon.map(p => (
                <PokeCard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
            ))}
        </div>
    )
}

export default Pokedex;