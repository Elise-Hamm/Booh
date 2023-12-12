function PokemonCard(props) {

    console.log(props);

    const pokemon = props.pokemonList[0];

    return (
        <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name}></img>
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    )
}


export default PokemonCard;
