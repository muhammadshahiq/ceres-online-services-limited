import React from 'react'
import clsx from 'clsx'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useStyle } from './footer.style'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    const redirect = (url) => {
        props.push(url);
    }
    return (
        <Paper elevation={0} className={clsx(classes.footer, 'm-auto', !mobileWidth && 'pt-4', mobileWidth && 'pt-3')}>
            <Container maxWidth='xl' className='pl-0 pr-0'>
                <div className={clsx(classes.footerStyle2, 'd-flex justify-content-between align-items-center pt-2 pb-2')}>
                    <Grid container rowSpacing={1} columnSpacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={4} className='pt-3 pb-3'>
                            <img
                                height='30px'
                                width='100%'
                                src={`${process.env.PUBLIC_URL}/assets/images/logo-Ceres Online Services Limited.svg`}
                            ></img>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Typography className='pt-4 pb-4 text-white cursor-pointer' variant={clsx(!(mobileWidth || tabletWidth) && 'body2', tabletWidth && 'body2', mobileWidth && 'caption')}>
                                Copyright © Ceres Online Services Limited LLC, 2024
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Grid container className='d-flex justify-content-center align-items-center pt-3 pb-3'>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className={clsx(classes.gridStyle, 'd-flex')}>
                                        <div className={clsx('w-100 d-flex justify-content-center gap-20')}>
                                            <div className={clsx(classes.iconStyling, "cursor-pointer")}>
                                                <a>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={`${process.env.PUBLIC_URL}/assets/images/envelope-icon.svg`}
                                                        height='28px'
                                                        width='28px'
                                                        alt="env-icon"
                                                    />
                                                </a>
                                            </div>
                                            <div className={clsx(classes.iconStyling, "cursor-pointer")}>
                                                <a>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={`${process.env.PUBLIC_URL}/assets/images/facebook-icon.svg`}
                                                        height='28px'
                                                        alt="fb-icon"
                                                        width='28px'
                                                    />
                                                </a>
                                            </div>
                                            <div className={clsx(classes.iconStyling, "cursor-pointer")}>
                                                <a>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={`${process.env.PUBLIC_URL}/assets/images/twitter-icon.svg`}
                                                        height='28px'
                                                        alt="twitter-icon"
                                                        width='28px'
                                                    />
                                                </a>
                                            </div>
                                            <div className={clsx(classes.iconStyling, "cursor-pointer")}>
                                                <a>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        src={`${process.env.PUBLIC_URL}/assets/images/plus-icon.svg`}
                                                        height='28px'
                                                        alt="add-icon"
                                                        width='28px'
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Paper>
    )
}

export default Footer