export type Line = {
  /**
   * Unique ID of the line. Used as URL.
   */
  id: string
  /**
   * Human readable name of the line.
   */
  name: string
  /**
   * Line description.
   */
  description: string
  /**
   * Line wavelength (angstrom)
   */
  wavelength: number
  /**
   * Line wavelength
   */
  instruments: string[]
  /**
   * Region of Solar atm that this line probes
   */
  regions: string[]
  /**
   * Wavelength range (e.g. "EUV", "Visible", ...)
   */
  wave_range: string
}
