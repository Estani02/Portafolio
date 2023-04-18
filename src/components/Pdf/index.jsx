import React from 'react'

export const Pdf = () => {
  return (
    <div className='absolute w-full h-full'>
        <object data={require('../../docs/cv.pdf')} type="application/pdf" width='100%' height='100%'>
            
        </object>

    </div>
  )
}
