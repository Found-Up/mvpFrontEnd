import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    styled,
    IconButton,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link, Outlet } from 'react-router-dom';

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
});

const CustomizedDiv = styled('div')({
    marginLeft: 10,
    display: 'flex',
});

const LinkContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 27,
    marginRight: 27,
})

type NCUHeaderProps = {
    links: string[],
}

export const NCUHeader = ({links}: NCUHeaderProps) => {
    return (
        <>
            <AppBar sx={{ bgcolor: 'white' }} elevation={0} position='static'>
                <CssBaseline />
                <Toolbar>
                    <CustomizedLogo variant='h4'>
                        <Link to='/NCU/Home'>Logo</Link>
                    </CustomizedLogo>
                    
                    <CustomizedDiv>
                            <LinkContainer>
                                <HomeOutlinedIcon sx={{ color: '#373F41' }} />
                                <CustomizedLinks to='/NCU/Home'>{links[0]}</CustomizedLinks>
                            </LinkContainer>
                            <LinkContainer>
                                <EmailOutlinedIcon sx={{ color: '#373F41' }} />
                                <CustomizedLinks to='/NCU/Messages'>{links[1]}</CustomizedLinks>
                            </LinkContainer>
                            <LinkContainer>
                                <AccountCircleOutlinedIcon sx={{ color: '#373F41' }} />
                                <CustomizedLinks to='/NCU/Profile'>{links[2]}</CustomizedLinks>
                            </LinkContainer>
                            <LinkContainer>
                                <NotificationsNoneOutlinedIcon sx={{ color: '#373F41' }} />
                                <CustomizedLinks to='/'>{links[3]}</CustomizedLinks>
                            </LinkContainer>
                            <IconButton>
                                <MenuOutlinedIcon sx={{ color: '#373F41' }} />
                            </IconButton>
                    </CustomizedDiv>

                    
                </Toolbar>
            </AppBar>
            <div>
                <Outlet />
            </div>
        </>
    )
};
