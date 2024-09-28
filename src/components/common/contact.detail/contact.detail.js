import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Typography } from '@mui/material';
import { useStyle } from './contact.detail.style';

const ContactDetail = (props) => {
    const { name, email, mobileNo } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <div>
            <div className='w-100 text-center'>
                {name ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body2')} className={clsx('pt-1 pb-1 font-weight-bold')}>
                        {name}
                    </Typography> : null
                }
                {email ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body3')} className={clsx(classes.textStyle, 'pt-1 pb-1')}>
                        {email}
                    </Typography> : null
                }
                {mobileNo ?
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body2', (mobileWidth || tabletWidth) && 'body3')} className={clsx(classes.textStyle, 'pt-1 pb-1')}>
                        {mobileNo}
                    </Typography> : null
                }
                <Typography color='primary' variant={clsx(!(mobileWidth || tabletWidth) && 'body3', (mobileWidth || tabletWidth) && 'body3')} className={clsx(classes.textStyle, 'pt-1 pb-1 font-weight-bold')}>
                    <a href='' className='text-dark'>
                        View All My Tours
                    </a>
                </Typography>
            </div>
        </div>
    )
}

export default ContactDetail