import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateSelector() {
  return (
    <div className='inputField dateSelector'>
      <label htmlFor="date">Date Selector</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="date"/>
      </LocalizationProvider>
    </div>
  )
}

export default DateSelector