import React from 'react'

const Plan = () => {
  return (
    <div className='flex sticky top-[calc(100vh_-48px_-_16px)]
    flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-bold'>Premium Plan</p>
                <p className='text-stone-500'>Upgrade anytime!</p>
            </div>

            <button className='px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300
            transitions-colors rounded'>
                Upgrade
            </button>
        </div>
    </div>
  )
}

export default Plan