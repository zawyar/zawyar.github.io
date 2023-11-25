import React, { ReactNode } from 'react'
import { Props } from '~/lib/typedefs'

const BorderBox = ({children,additionalClasses}:Props) => {
  return (
    <div className={`p-2 bg-primary ${additionalClasses}`}  >{children}</div>
  )
}

export default BorderBox