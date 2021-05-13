import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function DisplayRadio(props) {
    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">{props.data.question}</FormLabel>
        <RadioGroup aria-label={props.data.question} name={props.data.question} >
          {props.data.option.map(rec=>{
            return <FormControlLabel value={rec} control={<Radio />} label={rec} />
          })}
          
        </RadioGroup>
      </FormControl>
    )
}
