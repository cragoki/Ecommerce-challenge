import React from 'react'
import Products from '../../json/Products'
import Checkbox from './Checkbox'
import Select from './Select'

function Control(prop){
    let type = prop.details.filterType
    let typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    let listComponents = [];
    let filterOptions = [];
    let outputArray = [];

    for(let key in Products){
        filterOptions.push({
            name: Products[key][type],
            label:typeLabel
        });
    }
    console.log(filterOptions);
    const uniqueSet = new Set(filterOptions);
    outputArray = [...uniqueSet]

    if(prop.details.controlType === 'select')
    {
        listComponents = outputArray.map(item => <Select name={item.name} label={item.typeLabel}/>)
        return (
                <select>
                    {listComponents}
                </select>
                ) 
    }
    else
    {
        listComponents = outputArray.map(item => <Checkbox name={item.name} label={item.typeLabel}/>)
        return (
                {listComponents}
                ) 
    }
}

export default Control