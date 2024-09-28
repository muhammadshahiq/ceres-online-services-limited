import React from 'react';
import { Container, Paper } from '@mui/material';
import { useStyle } from './home.page.panel.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import ReactImageGallery from '../react-image-gallery/react-image-gallery';

const HomepagePanel = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <Paper elevation={0}>
            <div className={clsx('w-100 h-100 overflow-hidden')}>
                <div className='w-100 pl-0 pr-0'>
                    <div className='w-100'>
                        <ReactImageGallery />
                    </div>
                </div>
            </div>
        </Paper >
    )
}

export default HomepagePanel