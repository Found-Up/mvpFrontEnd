import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  styled,
} from '@mui/material';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../../atoms/Buttons/Button';
import './baseheader.css';

const CustomizedLinks = styled(Link)({
  font: 'Mulish',
  textDecoration: 'none',
  color: '#373F41',
  fontSize: 14,
  marginLeft: 20,
});

const CustomizedLogo = styled(Typography)({
  flexGrow: '1',
  cursor: 'pointer',
  font: 'Lato',
  fontSize: 24,
  color: '#3C64B1',
  marginLeft: 180,
});

const LinkContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 50,
  marginRight: 50,
})

type BaseHeaderProps = {
  links: string[]
}

export const BaseHeader = ({links}: BaseHeaderProps) => {
  return (
    <AppBar sx={{ bgcolor: 'white' }} elevation={0} position='static'>
      <CssBaseline/>
      <Toolbar>
        <CustomizedLogo variant='h4'>Logo</CustomizedLogo>
        <div className='BaseHeader-Nav'>
          <Router>
            <LinkContainer>
              <CustomizedLinks to='./'>{links[0]}</CustomizedLinks>
            </LinkContainer>
            <LinkContainer>
              <CustomizedLinks to='./'>{links[1]}</CustomizedLinks>
            </LinkContainer>
            <LinkContainer>
              <CustomizedLinks to='./'>{links[2]}</CustomizedLinks>
            </LinkContainer>
            <LinkContainer>
              <CustomizedLinks to='./'>{links[3]}</CustomizedLinks>
            </LinkContainer>
          </Router>
        </div>
        <div className='BaseHeader-LoginBtn'>
          <Button primary={true} size='medium' label='Log In'></Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}