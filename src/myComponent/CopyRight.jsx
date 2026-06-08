import React from 'react'

const CopyRight = () => {
  return (
      <div className='flex justify-between col-span-2 md:col-span-4 mt-5 border-t border-gray-300 pt-2'>
            <div>
            <p>&copy; 2026 IDGen. All rights reserved.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <a href='#' className='cursor-pointer hover:text-red-500'>Privacy Policy</a>
                <a href='#' className='cursor-pointer hover:text-red-500'>Terms of Service</a>
            </div>
        </div>
  )
}

export default CopyRight;