import React, { PureComponent } from 'react'
import { FiUser } from 'react-icons/fi'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

  const data = [
    {
      name: 'April',
      Desktop: 4000,
      Mobile: 2400,
      amt: 2400,
    },
    {
      name: 'May',
      Desktop: 3000,
      Mobile: 1398,
      amt: 2210,
    },
    {
      name: 'June',
      Desktop: 2000,
      Mobile: 9800,
      amt: 2290,
    },
    {
      name: 'July',
      Desktop: 2780,
      Mobile: 3908,
      amt: 2000,
    },
  ];

const ActivityGraph = () => {
  return (
    <div className='col-span-8 overflow-hidden rounded border border-stone-300'>
        <div className='p-4'>
            <h3 className='flex itmes-center gap-1.5 font-medium'>
                <FiUser /> Activity
            </h3>
        </div>
        <div className='h-64 px-4'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Mobile" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Desktop" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default ActivityGraph