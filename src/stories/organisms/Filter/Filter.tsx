import React from 'react';
import { InputLabel, MenuItem, FormControl, Select, Checkbox, OutlinedInput, ListItemText, Typography, FormGroup, FormControlLabel, Switch } from '@mui/material'

type FilterProps = {
    filters: string[],
};

export const Filter = ({filters}: FilterProps) => {
    return (
        <div className='filter-container'>
            <Typography>
                Filters
            </Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>{filters[0]}</InputLabel>
                    <Select>
                        <MenuItem key='Example' value='0'>
                            <Checkbox checked={false} />
                            <ListItemText primary='Example' />
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>{filters[1]}</InputLabel>
                    <Select>
                        <MenuItem key='Example' value='0'>
                            <Checkbox checked={false} />
                            <ListItemText primary='Example' />
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>{filters[2]}</InputLabel>
                    <Select>
                        <MenuItem key='Example' value='0'>
                            <Checkbox checked={false} />
                            <ListItemText primary='Example' />
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>{filters[3]}</InputLabel>
                    <Select>
                        <MenuItem key='Example' value='0'>
                            <Checkbox checked={false} />
                            <ListItemText primary='Example' />
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel control={<Switch defaultChecked/>} label='Sort By Recommened'></FormControlLabel>
            </FormGroup>
        </div>
    );
};
