import React from 'react'

const CopyRight = () => {
  return (
      <div className='flex justify-between col-span-2 md:col-span-4 mt-10 border-t border-gray-300 pt-5'>
            <div>
            <p>&copy; 2023 IDGen. All rights reserved.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='cursor-pointer hover:text-red-500'>Privacy Policy</span>
                <span className='cursor-pointer hover:text-red-500'>Terms of Service</span>
            </div>
        </div>
  )
}

export default CopyRight