import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function DisplayTextfield(props) {
    console.log(props.location.data)
    const [text,setText]=useState()
    const [value, setValue] = useState();


    

    const handleText=(e)=>{
        setText(e.target.value)
    }

    const handleChange = (event) => {
        setValue(event.target.value);
      };

   

    console.log(value)
    return (
        <div>
        {props.location.data!== undefined?
            <form >
            <FormControl >
                {props.location.data.fields.map(rec=>{
                    if(rec.field==="TextField"){
                        return (<div>
                           <InputLabel htmlFor="">{rec.question}</InputLabel>
                           <Input className="CustomForm" name={rec.question} label={rec.question} value={text} onChange={handleText} />
                           <br />
                         </div>)
                    }
                    if(rec.field==="RadioButton"){
                        return (<div>
                            <FormLabel component="legend">{rec.question}</FormLabel>
                            <RadioGroup aria-label={rec.question} name={rec.question} onChange={handleChange}>
                            {rec.option.map(recs=>{
                                return <FormControlLabel value={recs} control={<Radio />} label={recs} />
                                })}
                            </RadioGroup>
                        </div>)
                                
                    }
                })}

                
                </FormControl>   
            </form>:""}
        </div>
    )
}
