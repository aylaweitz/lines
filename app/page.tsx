import { Link } from '../components/Link'
import { getLines } from '../utils/lines'

const Page = ({
  searchParams: {},
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) => {
  const lines = getLines()

  return (
    <div className="space-y-4">
      <p>Hey, lines.</p>

      <div className="flex flex-col items-start gap-1">
        {lines.map(({ id }) => (
          <Link key={id} href={'/' + id}>
            {id}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
