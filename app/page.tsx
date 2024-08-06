import { Link } from '../components/Link'
import { FilterButton } from '../components/FilterButton'
import { getLines, getLine } from '../utils/lines'
import { uniqueRegions, uniqueInstruments, uniqueWaveRange } from '../utils/get_unique_filters'
import { OBS } from '../app/[instruments]/observatories'

const Page = ({
  searchParams: {},
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) => {
  const lines = getLines()
  const instruments = uniqueInstruments // change to more general later
  const regions = uniqueRegions
  const wave_range = uniqueWaveRange
  const observatories = Object.keys(OBS)


  return (
    <div className="space-y-4">

      <article className='max-w-full text-wrap'>
        <p className="font-bold text-left">Solar lines</p>

        <p className="italic">Filter by...</p>
        <p>Observatory:</p>
          <div className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar">
          <FilterButton filter='All' on={true}></FilterButton>
              {observatories.map((observatory) => (
                <FilterButton filter={observatory}></FilterButton>
              ))}
          </div>
        <p>Instrument:</p>
          <div className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar">
              {instruments.map((instrument) => (
                <FilterButton filter={instrument}></FilterButton>
              ))}
          </div>
        <p>Region of solar atmosphere**:</p>
          <div className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar">
              {regions.map((region) => (
                <FilterButton filter={region}></FilterButton>
              ))}
          </div>
        <p>Wavelength range:</p>
          <div className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar">
              {wave_range.map((wave) => (
                <FilterButton filter={wave}></FilterButton>
              ))}
          </div>
        
        <p>Usage:</p>
          <div className="flex gap-4 justify-start items-center overflow-x-auto no-scrollbar">
          <FilterButton>Spectropolarimetry</FilterButton>
          </div>

        {/* <p className="text-left">INTERACTIVE GRAPH -- include lines at wavelengths for pages that exist </p> */}
      </article>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">  
        {lines.map(({ id, name, wavelength }) => (
          <Link style='none' key={id} href={'/' + id}>
            <div className="flex justify-around rounded border-solid border-2 border-slate-400 content-center hover:border-slate-600 hover:bg-slate-100 hover:scale-105 duration-300">
              <p>{name}</p>
            </div>
          </Link>
        ))}
      </div>

      <footer>
        <p className="text-sm italic max-w-full overflow-x-auto">**At what height is a spectral line is "formed"? This is a controversial question with no great answer. We report approximate regions of the solar atmosphere that are commonly associated with these lines in the literature.</p>
        {/* <div className="flex text-sm text-slate-500 italic items-center justify-start overflow-x-auto whitespace-nowrap">
          <span className="mr-1">Want to help improve this database?</span>
          <Link style='underline' href={'https://github.com/aylaweitz/lines'}>Contribute!</Link>
        </div> */}
      </footer>

    </div>
  )
}

export default Page
