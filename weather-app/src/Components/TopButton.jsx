import React from 'react'
import Button from 'react-bootstrap/Button';

function TopButton({setQuery}) {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Hong kong',
    },
    {
      id: 3,
      title: 'Toronto',
    },
    {
      id: 4,
      title: 'Mumbai',
    },
    {
      id: 5,
      title: 'Sydney',
    },
    {
      id: 6,
      title: 'Cape Town',
    }

  ]

  return (
    <div className=' my-6'>

      {cities.map((city) => (

            <Button key={city.id} className='bg-transparent border-0' onClick={() => setQuery({ q: city.title })}>{city.title}</Button>
)
      )}

    </div>
  )
}

export default TopButton