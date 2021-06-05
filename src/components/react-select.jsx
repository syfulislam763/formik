import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


const options = [
    { value: 'React JS', label: 'React Js' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'red', label: 'red' },
    { value: 'blue', label: 'blue' }
];


const ReactSelect = ({value, onChange, onBlur, error, touched}) => {

    

    const handleChange = v => {
        onChange("options", v)
    }


    const handleBlur = () => {
        onBlur("options", true)
    }
//{width:"300px", margin: "50px auto"}
    return <>
        <label htmlFor="color" style={{ display: "block" }}><strong>Skills (select at least 3) </strong></label>
        <Select 
            id="color"
            onChange={handleChange} 
            onBlur={handleBlur}
            options={options} 
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            defaultInputValue={[options[0].value]}
            value={value}
        />

        {!!error &&
          touched && (
            <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
        )}
    </>
}


export default ReactSelect;

