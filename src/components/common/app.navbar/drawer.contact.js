import React, { useEffect, useRef } from "react";
import { useStyle } from "./app.navbar.style";
import { IconButton, Drawer } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactUs from '../contact.us/contact.us'

const AppContactDrawer = (props) => {
    const { ShowWhiteColorIcon, isContactDrawerOpen } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }

    return (
        <div>
            <Drawer
                id='sidebar'
                anchor='right'
                open={isContactDrawerOpen}
                onClose={props.hideContactDrawer}
                className={(classes.contactDrawer)}
                classes={{
                    paper: mobileWidth ? classes.contactDrawerPaper : classes.contactDrawerOnTablet,
                }}
            >
                <div className="position-relative overflow-hidden">
                    <div className="position-absolute w-100">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/contact-form-wave.png`}
                            width='100%'
                            height='100%'
                            alt='wave-icon'
                        />
                    </div>
                    {isContactDrawerOpen ?
                        <div className="pl-4 pt-2 w-100 d-flex justify-content-start align-items-center">
                            <IconButton size="medium" onClick={props.hideContactDrawer} className='cursor-pointer'>
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
                    <ContactUs />
                </div>
            </Drawer>
        </div>
    )
}

export default AppContactDrawer