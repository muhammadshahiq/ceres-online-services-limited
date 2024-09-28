import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStyle } from './circular.image.card.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Button } from '@mui/material';

const CircularImageCard = (props) => {
    const { image, title, description, time, tag, author, date, selected, buttontextCard } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <Card elevation={0} className={clsx((mobileWidth || tabletWidth) && 'w-100', selected ? classes.selectedCard : classes.card)}>
            <div className='w-100 position-relative'>
                <div className='position-absolute bottom-0 pl-2'>
                    {tag ? <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "caption", (tabletWidth || mobileWidth) && 'caption')} component="div"
                        className={clsx(!(mobileWidth || tabletWidth) && "pl-3 pr-3 pt-1 pb-1", (tabletWidth || mobileWidth) && 'pl-2 pr-2 pt-1 pb-1', classes.tagStyle, 'font-weight-bold rounded-pill')}>
                        {tag}
                    </Typography> : null}
                </div>
                {image ?
                    <CardMedia
                        className={clsx(!(mobileWidth || tabletWidth) && classes.cardMedia, tabletWidth && classes.cardMediaOnTablet, mobileWidth && classes.cardMediaOnMobile)}
                        component="img"
                        image={image}
                        height='200px'
                    /> : null
                }
            </div>
            <CardContent className={clsx(selected ? classes.selectedCardContent : classes.cardContent, !(mobileWidth || tabletWidth) && 'w-100 pt-4 pb-4', tabletWidth && 'pl-2 pr-2 w-100', mobileWidth && 'pl-2 pr-2 w-100 pt-3')}>
                {time ?
                    <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "caption", (tabletWidth || mobileWidth) && 'caption')} component="div"
                        className={clsx(!(mobileWidth || tabletWidth) && "w-100", (tabletWidth || mobileWidth) && 'w-100', selected ? classes.selectedTextStyle : classes.textStyle, 'font-weight-bold')}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/time-icon.svg`} alt='id-icon' width='16px' height='16px' /> <b className='pl-2'>{time}</b>
                    </Typography> : null
                }
                {title ?
                    <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "body1", (tabletWidth || mobileWidth) && 'body2')} component="div"
                        className={clsx(selected ? classes.selectedTextStyle : classes.textStyle, 'font-weight-bold')}>
                        {title}
                    </Typography> : null
                }
                {description ?
                    <div style={{ maxHeight: '110px', overflowY: 'scroll' }}>

                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body2", (mobileWidth || tabletWidth) && 'body2')}
                            className={clsx(selected ? classes.selectedTextStyle : classes.textStyle)}>
                            {description}
                        </Typography>
                    </div>
                    : null}
                <div className='d-flex w-100 pt-3'>
                    {author ?
                        <Typography gutterBottom variant='caption' component="div" className={clsx(selected ? classes.selectedTextStyle : classes.textStyle)}>
                            By <b className='pl-1'>{author}</b>
                        </Typography> : null
                    }
                    {date ?
                        <Typography gutterBottom variant='caption' component="div" className={clsx(selected ? classes.selectedTextStyle : classes.textStyle, 'pl-2')}>
                            {date}
                        </Typography> : null
                    }
                </div>

                {buttontextCard ?
                    <Button className={clsx(selected ? classes.selectedBtn : classes.btn, 'pt-3 pb-3 pl-5 pr-5 mt-2')} variant='outlined'>
                        {buttontextCard}
                    </Button> : null}
            </CardContent>
        </Card >
    )
}

export default CircularImageCard