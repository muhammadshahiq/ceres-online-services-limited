import React from 'react'
import { useStyle } from './app.label.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Typography } from '@mui/material';

const AppLabel = (props) => {
    const { label, iconSrc, description, width, height } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <div className='w-100 d-flex justify-content-start align-items-start pt-1 pb-1'>
            <div>
                {iconSrc ?
                    <img src={iconSrc} alt='Social-icon' width={width ? width : '64px'} height={height ? height : '64px'} />
                    : null
                }
            </div>
            <div className='pl-3'>
                {label ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h6', (mobileWidth || tabletWidth) && 'h6')} className={clsx(classes.textStyle)}>
                        {label}
                    </Typography> : null
                }
                {description ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body2')} className={clsx(classes.textStyle)}>
                        {description}
                    </Typography> : null
                }
            </div>
        </div>
    )
}

export default AppLabel