import React from 'react'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Container, Grid } from '@mui/material';

const AppBannerPanel = (props) => {
    const { maxWidth, leftSideContent, rightSideContent, classNames, backgroundColor } = props
    // const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <div>
            <Container maxWidth={maxWidth ? maxWidth : 'lg'} className={clsx(classNames, 'pt-5 pb-5')}
                sx={{ backgroundColor: backgroundColor ? backgroundColor : '', borderRadius: '8px' }}>
                <Grid container rowSpacing={2} columnSpacing={5} className={clsx(mobileWidth && 'pl-3 pr-3', 'd-flex justify-content-center align-items-start pt-3 pb-3')}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        {leftSideContent}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        {rightSideContent}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AppBannerPanel