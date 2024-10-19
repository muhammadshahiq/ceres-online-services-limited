import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyle } from './content.action.banner.style'
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import AppButton from '../app.button/app.button';

const ContentActionBanner = (props) => {
    const { title, titleVariant, description, descriptionVariant, label, hideBackgroundColor, footer, buttonText, waveTheme, maxWidth, description2 } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    return (
        <Container maxWidth={clsx(!mobileWidth && 'xl', mobileWidth && 'xl')} className={clsx((mobileWidth || tabletWidth) && 'pl-0 pr-0')}>
            <Box className={clsx(hideBackgroundColor ? '' : classes.contentBannerStyle, 'pt-3 pb-3 position-relative overflow-hidden')}>
                {waveTheme == "1" ?
                    <>
                        <div className='w-100 position-absolute h-100 d-flex align-items-end bottom-30'>
                            <img
                                height='350px'
                                width='200px'
                                src={`${process.env.PUBLIC_URL}/assets/images/left-layer-wave.png`}
                            ></img>
                        </div>
                        <div className='w-100 position-absolute h-100 d-flex align-items-end pl-5 ml-5 bottom-60'>
                            <img
                                className='ml-3'
                                height='149.5px'
                                width='125px'
                                src={`${process.env.PUBLIC_URL}/assets/images/hand-1.svg`}
                            ></img>
                        </div>
                        <div className='w-100 position-absolute h-100 d-flex align-items-start justify-content-end top-10'>
                            <img
                                height='350px'
                                width='260px'
                                src={`${process.env.PUBLIC_URL}/assets/images/top-right-layer-wave.png`}
                            ></img>
                        </div>
                        <div className='w-100 position-absolute h-100 d-flex align-items-start justify-content-end right-10 pt-5 mt-5'>
                            <img
                                className='mt-5'
                                height='100px'
                                width='100px'
                                src={`${process.env.PUBLIC_URL}/assets/images/hand-2.svg`}
                            ></img>
                        </div>
                    </>
                    : waveTheme == "2" ?
                        <>
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
                        </> :
                        null
                }
                <Container maxWidth={clsx(maxWidth ? maxWidth : !mobileWidth ? 'md' : mobileWidth ? 'sm' : 'md')} className={clsx((mobileWidth || tabletWidth) && 'pl-0 pr-0', 'pt-5 pb-5 z-index position-relative')}>
                    <div className={clsx(!mobileWidth && 'pt-5 pb-5', mobileWidth && 'w-100 pl-2 pr-2',
                        'd-flex flex-row justify-content-center align-items-center m-auto h-100')}>
                        <div className='w-100 m-auto text-center d-flex flex-column justify-content-center align-items-center pl-3 pr-3'>
                            {buttonText ? <AppButton buttonText={buttonText} buttonTheme="ROUNDED" /> : null}
                            {title ?
                                <Typography variant={clsx((!(mobileWidth || tabletWidth) && !titleVariant) && 'h2', (!(mobileWidth || tabletWidth) && titleVariant) && titleVariant, tabletWidth && 'h4', mobileWidth && 'h5')} className={clsx(!(mobileWidth || tabletWidth) && 'w-80', mobileWidth && 'w-100', classes.textStyle, 'text-transform-none text-center pb-2')}>
                                    {title}
                                </Typography> : null
                            }
                            {label ?
                                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h5', (mobileWidth || tabletWidth) && 'body1')} className={clsx(classes.textStyle, 'text-transform-none text-center pt-2 pb-2')}>
                                    {label}
                                </Typography> : null}
                            {description ?
                                <Typography variant={clsx((!(mobileWidth || tabletWidth) && !descriptionVariant) && 'body1', (!(mobileWidth || tabletWidth) && descriptionVariant) && descriptionVariant, (mobileWidth || tabletWidth) && 'body3')} className={clsx(!(mobileWidth || tabletWidth) && 'w-65', mobileWidth && 'w-100', classes.textStyle, 'text-transform-none text-center pt-2 pb-2')}>
                                    {description}
                                </Typography> : null
                            }
                            <div className='text-left pt-3 pb-3'>
                                {props.children}
                            </div>
                            {description2 ?
                                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', (mobileWidth || tabletWidth) && 'body3')} className={clsx(!(mobileWidth || tabletWidth) && 'w-65', mobileWidth && 'w-100', classes.textStyle, 'text-transform-none text-center pt-2 pb-2')}>
                                    {description2}
                                </Typography> : null
                            }
                            {footer ?
                                <div className='mt-2'>
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