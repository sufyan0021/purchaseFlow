import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import DateSelector from '../../components/DateSelector';
import DateTimeSelector from '../../components/DateTimeSelector';

export const getElement = (type) => {
    console.log("The getElement type", type);
    if(type === 'text'){
        return <TextField type='text'/>
    } else  if(type === 'textArea'){
        return <TextArea />
    }else  if(type === 'number'){
        return <TextField type='number'/>
    }else  if(type === 'date'){
        return <DateSelector type='date'/>
    }else  if(type === 'dateTime'){
        return <DateTimeSelector type='datetime-local'/>
    }else  if(type === 'email'){
        return <DateTimeSelector type='email'/>
    }else  if(type === 'fileAttach'){
        return <DateTimeSelector type='file'/>
    }else  if(type === 'comboSelector'){
        return <DateTimeSelector type='select'/>
    }
}