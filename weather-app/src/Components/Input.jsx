import { Search, Compass } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import React from 'react'

function input() {
    return (
        <div className="container">
            <div className="row">
                <div className='d-flex flex-row justify-content-center my-5'>
                    <div className='d.flex item-center flex-row justify-center'>
                        <input type="text"
                            placeholder='Search your city....'
                            className='font-light' />

                        <Button className='bg-transparent outline-none'><Search size={20} /></Button>
                        <Button className='bg-transparent outline-none'><Compass size={20}></Compass></Button>
                    </div>
                    <div className='d-flex item-center flex-row justify-center'>
                        <Button name='metric' className='bg-transparent outline-none'>C</Button>
                        <p>/</p>
                        <Button name='imperial' className='bg-transparent outline-none'>F</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default input