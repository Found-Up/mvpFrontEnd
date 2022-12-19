import React from 'react';
import './filter.css';
import { InputLabel, MenuItem, FormControl, Select, Checkbox, ListItemText, Typography, FormControlLabel, Switch } from '@mui/material'

type FilterProps = {
    filters: string[],
};

export const Filter = ({filters}: FilterProps) => {
    return (
        <div className='filter-container'>
            <Typography>
                Filters
            </Typography>
            <FormControl sx={{ width: 159}} variant='standard' >
                <InputLabel>{filters[0]}</InputLabel>
                <Select disableUnderline={true} >
                    <MenuItem key='Example' value='0'>
                        <Checkbox checked={false} />
                        <ListItemText primary='Example' />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: 159}} variant='standard' >
                <InputLabel>{filters[1]}</InputLabel>
                <Select disableUnderline={true} >
                    <MenuItem key='Example' value='0'>
                        <Checkbox checked={false} />
                        <ListItemText primary='Example' />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: 159}} variant='standard' >
                <InputLabel>{filters[2]}</InputLabel>
                <Select disableUnderline={true} >
                    <MenuItem key='Example' value='0'>
                        <Checkbox checked={false} />
                        <ListItemText primary='Example' />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: 159}} variant='standard' >
                <InputLabel>{filters[3]}</InputLabel>
                <Select disableUnderline={true} >
                    <MenuItem key='Example' value='0'>
                        <Checkbox checked={false} />
                        <ListItemText primary='Example' />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel control={<Switch defaultChecked/>} label='Sort By Recommened'></FormControlLabel>
        </div>
    );
};
