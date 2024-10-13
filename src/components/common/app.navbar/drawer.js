import React, { useEffect, useRef } from "react";
import { useStyle } from "./app.navbar.style";
import { AppBar, Toolbar, Container, Button, IconButton, Typography, Drawer } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { Link } from 'react-scroll';
import DropDownMenu from "../dropdown.menu/dropdown.menu";

const AppDrawer = (props) => {
    const { ShowWhiteColorIcon, dropdownData } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }
    const [state, setState] = useState({
        isDrawerOpen: false
    })

    const showDrawer = () => {
        setState({ ...state, isDrawerOpen: true });
    };

    const hideDrawer = () => {
        setState({ ...state, isDrawerOpen: false });
    };
    return (
        <div>
            {state.isDrawerOpen ?
                <IconButton size="medium" onClick={hideDrawer} className='cursor-pointer'>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/close-icon.svg`}
                        width='32px'
                        height='32px'
                        alt='close-icon'
                    />
                </IconButton>
                : ShowWhiteColorIcon ?
                    <IconButton size="medium" onClick={showDrawer} >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/navbar-menu-icon-white.svg`}
                            width='32px'
                            height='32px'
                            alt='menu'
                        />
                    </IconButton>
                    :
                    <IconButton size="medium" onClick={showDrawer} >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/navbar-menu-icon.svg`}
                            width='32px'
                            height='32px'
                            alt='menu'
                        />
                    </IconButton>
            }
            <Drawer
                id='sidebar'
                anchor='right'
                open={state.isDrawerOpen}
                onClose={hideDrawer}
                className={(classes.drawer)}
                classes={{
                    paper: mobileWidth ? classes.drawerPaper : classes.drawerOnTablet,
                }}
            >
                <Box
                    role="presentation"
                    className={clsx(tabletWidth ? classes.contentOnTablet : mobileWidth ? classes.contentOnMobile : classes.contentOnTablet)}
                >
                    {state.isDrawerOpen ?
                        <div className="w-100 d-flex justify-content-end align-items-center">
                            <IconButton size="medium" onClick={hideDrawer} className='cursor-pointer'>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/close-icon.svg`}
                                    width='32px'
                                    height='32px'
                                    alt='close-icon'
                                />
                            </IconButton>
                        </div>
                        : null
                    }
                    <div className="w-100 d-flex flex-column justify-content-center align-items-end mt-2 mb-2">
                        <Link to="Home" spy={true} smooth={true} offset={50} duration={500} delay={500}>
                            <Button onClick={() => redirect('/')} variant="none" className={clsx(classes.textStyle, "text-transform-none font-weight-normal mt-1 mb-1")}>
                                Home
                            </Button>
                        </Link>
                        <Link to="About us" spy={true} smooth={true} offset={50} duration={500} delay={500}>
                            <Button onClick={() => redirect('/about')} variant="none" className={clsx(classes.textStyle, "text-transform-none font-weight-normal mt-1 mb-1")}>
                                About us
                            </Button>
                        </Link>
                        <Link to="Services" onClick={() => redirect('/services')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                            <Button variant="none" className={clsx(classes.textStyle, "text-transform-none font-weight-normal mt-1 mb-1")}>
                                Services
                            </Button>
                        </Link>
                        <div to='gene-theraphy'>
                            {dropdownData && dropdownData.map((data, index) => {
                                return <div key={index}>
                                    <DropDownMenu
                                        path={data.path}
                                        name={data.name}
                                        label={data.items && data.items.label}
                                        imageSrc={data.items && data.items.imageSrc}
                                        data={data.items && data.items.child}
                                    />
                                </div>
                            })}
                        </div>
                        <Link to="blogs" onClick={() => redirect('/blogs')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                            <Button variant="none" className={clsx(classes.textStyle, "text-transform-none font-weight-normal mt-1 mb-1")}>
                                Blog
                            </Button>
                        </Link>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default AppDrawer