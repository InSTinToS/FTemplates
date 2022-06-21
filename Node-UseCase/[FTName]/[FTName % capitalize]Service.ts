import type { TExecute } from "./[FTName % capitalize].types"

class <FTName % capitalize>Service {
  execute: TExecute = async () => {
    throw new Error("<FTName % capitalize>.execute must be implemented")
  }
}

export { <FTName % capitalize>Service }