import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from './app.button.style';
import { Button } from '@mui/material';


const AppButton = (props) => {
    const { buttonText, buttonTheme } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div>
            <Button variant='contained'
                className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', mobileWidth && 'pl-3 pr-3', 'text-transform-none', buttonTheme == "ROUNDED" ? classes.btnStyle2 : classes.btnStyle)}>
                {buttonText}
            </Button>
        </div>
    )
}

export default AppButton