import { usePokemon } from '../../context/Poke-Context'
import { Link } from 'react-router-dom'

const Selection = () => {
  const { isModalOpen, setIsModalOpen, activePoke } = usePokemon()

  console.log('isModalOpen:', isModalOpen)

  return (
    <>
      {isModalOpen && (
        <section className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm'>
          <div className='relative bg-[#0c0b0e] p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-4/5 lg:w-[40%] lg:py-10 lg:h-auto space-y-2'>
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute top-2 right-2 text-white/30 text-md text-center bg-transparent hover:bg-red-700 hover:text-white rounded-[5px] pointer w-[30px] h-[30px]'
            >
              ×
            </button>

            <div className='flex flex-col items-center space-y-5'>
              <h2 className='text-center text-3xl font-bold text-white py-6'>
                Congratulations, you chose{' '}
                <span style={{ color: activePoke.bgColor }}>
                  {activePoke.name}
                </span>
                !
              </h2>

              <img
                src={activePoke.gif}
                alt={`Image of ${activePoke.name}`}
                className='w-[250px] h-[180px] object-fill lg:w-[350px] lg:h-[260px] rounded-[5px]'
              />
            </div>

            <div className='flex flex-col justify-center items-center text-slate-100 pt-6 space-y-8'>
              <h3 className='text-xs text-opacity-40'>Keep Exploring!</h3>

              <div className='flex flex-col md:flex-row justify-center items-center  space-y-4 md:space-y-0 md:space-x-4 lg:space-x-20'>
                <Link
                  to='/pokedex'
                  className='font-semibold text-nowrap text-black px-8  py-3 rounded-full border border-white hover:text-white transition-all duration-300'
                  style={{ backgroundColor: activePoke.bgColor }}
                >
                  To Pokedex
                </Link>
                <Link
                  to='/pokemons'
                  className='font-semibold text-nowrap text-black px-6 lg:px-8 py-3 rounded-full border border-white hover:text-white transition-all duration-300'
                  style={{ backgroundColor: activePoke.bgColor }}
                >
                  To Pokemons
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Selection
