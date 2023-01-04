import React from 'react';
import './filter.css';
import { InputLabel, MenuItem, FormControl, Select, Checkbox, ListItemText, Typography, FormControlLabel, Switch } from '@mui/material'

type FilterProps = {
    name: string,
    filters: string[],
    sortBy: boolean,
};

export const Filter = ({name, filters, sortBy}: FilterProps) => {
    let sortByOption;
    if (sortBy) {
        sortByOption = <FormControlLabel control={<Switch defaultChecked/>} label='Sort By Recommened'></FormControlLabel>;
    } else {
        sortByOption = null;
    }

    const filterList = filters.map((filterName) => 
        <FormControl sx={{ width: 159}} variant='standard' >
            <InputLabel>{filterName}</InputLabel>
            <Select disableUnderline={true} >
                <MenuItem key='Example' value='0'>
                    <Checkbox checked={false} />
                    <ListItemText primary='Example' />
                </MenuItem>
            </Select>
        </FormControl>
    );

    return (
        <div className='filter-container'>
            <Typography>
                {name}
            </Typography>
            <>
                {filterList}
            </>
            {sortByOption}
        </div>
    );
};
