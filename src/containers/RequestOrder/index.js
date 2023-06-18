import React, { useState } from 'react'
import FormLayoutInputs from '../../components/FormLayoutInputs';
import PrimaryButton from '../../components/PrimaryButton'
import { getElement } from './utils';
import './styles.scss';

function RequestOrder() {
    const [formInputs, setFormInputs] = useState([]);

  const handleDrag = (e, inputMetaData) => {
    console.log("The drag started", e, inputMetaData);
    e.dataTransfer.setData('formField', JSON.stringify(inputMetaData));
  }
  
  const handleDrop = (e) => {
    console.log("The drop started", e.dataTransfer.getData('formField'));
    const inputMetaData = JSON.parse(e.dataTransfer.getData('formField'));
    const inputField = inputMetaData;
    e.dataTransfer.clearData();
    setFormInputs([...formInputs, inputField]);
  }

  const handleDropOver = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    console.log("The drop over");
  }

  return (<>
  <div className='purchaseOrderContainer'>
    <FormLayoutInputs handleDrag={handleDrag}/>
    <div className='formInputReceiver' onDragOver={handleDropOver} onDrop={handleDrop}>
        <div className='inputColumnOdd'>
          {formInputs?.map((inputField,index)=>{
                if(index % 2 === 0){
                    return getElement(inputField.type);
                }
            return null;
            })}
        {!!formInputs.length && 
        <div className='actionContainer'>
            <span>Manager Approval</span>
            <div className='actionButtonGroup'>
                <PrimaryButton text="Yes"/>
                <PrimaryButton text="No"/>
            </div>
    </div>}
        </div>
        <div className='inputColumnEven'>
          {formInputs?.map((inputField,index)=>{
                if(index % 2 !== 0){
                    return getElement(inputField.type);
                }
            return null;
            })}
        </div>
    </div>
   </div>
  </>
  )
}

export default RequestOrder;