import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from "@material-ui/core/Checkbox";
import useSetting from './useSetting'


export default function FormDisplay(props) {
    
    const [text,setText]=useState()
    const [value, setValue] = useState();
    const [checkBox,setCheckBox]=useState(props.location.data.fields.map(rec=>{
        let data=[]
        if(rec.field==="CheckBox"){
            rec.option.map(recs=>{
                data.push({false:recs})
                return [data]
            })
        }
        
    }))
    const final=useSetting(props)
    //console.log(final)


    
    const data=[]
    const handleText=(e)=>{
        setText(e.target.value)
    }

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const handleCheckbox = (event) => {
        //setCheckBox({ [event.target.name]: event.target.checked });
        data.push({ [event.target.name]: event.target.checked })
        //console.log(data)
        setCheckBox(...data)
      };

    console.log(checkBox)
    //console.log(text)
    //console.log(value)
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
                    if(rec.field === "CheckBox"){
                        return (<div>
                            <FormControlLabel control={<Checkbox name="checkedC" onChange={handleCheckbox} />}
                            label="Uncontrolled" />
                            <FormControlLabel control={<Checkbox name="checkedB" onChange={handleCheckbox} />}
                            label="Uncontrolled" />
                        </div>)
                    }
                })}

                
                </FormControl>   
            </form>:""}
        </div>
    )
}
