import React,{ReactNode} from 'react'

interface Props {
  children?: ReactNode
}

function Dropdown({children}:Props) {
  return (
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {children}
    </ul>
  )
}

export default Dropdown