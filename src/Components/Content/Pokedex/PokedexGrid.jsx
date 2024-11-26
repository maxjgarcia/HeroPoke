const PokedexGrid = ({ pokedex, onCardClick, onRemoveClick }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
    }}
  >
    {pokedex.map((pokemon) => (
      <div
        key={pokemon.name}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h3>{pokemon.name}</h3>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{ width: "100px", height: "100px" }}
        />

        <div className="space-x-3">
          <button
            className="w-8 bg-green-300"
            onClick={() => onCardClick(pokemon.name)}
          >
            Details
          </button>

          <button
            className="w-8 bg-red-300"
            onClick={() => onRemoveClick(pokemon.name)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default PokedexGrid;
