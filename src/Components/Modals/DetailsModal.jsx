const DetailsModal = ({ onClose, pokemonDetails, isOpen }) => {
  return (
    <div className="modal ">
      <div className="modal-content animate-fade-in border-gradient">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className="text-xl font-bold first-letter:uppercase">
            {pokemonDetails.name}
          </h2>
          <p className="text-xl font-semi">{pokemonDetails.type.join(", ")}</p>
        </div>
        <div className="flex items-center justify-between">
          <img
            src={pokemonDetails.image}
            alt={pokemonDetails.name}
            className="sm:m-h-64 md:h-64 w-full object-cover"
          />
          <div>
            <p>
              <strong>Abilities:</strong> {pokemonDetails.abilities.join(", ")}
            </p>
            <p>
              <strong>Stats:</strong>
            </p>
            <ul>
              {pokemonDetails.stats.map((stat) => (
                <li key={stat.name} className="first-letter:uppercase">
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="button1 hover:animate-pulse" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
