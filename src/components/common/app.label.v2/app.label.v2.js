import { Divider, Typography } from '@mui/material'
import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';

const AppLabelV2 = (props) => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const { label, width, height, iconSrc, divider } = props
    return (
        <div>
            {divider ?
                <div className='w-100 d-flex justify-content-center align-items-center'>
                    <Divider sx={{ width: '100%', backgroundColor: '#000', height: '1px' }} />
                </div> : null
            }
            <div className='w-100 d-flex gap-30 pt-3 pb-3 w-100 align-items-center justify-content-between font-weight-bold'>
                {label ?
                    <Typography
                        variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body3')}
                        color='primary'>
                        {label}
                    </Typography>
                    : null}
                {iconSrc ?
                    <img src={iconSrc} alt='Social-icon' width={width ? width : '14.44px'} height={height ? height : '14.44px'} />
                    : null
                }
            </div>
        </div>
    )
}

export default AppLabelV2