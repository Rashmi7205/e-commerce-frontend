import React from 'react'

function ServiceCard({data}) {
  return (
    <div className='service-cards text-black'>
    <img src={data?.image} alt="image" />
    <div className="service-title">{data?.title}</div>
    <div className='service-desc'>{data?.desc}</div>
    </div>
  )
}

export default ServiceCard