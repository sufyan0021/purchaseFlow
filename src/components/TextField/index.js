import { Input } from '@mui/joy';
import React from 'react';

function TextField() {
  return (
    <div className='inputField textField'>
      <label htmlFor='textFieldInput'>Text Field</label>
     <Input placeholder="Type in here…" id="textFieldInput"/>
    </div>
  )
}

export default TextField;