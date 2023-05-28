import AmplifierAndDac from '../../assets/images/category-items/amplifiers-and-dac.png'
import Headsets from '../../assets/images/category-items/headsets.png'
import AudioSystems from '../../assets/images/category-items/audio-systems.png'
import Dictaphones from '../../assets/images/category-items/dictaphones.png'
import Microphones from '../../assets/images/category-items/microphones.png'
import Players from '../../assets/images/category-items/players.png'
import VinylPlayers from '../../assets/images/category-items/vinyl-players.png'
import InterconnectCables from '../../assets/images/category-items/interconnect-cables.png'
import { BsArrowRight } from 'react-icons/bs'

function Categories() {
  return (
    <section id='categories-layout' className='sm:p-10 p-8 my-16 space-y-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold uppercase'>CATEGORIES</h2>
        <button className='flex gap-4'>See all<BsArrowRight className='text-2xl' /></button>
      </div>
      <section className='grid md:grid-cols-4 grid-cols-2 md:grid-rows-4 sm:gap-6 gap-4'>
        <a href='' className='border flex justify-center items-center relative rounded-lg md:col-span-2 md:row-span-2 lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>HEADSETS</span>
          <img src={Headsets} alt="Headsets" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>PLAYERS</span>
          <img src={Players} alt="Players" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg lg:px-16 px-8 py-16 md:col-span-1 col-span-2'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>VINYL PLAYERS</span>
          <img src={VinylPlayers} alt="Vinyl Players" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg md:col-span-2 lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>AMPLIFIER & DAC</span>
          <img src={AmplifierAndDac} alt="Amplifier And Dac" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg md:row-span-2 lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>MICROPHONES</span>
          <img src={Microphones} alt="Microphones" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg lg:px-16 px-8 py-16 md:col-span-1 col-span-2'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>AUDIO SYSTEMS</span>
          <img src={AudioSystems} alt="Audio Systems" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg md:col-span-2 md:row-span-2 lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>INTERCONNECT CABLES</span>
          <img src={InterconnectCables} alt="Interconnect Cables" />
        </a>
        <a href='' className='border flex justify-center items-center relative rounded-lg lg:px-16 px-8 py-16'>
          <span className='text-xs uppercase absolute sm:top-8 top-4 sm:left-8 left-4 tracking-[1px]'>DICTAPHONES</span>
          <img src={Dictaphones} alt="Dictaphones" />
        </a>
      </section>
    </section>
  )
}

export default Categories