import { T[FTName % capitalize] } from './[FTName % capitalize].types'

const [FTName % capitalize]: T[FTName % capitalize] = async (req, res, next) => {
  return next()
}

export { [FTName % capitalize] }
