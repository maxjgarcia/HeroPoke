import { Bulbasaur, Charmander, Squirtle, Pikachu, Electric, Fire, Water, Grass, PGif, SGif, CGif, BGif } from "../assets";

const poke_list = [
    {
        id: 1,
        image: Pikachu,
        name: "Pikachu",
        description: "Pikachu, classified as an Electric-type Pokémon, Pikachu is a large yellow mouse with a lightning bolt-shaped tail, and red sacs on its cheek which can generate large amounts of electricity.",
        type: "Electric",
        typeImage: Electric,
        gif: PGif,
        bgColor: "#FFDF30",
    },
    {
        id: 2,
        image: Charmander,
        name: "Charmander",
        description: "Charmander, the Fire-type Lizard Pokémon, is known for the flame that burns at the tip of its tail. As long as the flame burns, Charmander is healthy and strong, but if it ever goes out, it could spell trouble for this little Pokémon. Playful and curious, Charmander is ready to evolve and grow into a powerful ally.",
        type: "Fire",
        typeImage: Fire,
        gif: CGif,
        bgColor: "#FF7F27",
    },
    {
        id: 3,
        image: Squirtle,
        name: "Squirtle",
        description: "Squirtle, the Tiny Turtle Pokémon, is a Water type known for its shell, which provides defense in battle. Squirtle can withdraw into its shell to protect itself, and it can shoot powerful jets of water from its mouth. With its playful personality and steadfast determination, Squirtle is a wonderful companion for any Pokémon Trainer.",
        type: "Water",
        typeImage: Water,
        gif: SGif,
        bgColor: "#00A2E8",
    },
    {
        id: 4,
        image: Bulbasaur,
        name: "Bulbasaur",
        description: "Bulbasaur, the Seed Pokémon, is a Grass and Poison type that has a unique bulb on its back. The bulb stores energy and eventually blooms into a large flower as it grows and evolves. Bulbasaur is gentle, loyal, and brave, making it a popular choice for Trainers starting their journey.",
        type: "Grass",
        typeImage: Grass,
        gif: BGif,
        bgColor: "#22B14C",
    },
];

export default poke_list;
