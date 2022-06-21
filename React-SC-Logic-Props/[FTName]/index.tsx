import { use[FTName] } from "./logic"
import { [FTName]Style } from "./styles"
import type { I[FTName]Props } from "./types"

const [FTName] = (props: I[FTName]Props) => {
  const {} = use[FTName]()

  return (
    <[FTName]Style>
      <span>[FTName]</span>
    </[FTName]Style>
  )
}

export default [FTName]
