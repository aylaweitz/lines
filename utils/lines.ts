import fs from 'fs'
import path from 'path'

import json5 from 'json5'

import { Line } from '../types'

const linesFolder = path.join(process.cwd(), 'lines')

/**
 * Load all lines from the files.
 *
 * @returns Lines.
 */
export const getLines = (): Line[] => {
  const ids = fs
    .readdirSync(linesFolder)
    .map((file) => file.replace('.json', ''))

  const lines = ids.map(getLine)

  return lines
}

/**
 * Load a line from its file.
 *
 * @param id Line ID.
 * @returns Line.
 */
export const getLine = (id: string): Line => {
  const content = fs.readFileSync(path.join(linesFolder, id + '.json'), 'utf8')
  const parsed: Omit<Line, 'id'> = json5.parse(content)
  return {
    ...parsed,
    id,
  }
}
