import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyle } from './dropdown.menu.style';
import clsx from 'clsx';

export default function DropDownMenu(props) {
    const classes = useStyle();
    const { name, imageSrc, label, data } = props;
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // redirectTo('/therapeutic-areas')
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectTo = (url) => {
        navigate(url);
    };

    return (
        <div className='position-relative'>
            <Button
                onClick={handleClick}
                variant='none'
                className={clsx(classes.btnDropDown)}
            >
                {name}
                {open ? (
                    <span className="material-icons">
                        keyboard_arrow_up
                    </span>
                ) : (
                    <span className="material-icons">
                        keyboard_arrow_down
                    </span>
                )}
            </Button>
            <Menu
                elevation={1}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {label ? (
                    <Typography className='d-flex justify-content-start align-items-center pl-3 pt-2 pb-2'>
                        {imageSrc ? (
                            <ListItemIcon>
                                <img src={imageSrc} width='35px' alt='menu-items' />
                            </ListItemIcon>
                        ) : null}
                        {label}
                    </Typography>
                ) : null}
                {data && data.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => redirectTo(item?.path)}
                    // sx={{
                    //     // Menu background color and border
                    //     // backgroundColor: '#fff',
                    //     borderLeft: '1px solid #ACACAC',
                    //     borderRight: '1px solid #ACACAC',
                    // }}
                    >
                        <ListItemText>
                            <Typography
                                sx={{
                                    // Normal text style
                                    color: 'primary.main',
                                    '&:hover': {
                                        // Text becomes bold on hover
                                        fontWeight: '600',
                                    },
                                }}
                                variant='body3'>
                                {item?.name}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                ))}
                {/* {data && data.length > 2 ? <Divider /> : null} */}
            </Menu>
        </div>
    );
}
