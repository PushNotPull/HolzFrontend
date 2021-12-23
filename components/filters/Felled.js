import React, { useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap'

const Felled = () => {
  const [switchLabel, setSwitchLabel] = useState('Baum nicht gefällt')
  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      setSwitchLabel('Baum bereits gefällt')
    } else {
      setSwitchLabel('Baum nicht gefällt')
    }
  }
  return (
    <Dropdown autoClose='outside'>
      <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
        Fällstatus
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='p-3 text-center'>
          <Form>
            <Form.Check
              style={{ minWidth: '15rem' }}
              type='switch'
              id='felledSwitch'
              label={switchLabel}
              onChange={handleSwitchChange}
            />
          </Form>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Felled
