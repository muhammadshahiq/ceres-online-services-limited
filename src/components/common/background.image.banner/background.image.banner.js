import './background.image.banner.scss';
import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { useStyle } from './background.image.banner.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import Partners from '../partners';
import AppContentBox from '../app.content.box/app.content.box';
import AppButton from '../app.button/app.button';

const BackgroundImageBanner = (props) => {
    const { image, title, description, footer, label, buttonText, tickerImages } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <Paper id='background-image-banner' elevation={0}
            className={(clsx(!(mobileWidth || tabletWidth) && classes.header, tabletWidth && classes.headerOnTablet, mobileWidth && classes.responsiveHeader, 'position-relative w-100'))}>
            <Container maxWidth='xl' className={clsx((mobileWidth || tabletWidth) && 'pl-0 pr-0 position-relative pt-5')}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5', mobileWidth && 'pt-5 pb-2')}>
                        <Container maxWidth='sm' className={clsx(!(mobileWidth || tabletWidth) && 'pt-3 pb-3 pl-0 pr-0', tabletWidth && 'pt-5 pb-5 pl-0 pr-0')}>
                            <AppContentBox
                                title={title}
                                label={label}
                                description={description}
                            />
                            <Box className={clsx(!(mobileWidth || tabletWidth) && 'mt-4 d-flex justify-content-between align-items-center', tabletWidth && 'mt-2 d-flex flex-row justify-content-between ', mobileWidth && 'pt-2 pb-2 d-flex flex-column justify-content-center align-items-start', 'w-100 position-relative')}>
                                {buttonText ?
                                    <div className={clsx(!(mobileWidth || tabletWidth) && 'w-50', tabletWidth && "w-50", mobileWidth && 'w-100 pt-1 pb-2')}>
                                        <AppButton buttonText={buttonText} />
                                    </div>
                                    : null}
                                {tickerImages ?
                                    <div className={clsx(!(mobileWidth || tabletWidth) && 'w-50', tabletWidth && "w-50", mobileWidth && 'w-100 pt-1 pb-1')}>
                                        <Partners images={tickerImages} />
                                    </div> : null
                                }
                            </Box>
                            {footer ?
                                <Typography className={clsx('mt-3')}>
                                    {footer}
                                </Typography> : null
                            }
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={clsx(mobileWidth && 'position-absolute', 'w-100')}>
                        {image ? <div>
                            <img
                                src={image}
                                height={!(mobileWidth || tabletWidth) ? '520px' : tabletWidth ? '400px' : '520px'}
                                width='100%'
                            />
                        </div> : null
                        }
                    </Grid>
                </Grid>
            </Container>
        </Paper >
    )
}

export default BackgroundImageBanner