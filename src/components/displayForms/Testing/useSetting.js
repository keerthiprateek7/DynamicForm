import React, { useEffect,useState } from 'react'

export default function useSetting(props) {
    const [settingdata,setSettingData]=useState([])
    const data=[]
    useEffect(()=>{
        if(props.location.data !== undefined){
        {props.location.data.fields.map(rec=>{
            if(rec.field==="CheckBox"){
                rec.option.map(recs=>{
                    //console.log(recs)
                    data.push({[false]:recs})
                })
            }
        })
        setSettingData(data)
     }
    }
    },[])
    return {settingdata}
}
