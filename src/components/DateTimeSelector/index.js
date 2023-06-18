import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function DateTimeSelector() {
  return (
    <div className='inputField dateTimeSelector'>
     <label htmlFor="dateTime">Date Time Selector</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker className="dateTime" slotProps={{ textField: { size: 'small' } }}/>
      </LocalizationProvider>
    </div>
  )
}

export default DateTimeSelector