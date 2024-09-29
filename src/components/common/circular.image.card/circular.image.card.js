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
    const { image, title, description, titleIconSrc, tag, label, selected, linkText, avatar } = props
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
            <CardContent elevation={0} className={clsx(selected ? classes.selectedCardContent : classes.cardContent, !(mobileWidth || tabletWidth) && 'w-100 pt-4 pb-4 pl-4 pr-4', tabletWidth && 'pl-3 pr-3 w-100', mobileWidth && 'pl-2 pr-2 w-100 pt-3')}>
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
                    {titleIconSrc ? <img src={titleIconSrc} alt='id-icon' width='24px' height='24px' /> : null}
                    {title ?
                        <Typography gutterBottom variant={clsx(!(mobileWidth || tabletWidth) && "h6", (tabletWidth || mobileWidth) && 'body2')} component="div"
                            className={clsx(classes.textStyle, 'font-weight-bold pl-2')}>
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
                    <Link className={clsx('pt-2 d-flex align-items-center')}>
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