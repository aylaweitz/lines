import { Link } from '../../components/Link'
import { getLine, getLines } from '../../utils/lines'

const Line = ({
  params: { line: id },
}: {
  params: {
    line: string
  }
}) => {
  const line = getLine(id)

  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="/">Back</Link>

      <article className="flex max-w-full grid grid-cols-1 justify-around rounded border-solid p-4 border-2 border-slate-400">
        <div className="text-lg font-bold">{line.name}.</div>

        <div className="text-lg">{line.wavelength} Å</div>

        {/* INSTRUMENTS*/}
        <p className="italic">Instruments:</p>
        <div className="flex gap-4 justify-start items-center">
          {line.instruments.map((instrument, index) => (
              <div key={index} className="flex box-border hover:box-content justify-around content-center rounded-full border-solid border-2 pb-0 pt-0 pl-2 pr-2 border-slate-300 bg-slate-100">
                {instrument}
              </div>
          ))}
        </div>
        
        {/* REGIONS OF SOLAR ATMOSPHERE*/}
        <p className="italic">Region/s:</p>
        <div className="flex gap-4 justify-start items-center">
          {line.regions.map((regions, index) => (
              <div key={index} className="flex box-border hover:box-content justify-around content-center rounded-full border-solid border-2 pb-0 pt-0 pl-2 pr-2 border-slate-300 bg-slate-100">
                {regions}
              </div>
          ))}
        </div>

        <div className="italic">{line.description}.</div>
      </article>
    </div>
  )
}

export default Line

// Preload all line page params.
export const generateStaticParams = () =>
  getLines().map(({ id }) => ({
    line: id,
  }))
