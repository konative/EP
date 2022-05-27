import React from 'react'
import FeatureCard from './FeatureCard'

function FeatureSection() {
  return (
    <div className="bg-white text-black flex flex-col py-40 gap-28 px-52">
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
    </div>
  )
}

export default FeatureSection
