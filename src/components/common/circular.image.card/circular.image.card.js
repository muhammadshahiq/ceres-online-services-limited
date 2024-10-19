import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStyle } from './circular.image.card.style';
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Avatar, Button, Link, Stack } from '@mui/material';

const CircularImageCard = (props) => {
    const { image, title, description, titleIconSrc, height, label, selected, linkText, avatar, cardFlex, cardBackgroundColor, minHeight, redirectTo } = props
    const classes = useStyle(props)
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <Card elevation={0} className={clsx(!(mobileWidth || tabletWidth) && 'w-100', selected ? classes.selectedCard : cardBackgroundColor ? classes.cardBackgroundColor : classes.card, cardFlex ? 'd-flex' : "w-100")}>
            {image ?
                <div className={clsx((cardFlex && !(mobileWidth || tabletWidth)) && 'w-30 pt-4 pb-4 pl-4 pr-4',
                    (cardFlex && mobileWidth) && 'w-35 h-100 pt-3 pb-3 pl-3', (cardFlex && tabletWidth) && 'w-35 h-100 pt-3 pb-3 pl-3', !cardFlex && 'w-100 pt-2 pb-2 pl-2 pr-2',
                    'position-relative d-flex justify-content-center align-items-start')}>
                    <CardMedia
                        className={clsx(!(mobileWidth || tabletWidth) && classes.cardMedia, tabletWidth && classes.cardMediaOnTablet, mobileWidth && classes.cardMediaOnMobile)}
                        component="img"
                        image={image}
                        height={height ? height : cardFlex ? '100%' : '180px'}
                    />
                </div> : null
            }
            <CardContent elevation={0} className={clsx(selected ? classes.selectedCardContent : classes.cardContent,
                (!(mobileWidth || tabletWidth) && (!cardBackgroundColor && !cardFlex)) && "pt-4 pb-4 pl-4 pr-4",
                (!(mobileWidth || tabletWidth) && (!cardBackgroundColor || cardFlex)) && 'pt-4 pb-4 pl-0 pr-4',
                (!(mobileWidth || tabletWidth) && cardBackgroundColor) && 'pt-0 pb-4 pl-4 pr-4',
                tabletWidth && 'pl-3 pr-3',
                mobileWidth && 'pl-3 pr-3',
                'w-100')}
                sx={{ minHeight: minHeight ? minHeight : '150px' }}
            >
                {avatar ?
                    <Stack direction="row" spacing={2} className='pb-2'>
                        <Avatar
                            alt="Remy Sharp"
                            src={avatar}
                            sx={{ width: 60, height: 60 }}
                        />
                    </Stack> : null
                }
                <div className='w-100 d-flex align-items-start pt-2'>
                    {titleIconSrc ? <img src={titleIconSrc} alt='id-icon' width='28px' height='28px' /> : null}
                    {title ?
                        <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "h6", (tabletWidth || mobileWidth) && 'body2')} component="div"
                            className={clsx(titleIconSrc && 'pl-2', classes.textStyle, 'font-weight-bold')}>
                            {title}
                        </Typography> : null
                    }
                </div>
                {label ?
                    <Typography gutterBottom variant='body1' component="div" className={clsx(classes.textStyle)}>
                        {label}
                    </Typography> : null
                }
                {description ?
                    <div style={{ maxHeight: '140px', overflowY: 'scroll' }}>
                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body3", (mobileWidth || tabletWidth) && 'body3')}
                            className={clsx(classes.textStyle)}>
                            {description}
                        </Typography>
                    </div>
                    : null
                }

                {linkText ?
                    <Link href={redirectTo} className={clsx(classes.linkStyle, 'pt-2 d-flex align-items-center')}>
                        <Typography variant={clsx(!(mobileWidth || tabletWidth) && "body2", (mobileWidth || tabletWidth) && 'body2')}
                            className={clsx(classes.linkStyle)}>
                            {linkText}
                        </Typography>
                        <img className='ml-2' src={`${process.env.PUBLIC_URL}/assets/images/link-arrow.svg`} alt='link-arrow-icon' width='16px' height='16px' />
                    </Link> : null
                }
            </CardContent>
        </Card >
    )
}

export default CircularImageCard


// <CircularImageCard
// tag = "Social Media"
// label = "MSc, Immunology and Immunogenetics"
// // image={`${process.env.PUBLIC_URL}/assets/images/men-banner-1.svg`}
// titleIconSrc = {`${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`}
// avatar = {`${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`}
// title = "Regulatory Writing"
// description = "MSc, Immunology and Immunogenetics"
// linkText = "Learn More"
// selected={true}
// />