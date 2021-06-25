import { useForm } from "react-hook-form";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import FormInput from "../displayFields/TextFieldDispComponent";
import FormCheckbox from "../displayFields/CheckBoxDispComponent";
import FormRadio from "../displayFields/RadioDispComponent";

import savedForms from "../displayFields/savedSamples";

const FormField = (props) => {
    //console.log(props)
    
    const {fieldType, question, options, classes, control, setValue} = props;
    //console.log(setValue)
    switch(fieldType){
        case "TextField":
            return(
                <FormInput question={question} name={question} classes={classes} control={control}/>
            );
        case "CheckBox":
            return (
                <FormCheckbox question={question} name={question} options={options} classes={classes} control={control} setValue={setValue}/>
            );
        case "RadioButton":
            return (
                <FormRadio question={question} name={question} options={options} classes={classes} control={control}/>
            );
        default:
            return (
                <FormInput question={question} name={question}  classes={classes} control={control}/>  
            );
    }
};


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    display: {
        '& > *': {
          margin: theme.spacing(2),
        },
      },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));

function FormDisplay(props){
    console.log(props)
    const classes= useStyles();
    const { control, handleSubmit, setValue } = useForm();
    
    const onSubmit = (data) => {
        const finalForm={
            data:data,
            title:props.location.data.title
        }
        console.log(finalForm)
        
    };
    
    return (
        <div>
            
            <Container>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.display}>
                                <Typography variant="h6" className={classes.title}>
                                    {props.location.data.title}
                                </Typography>
                            </Grid>
                            <Divider/>
                            {props.location.data.fields.map((field)=>(
                                <Grid  item xs={11}>
                                    <FormField 
                                        fieldType={field.field} 
                                        question={field.question} 
                                        options={field.option}
                                        classes={classes}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >SUBMIT
                </Button>
            </Container>
        </div>
    );
}

export default FormDisplay;
