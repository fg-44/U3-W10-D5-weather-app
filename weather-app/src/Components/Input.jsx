import { Search, Compass } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import React from 'react'

function input({setQuery, units, setUnits}) {

    const {city, setCity} = useState("");

    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
        
        }

    return (
        <div className="container">
            <div className="row">
                <div  className='d-flex flex-row justify-content-center my-5'>
                    <div>

                        <div className='d.flex item-center flex-row justify-content-center'>
                            <input
                            value={city}
                            onclick={(e) => setCity(e.currentTarget.value) } 
                            
                                type="text"
                                placeholder='Search your city....'
                                className='font-light' />
                        </div>
                    </div>

                    <div className="row">
                        <div className='d-flex flex-row justify-content-center'>
                        <div>
                            <Button className='bg-transparent border-0'><Search size={20} /></Button>
                            <Button className='bg-transparent border-0'><Compass size={20}></Compass></Button>
                        </div>
                        <div className='d-flex item-center justify-content-center'>
                            <Button name='metric' className='bg-transparent border-0'>C</Button>
                            <p>|</p>
                            <Button name='imperial' className='bg-transparent border-0'>F</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default input