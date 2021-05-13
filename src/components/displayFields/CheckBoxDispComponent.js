import React, { useState } from "react";
import { Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";



function FormCheckBox(props) {
  const { question, name, options, classes, control, setValue } = props;

  const [checkedValues, setCheckedValues] = useState([]);
  

  function handleSelect(checkedName) {
    //console.log("Old Values",checkedValues);
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter(name => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setCheckedValues(newNames);
    setValue(name, newNames);
    return newNames;
  }
  

  return (
    <Card variant="outlined" className={classes.root}>
      <FormControl>
        <FormLabel>{question}</FormLabel>
        <FormGroup>
          {options.map((option, index)=>(
            <FormControlLabel
              key={index}
              label={option}
              control={
                <Controller
                  name={name}
                  control={control}
                  render={({onChange}) => {
                    return (
                      <Checkbox 
                        // checked={!checkedValues.includes(option)}
                        onChange={()=>{handleSelect(option)}}
                      />
                    );
                  }}
                  />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
      
    </Card>
  );
}

  
export default FormCheckBox;