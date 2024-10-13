import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from './app.button.style';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';


const AppButton = (props) => {
    const { buttonText, buttonTheme, redirect, scrollID } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    let navigate = useNavigate();

    const redirectTo = (url) => {
        navigate(url);
    };
    return (
        <div>
            {!scrollID ?
                <Button variant='contained'
                    onClick={redirect ? () => redirectTo(redirect) : props.onClick}
                    className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', mobileWidth && 'pl-3 pr-3', 'text-transform-none', buttonTheme == "ROUNDED" ? classes.btnStyle2 : classes.btnStyle)}>
                    {buttonText}
                </Button> :
                <Button variant='contained'
                    onClick={redirect ? () => redirectTo(redirect) : props.onClick}
                    className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', mobileWidth && 'pl-3 pr-3', 'text-transform-none', buttonTheme == "ROUNDED" ? classes.btnStyle2 : classes.btnStyle)}>
                    <Link to={scrollID} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                        {buttonText}
                    </Link>
                </Button>}
        </div>
    )
}

export default AppButton