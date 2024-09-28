import React from 'react'
import { useStyle } from './app.label.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Divider, Typography } from '@mui/material';

const AppLabel = (props) => {
    const { label, hidePadding } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <div className={clsx(!hidePadding && 'mt-2 mb-2 pt-2 pb-2', 'w-100')}>
            <Divider sx={{ width: '50%', backgroundColor: '#000' }} className='' />
            <div className='w-100 d-flex justify-content-center align-items-center'>
                {label ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h4', (mobileWidth || tabletWidth) && 'h6')} className={clsx(classes.textStyle, 'pt-2 pb-2')}>
                        {label}
                    </Typography> : null
                }
            </div>
            <div className='w-100 d-flex justify-content-end align-items-center'>
                <Divider sx={{ width: '50%', backgroundColor: '#000' }} className='pb-1' />
            </div>
        </div>
    )
}

export default AppLabel