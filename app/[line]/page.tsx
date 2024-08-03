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

      <p className="text-lg font-bold">Hello {line.name}.</p>

      <p className="italic">{line.description}.</p>
    </div>
  )
}

export default Line

// Preload all line page params.
export const generateStaticParams = () =>
  getLines().map(({ id }) => ({
    line: id,
  }))
