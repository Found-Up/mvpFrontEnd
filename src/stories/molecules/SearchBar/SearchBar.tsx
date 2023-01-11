import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

type SearchBarProps = {
    label: string,
}

export const SearchBar = ({label}: SearchBarProps) => {
    return (
        <form>
            <TextField id='search-bar' label={label} variant='outlined' placeholder='Search' InputProps={{
                startAdornment: <InputAdornment position='start'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </InputAdornment>
            }}></TextField>
        </form>
    )
};
