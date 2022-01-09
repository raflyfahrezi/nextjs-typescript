import React from 'react'

import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}

export default PageWrapper
