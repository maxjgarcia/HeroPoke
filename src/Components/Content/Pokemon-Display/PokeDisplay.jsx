import PokeCards from './PokeCards'
import Filters from './Filters'
import usePokemonFilter from '../../Hooks/useFilters'
import useFetchPokemons from '../../Hooks/useFetchPokemons'
import useFetchPokemonsDetails from '../../Hooks/useFetchPokemonsDetails'
import { useState } from 'react'
import DetailsModal from '../../Modals/DetailsModal'
import Spinner from './Spinner'
import HeroPokeDisplay from './HeroPokeDisplay'
import useScroll from '../../Hooks/useScroll'

const PokeDisplay = () => {
  // Fetching hooks
  const { pokemons, types, loading } = useFetchPokemons()
  const { filteredPokemons, handleSearch, handleTypeSelect } =
    usePokemonFilter(pokemons)
  const [selectedPokemonName, setSelectedPokemonName] = useState(null)
  const { pokemonDetails, loadingDetails } =
    useFetchPokemonsDetails(selectedPokemonName)

  // Modal handlers
  const handleCardClick = (pokemonName) => {
    setSelectedPokemonName(pokemonName)
  }
  const closeModal = () => {
    setSelectedPokemonName(null)
  }

  // Custom hook for scrolling functionality
  const { showBackToTop, handleScrollTop, contentRef } = useScroll()

  return (
    <>
      <HeroPokeDisplay
        handleScrollTop={handleScrollTop}
        contentRef={contentRef}
      />

      <div className='pt-8 bg-black'>
        {/* Filters Section */}
        <div className='sticky top-0 z-10 bg-black p-2.5 bg-transparent'>
          <Filters
            onSearch={handleSearch}
            onTypeSelect={handleTypeSelect}
            types={types}
          />
        </div>

        {/* Loading state */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div
            className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols items-center pb-20 bg-transparent xl:mx-12 pt-2'
            ref={contentRef} // Attach the scrollable content reference here
          >
            {filteredPokemons.map((pokemon) => (
              <PokeCards
                key={pokemon.name}
                pokemon={pokemon}
                onClick={handleCardClick}
              />
            ))}
          </div>
        )}

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            className='rbow p-3 bottom-4 right-4 fixed rounded-full  bg-custom-gradient border border-black hover:scale-105 transition-all duration-300 hover:bg-white/70 hover:text-black hover:border hover:border-black/30 shadow-lg'
            onClick={handleScrollTop} // Trigger the scroll-to-top action
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              style={{ fill: 'white' }}
            >
              <path d='m12 6.879-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z'></path>
            </svg>
          </button>
        )}

        {/* Details Modal */}
        {selectedPokemonName && pokemonDetails && !loadingDetails && (
          <DetailsModal
            onClose={closeModal}
            pokemonDetails={pokemonDetails}
            isOpen={!!selectedPokemonName}
          />
        )}
      </div>
    </>
  )
}

export default PokeDisplay
