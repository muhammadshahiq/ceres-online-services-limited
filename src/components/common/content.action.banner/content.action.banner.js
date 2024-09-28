import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyle } from './content.action.banner.style'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import AppButton from '../app.button/app.button';

const ContentActionBanner = (props) => {
    const { title, description, label, hideBackgroundColor, footer } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <Container maxWidth={clsx(!mobileWidth && 'lg', mobileWidth && 'xl')}>
            <Box className={clsx(hideBackgroundColor ? '' : classes.contentBannerStyle, 'pt-3 pb-3 position-relative')}>
                <div className='w-100 position-absolute'>
                    <img
                        height='100%'
                        width='100%'
                        src={`${process.env.PUBLIC_URL}/assets/images/wave-all.png`}
                    ></img>
                </div>
                <div className={clsx(!(mobileWidth || tabletWidth) && 'align-items-center', mobileWidth && 'align-items-end bottom-10', 'w-100 position-absolute d-flex justify-content-end h-100 right-10')}>
                    <img
                        height='81px'
                        width='68px'
                        src={`${process.env.PUBLIC_URL}/assets/images/plus-wave.png`}
                    ></img>
                </div>
                <Container maxWidth={clsx(!mobileWidth && 'md', mobileWidth && 'sm')} className='pt-5 pb-5'>
                    <div className={clsx(!mobileWidth && 'pt-5 pb-5', mobileWidth && 'w-100 pl-2 pr-2',
                        'd-flex flex-row justify-content-center align-items-center m-auto h-100')}>
                        <div className='w-100 m-auto text-center d-flex flex-column justify-content-center align-items-center pl-3 pr-3'>
                            <AppButton buttonText='Lets Connect' buttonTheme="ROUNDED" />
                            {title ?
                                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h2', tabletWidth && 'h4', mobileWidth && 'h5')} className={clsx(!(mobileWidth || tabletWidth) && 'w-80', mobileWidth && 'w-100', classes.textStyle, 'text-transform-none text-center')}>
                                    {title}
                                </Typography> : null
                            }
                            {label ?
                                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h5', (mobileWidth || tabletWidth) && 'body1')} className={clsx(classes.textStyle, 'text-transform-none text-center pt-2 pb-2')}>
                                    {label}
                                </Typography> : null}
                            {description ?
                                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body3')} className={clsx(!(mobileWidth || tabletWidth) && 'w-65', mobileWidth && 'w-100', classes.textStyle, 'text-transform-none text-center pt-2 pb-2')}>
                                    {description}
                                </Typography> : null
                            }
                            <div>
                                {props.children}
                            </div>
                            {footer ?
                                <div className='mt-4'>
                                    {footer}
                                </div> : null
                            }
                        </div>
                    </div>
                </Container>
            </Box>
        </Container>
    )
}

export default ContentActionBanner