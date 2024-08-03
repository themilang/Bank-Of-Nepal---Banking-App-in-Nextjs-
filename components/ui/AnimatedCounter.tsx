'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import CountUp from 'react-countup'
ChartJS. register(ArcElement, Tooltip, Legend);

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
   <div>
    Rs &nbsp;<CountUp end={amount}
    duration={0.75}
    decimals={2} />
   </div>
  )
}

export default AnimatedCounter