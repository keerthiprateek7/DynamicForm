import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function DisplayCheckbox(props) {
   // console.log(props)
  const classes = useStyles();
  const [state, setState] =useState()
  const [name,setName]=useState([])

//   const handleChange = (event) => {
//       console.log(event.target.checked)
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

  const handleChange=(event)=>{
      //console.log(event.target.name)
      let data=name
      data.push(event.target.name)
      props.setCheckBox(data)
  }

  //console.log(name)

  

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.data.question}</FormLabel>
        <FormGroup>
          {props.data.option.map(rec=>{
            return  <FormControlLabel
            control={<Checkbox onChange={handleChange}  name={rec} />}
            label={rec}
          />
          })}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      
    </div>
  );
}