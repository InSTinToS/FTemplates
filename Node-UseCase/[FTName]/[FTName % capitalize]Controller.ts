import type { THandle } from "./[FTName % capitalize].types"

class <FTName % capitalize>Controller {
  handle: THandle = async (req, res) => {
    throw new Error("<FTName % capitalize>.handle must be implemented")
  }
}

export { <FTName % capitalize>Controller }