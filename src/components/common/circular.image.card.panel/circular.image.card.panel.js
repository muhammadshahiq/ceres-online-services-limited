import React from 'react'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import { useStyle } from './circular.image.card.panel.style';
import CircularImageCard from '../../../components/common/circular.image.card/circular.image.card';

const CircularImageCardPanel = (props) => {
    const { title, buttontext, cardItems = [] } = props
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()
    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5', (mobileWidth || tabletWidth) && 'pt-3 pb-3')}>
            <Container maxWidth={clsx(!mobileWidth && 'lg', mobileWidth && 'sm')}>
                <div className={clsx(!(mobileWidth || tabletWidth) && "pt-1 pb-1 w-100 d-flex justify-content-between", (mobileWidth || tabletWidth) && 'pt-2 pb-2 w-100 d-flex flex-column justify-content-center align-items-center')}>
                    <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 font-weight-bold')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'h4', tabletWidth && 'h6', mobileWidth && 'subtitle')}>
                        {title ? title : ''}
                    </Typography>
                    {buttontext && !(mobileWidth || tabletWidth) ? <Button className={clsx(classes.btn, 'pt-2 pb-2 pl-5 pr-5')} variant='contained' >
                        {buttontext}
                    </Button> : null}
                </div>
                <Grid container rowSpacing={2} spacing={5} className={clsx(!mobileWidth && 'mt-2 mb-2', mobileWidth && 'mt-2 mb-2')}>
                    {cardItems && cardItems.map((item, i) => {
                        return <Grid key={i} item xs={12} sm={6} md={4} lg={4} className='d-flex justify-content-start'>
                            <CircularImageCard
                                tag={item && item.tag}
                                time={item && item.time}
                                author={item && item.author}
                                date={item && item.date}
                                image={item && item.image}
                                title={item && item.title}
                                description={item && item.description}
                                buttontextCard={item && item.buttontextCard}
                                selected={item && item.selected}
                            />
                        </Grid>
                    })}
                </ Grid>
                {(buttontext && mobileWidth) ? <div className={clsx(classes.btnDiv,"pt-4 pb-4 text-center")}>
                    <Button className={clsx(classes.btn, 'pt-2 pb-2 pl-5 pr-5')} variant='contained' >
                        {buttontext}
                    </Button>
                </div> : null}
            </Container>
        </div >
    )
}
export default CircularImageCardPanel