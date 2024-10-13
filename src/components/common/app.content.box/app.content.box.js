import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from './app.content.box.style';
import { Typography } from '@mui/material';

const AppContentBox = (props) => {
    const { title, description, label, description2, textAlign, variantDescription } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(textAlign ? 'w-100 d-flex flex-column align-items-center justify-content-center ' : '')}>
            {title ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h2', tabletWidth && 'h2', mobileWidth && 'h6')} className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'}`)}>
                    {title}
                </Typography> : null
            }
            {label ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h5', tabletWidth && 'h4', mobileWidth && 'body1')} className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'} pt-3 pb-3`)}>
                    {label}
                </Typography> : null}
            {description ?
                <Typography variant={clsx((!(mobileWidth || tabletWidth) && variantDescription) && variantDescription, (!(mobileWidth || tabletWidth) && !variantDescription) && 'body1', tabletWidth && 'body2', mobileWidth && 'body3')} className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'} pt-3 pb-3`)}>
                    {description}
                </Typography> : null
            }
            {description2 ?
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', tabletWidth && 'body2', mobileWidth && 'body3')} className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'} pt-3 pb-3`)}>
                    {description2}
                </Typography> : null
            }
        </div>
    )
}

export default AppContentBox