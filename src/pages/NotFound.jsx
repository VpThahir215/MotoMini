import React from 'react'

function NotFound() {
  return (
    <div className='pt-10 min-h-screen flex flex-col items-center bg-black text-olive-50 '>
     <h1 className='text-4xl font-bold' >404 - Page Not Found</h1>
      <p className='text-base p-5'>The page you are looking for doesn't exist.</p>
    </div>
  )
}

export default NotFound
