import React, { useState } from 'react'
import Slider from 'rc-slider'
import { Dropdown } from 'react-bootstrap'

const Circling = () => {
  const [circling, setCircling] = useState(50)

  const handleCircling = (e) => {
    setCircling(e)
  }
  return (
    <Dropdown autoClose='outside'>
      <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
        Umkreis
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='p-3 text-center'>
          <Slider
            allowCross={false}
            style={{ minWidth: '15rem' }}
            min={0}
            max={500}
            step={50}
            defaultValue={circling}
            onChange={handleCircling}
          />
          <div className='mt-2'>
            <b>{`bis zu ${circling}km`}</b>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Circling
