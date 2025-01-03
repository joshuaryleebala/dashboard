import React from 'react'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <div>
      <div className='grid gap-4 p-4 grid-cols-[200px,_1fr]'>      
        <Sidebar />
        <Dashboard />
      </div>
  

    </div>
  )
}

export default App
