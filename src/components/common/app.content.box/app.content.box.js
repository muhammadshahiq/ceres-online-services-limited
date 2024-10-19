import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from './app.content.box.style';
import { Typography } from '@mui/material';

const AppContentBox = (props) => {
    const { title, description, label, description2, textAlign, variantDescription, variantTitleDesktop, variantTitleMobile, variantLabelDesktop, variantLabelMobile, descriptionWidth } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(textAlign ? 'w-100 d-flex flex-column align-items-center justify-content-center ' : '')}>
            {title ?
                <Typography
                    // sx={{ fontSize: (!(mobileWidth || tabletWidth) && titleSize) && `${titleSize}px` }}
                    variant={clsx((!(mobileWidth || tabletWidth) && !variantTitleDesktop) && 'h2', (!(mobileWidth || tabletWidth) && variantTitleDesktop) && variantTitleDesktop, tabletWidth && 'h2', (mobileWidth && !variantTitleMobile) && 'h6', (mobileWidth && variantTitleMobile) && variantTitleMobile)}
                    className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'},pb-2`)}>
                    {title}
                </Typography> : null
            }
            {label ?
                <Typography
                    // sx={{ fontSize: (!(mobileWidth || tabletWidth) && labelSize) && `${labelSize}px` }}
                    variant={clsx((!(mobileWidth || tabletWidth) && !variantLabelDesktop) && 'h5', (!(mobileWidth || tabletWidth) && variantLabelDesktop) && variantLabelDesktop, tabletWidth && 'h4', mobileWidth && 'body1')}
                    className={clsx(classes.textStyle, `text-transform-none ${textAlign ? 'text-center' : 'text-left'} pt-2 pb-2`)}>
                    {label}
                </Typography> : null}
            {description ?
                <Typography variant={clsx((!(mobileWidth || tabletWidth) && variantDescription) && variantDescription, (!(mobileWidth || tabletWidth) && !variantDescription) && 'body1', tabletWidth && 'body2', mobileWidth && 'body3')} className={clsx(classes.textStyle, `text-transform-none ${(!(mobileWidth || tabletWidth) && descriptionWidth) && descriptionWidth} ${textAlign ? 'text-center' : 'text-left'} pt-2 pb-2`)}>
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