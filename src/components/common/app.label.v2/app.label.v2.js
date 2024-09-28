import { Divider, Typography } from '@mui/material'
import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';

const AppLabelV2 = (props) => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const { label, value } = props
    return (
        <div>
            <div className='w-100 d-flex gap-30 pt-2 pb-2 w-100 align-items-center justify-content-between'>
                {label ?
                    <Typography
                        variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body3')}
                        color='primary'>
                        {label}
                    </Typography>
                    : null}
                {value ?
                    <Typography
                        variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body3')}
                        color='primary'>
                        {value}
                    </Typography>
                    : null}
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <Divider sx={{ width: '100%' }} />
            </div>
        </div>
    )
}

export default AppLabelV2