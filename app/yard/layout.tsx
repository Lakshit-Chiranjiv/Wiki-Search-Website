import { ReactNode } from "react"
import Search from "../components/Search"

const YardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full flex justify-center my-8'>
        <Search/>
        {children}
    </div>
  )
}

export default YardLayout