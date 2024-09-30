import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from './app.content.box.style';
import { Typography } from '@mui/material';

const   AppContentBox = (props) => {
    const { title, description, label, } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div>
            {title ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h2', tabletWidth && 'h2', mobileWidth && 'h6')} className={clsx(classes.textStyle, 'text-transform-none text-left')}>
                    {title}
                </Typography> : null
            }
            {label ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h5', tabletWidth && 'h4', mobileWidth && 'body1')} className={clsx(classes.textStyle, 'text-transform-none text-left pt-2 pb-2')}>
                    {label}
                </Typography> : null}
            {description ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', tabletWidth && 'body2', mobileWidth && 'body3')} className={clsx(classes.textStyle, 'text-transform-none text-left pt-2 pb-2')}>
                    {description}
                </Typography> : null
            }
        </div>
    )
}

export default AppContentBox