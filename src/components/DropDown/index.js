import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectBasic() {
  return (
    <div className='inputField dropDown'>
      <label htmlFor='dropdownInput'>DropDown Input</label>
        <Select defaultValue="dog" id="dropdownInput">
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
        </Select>
    </div>
  );
}
