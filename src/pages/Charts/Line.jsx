import React from 'react'
import ChartsHeader from '../../components/ChartsHeader'
import LineCharts from '../../components/charts/LineCharts'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className='w-full'>
        <LineCharts/>
      </div>
    </div>
  )
}

export default Line