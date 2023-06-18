import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextFormatIcon from '@mui/icons-material/TextFormat';
import NotesIcon from '@mui/icons-material/Notes';
import NumbersIcon from '@mui/icons-material/Numbers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import './styles.scss';
import { COMBO_BOX_SELECTOR, DATE_SELECTOR, DATE_TIME_SELECTOR, EMAIL_FIELD, FILE_ATTACHMENT_SELECTOR, INPUT_FIELD, INPUT_NUMBER, TEXT_AREA } from './constants';

function FormLayoutInputs({handleDrag}) {
    const handleInputMetaData = (e) => {
        const inputId = e.currentTarget.id;
        if(inputId === 'fText'){
            handleDrag(e, INPUT_FIELD)
        } else if(inputId === 'fTextArea'){
            handleDrag(e, TEXT_AREA)
        } else if(inputId === 'fNumber'){
            handleDrag(e, INPUT_NUMBER)
        } else if(inputId === 'fDate'){
            return  handleDrag(e, DATE_SELECTOR)
        } else if(inputId === 'fDateTime'){
            return  handleDrag(e, DATE_TIME_SELECTOR)
        }else if(inputId === 'fEmail'){
            return  handleDrag(e, EMAIL_FIELD)
        }else if(inputId === 'fAttachment'){
            return  handleDrag(e, FILE_ATTACHMENT_SELECTOR)
        }else if(inputId === 'fDropDown'){
            return  handleDrag(e, COMBO_BOX_SELECTOR)
        }
    }
  return (
    <div className='formBuiderContainer'>
        <div className='formBuider leftPanel'>
            <div id="fText" draggable className='card' onDragStart={handleInputMetaData}>
                <TextFormatIcon />
            </div>
            <div id="fNumber" draggable className='card' onDragStart={handleInputMetaData}>
                <NumbersIcon />
            </div>
            <div id="fDateTime"draggable className='card' onDragStart={handleInputMetaData}>
                <WorkHistoryIcon />
            </div>
            <div id="fAttachment" draggable className='card' onDragStart={handleInputMetaData}>
                <AttachmentIcon />
            </div>
        </div>
        <div className='formBuider rightPanel'>
            <div id="fTextArea" draggable className='card' onDragStart={handleInputMetaData}>
                <NotesIcon />
            </div>
            <div id="fDate" draggable className='card' onDragStart={handleInputMetaData}>
                <CalendarTodayIcon />
            </div>
            <div id="fEmail" draggable className='card' onDragStart={handleInputMetaData}>
                <EmailIcon />
            </div>
            <div id="fDropDown" draggable className='card' onDragStart={handleInputMetaData}>
                <ArrowDropDownCircleIcon />
            </div>
        </div>
    </div>
  )
}

export default FormLayoutInputs