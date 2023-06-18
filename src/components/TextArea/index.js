import { Textarea } from '@mui/joy';
import React from 'react';

function TextArea() {
  return (
    <div className='inputField textArea'>
      <label htmlFor='textAreaInput'>Text Area</label>
     <Textarea minRows={2} size="sm" placeholder="Type anything…" id='textAreaInput'/>
    </div>
  )
}

export default TextArea