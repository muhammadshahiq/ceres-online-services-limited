import React from 'react'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import { useStyle } from './circular.image.card.panel.style';
import CircularImageCard from '../../../components/common/circular.image.card/circular.image.card';
import AppButton from '../app.button/app.button';

const CircularImageCardPanel = (props) => {
    const { title, description, buttonText, justifyContent, cardItems = [], topHeaderImage, maxWidth, classNames, showTag, redirect } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && 'pt-4 pb-4', (mobileWidth || tabletWidth) && 'pt-3 pb-3')}>
            <Container maxWidth={clsx(maxWidth ? maxWidth : !mobileWidth ? 'xl' : mobileWidth ? 'sm' : 'lg')} className={clsx(classNames)}>
                {justifyContent === "center" ?
                    <Container maxWidth='md'>
                        <div className={clsx(!(mobileWidth || tabletWidth) && "pt-1 pb-1 w-100", (mobileWidth || tabletWidth) && 'pt-2 pb-2 w-100 d-flex flex-column justify-content-center align-items-center')}>
                            <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 text-center')}
                                variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle56400', tabletWidth && 'h4', mobileWidth && 'h6')}>
                                {title ? title : ''}
                            </Typography>
                            {description ?
                                <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 text-center')}
                                    variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle32400', tabletWidth && 'body1', mobileWidth && 'body2')}>
                                    {description}
                                </Typography> : null
                            }
                        </div>
                    </Container>
                    :
                    <div className={clsx(!(mobileWidth || tabletWidth) && "pt-1 pb-1 w-100 d-flex justify-content-between align-items-center", (mobileWidth || tabletWidth) && 'pt-2 pb-2 w-100 d-flex flex-column justify-content-center align-items-center')}>
                        <div>
                            {title ?
                                <Typography className={clsx(classes.textStyle, 'pt-2 pb-2')}
                                    variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle56400', tabletWidth && 'h6', mobileWidth && 'subtitle')}>
                                    {title}
                                </Typography> : null
                            }
                            {description ?
                                <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 text-left')}
                                    variant={clsx(!(mobileWidth || tabletWidth) && 'subtitle32400', tabletWidth && 'body1', mobileWidth && 'body2')}>
                                    {description}
                                </Typography> : null
                            }
                        </div>
                        <div>
                            {topHeaderImage ?
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <img
                                        height='153px'
                                        width='327px'
                                        src={topHeaderImage}
                                    ></img>
                                </div> : null
                            }
                            {/* {buttontext && !(mobileWidth || tabletWidth) ? <Button className={clsx(classes.btn, 'pt-2 pb-2 pl-5 pr-5')} variant='contained' >
                                {buttontext}
                            </Button> : null} */}
                        </div>
                    </div>}
                <div className='position-relative'>
                    {showTag ?
                        <div className={clsx('d-flex align-items-center justify-content-center position-absolute')}
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)', // Centering in both directions
                                zIndex: 2 // Ensure it's on top of other content
                            }}
                        >
                            <div className={clsx(classes.imageTag, 'p-2 bg-white')}>
                                <img
                                    className=''
                                    height='80px'
                                    width='80px'
                                    src={`${process.env.PUBLIC_URL}/assets/images/logo-1.svg`}
                                ></img>
                            </div>
                        </div> : null}
                    <Grid container rowSpacing={3} columnSpacing={3} className={clsx(!mobileWidth && 'mt-3 mb-2', mobileWidth && 'mt-2 mb-2')}>
                        {cardItems && cardItems.map((item, i) => {
                            return <Grid key={i} item xs={12} sm={item && item.gridSizes && item.gridSizes.length && item.gridSizes[0].sm ? item.gridSizes[0].sm : 6} md={item && item.gridSizes && item.gridSizes.length && item.gridSizes[0].md ? item.gridSizes[0].md : 4} lg={item && item.gridSizes && item.gridSizes.length && item.gridSizes[0].lg ? item.gridSizes[0].lg : 4}
                                className='d-flex justify-content-start'>
                                <CircularImageCard
                                    cardFlex={item && item.cardFlex}
                                    cardBackgroundColor={item && item.cardBackgroundColor}
                                    tag={item && item.tag}
                                    titleIconSrc={item && item.titleIconSrc}
                                    label={item && item.label}
                                    avatar={item && item.avatar}
                                    image={item && item.image}
                                    title={item && item.title}
                                    description={item && item.description}
                                    linkText={item && item.linkText}
                                    selected={item && item.selected}
                                />
                            </Grid>
                        })}
                    </ Grid>
                </div>
                {buttonText ? <div className={clsx("pt-5 text-center")}>
                    <AppButton buttonText={buttonText} redirect={redirect} />
                </div> : null}
            </Container>
        </div >
    )
}
export default CircularImageCardPanel