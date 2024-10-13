import React, { useState } from 'react'
import clsx from 'clsx'
import { Container, Divider, Grid, IconButton, Paper, Typography } from '@mui/material'
import { useStyle } from './footer.style'
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../../components/common/utill/utils';
import AppLabelV2 from '../app.label.v2/app.label.v2';
import { useNavigate } from "react-router-dom";
import AppContactDrawer from '../app.navbar/drawer.contact';
import { Link } from 'react-scroll';


const Footer = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    const navigate = useNavigate();

    const redirect = (url) => {
        navigate(url);

    };
    const [state, setState] = useState({
        isContactDrawerOpen: false
    })

    const showContactDrawer = () => {
        setState({ ...state, isContactDrawerOpen: true });
    };

    const hideContactDrawer = () => {
        setState({ ...state, isContactDrawerOpen: false });
    };
    return (
        <Paper elevation={0} className={clsx(classes.footer, 'm-auto cursor-pointer')}>
            <Container maxWidth='lg' className='pt-5 pb-5'>
                <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-5', tabletWidth && 'pl-5', mobileWidth && 'pl-5')}>
                    <Grid container rowSpacing={2} columnSpacing={5} className={clsx('mt-2 mb-2', classes.footerBannerStyle)}>
                        <Grid item xs={12} sm={6} md={6} lg={7} className={clsx('d-flex pt-4 pb-4 flex-column justify-content-center align-items-start', classes.leftBanner)}>
                            <div className='h-100 pr-5'>
                                <Typography color='primary' className='font-weight-bold'
                                    variant={clsx(!(mobileWidth || tabletWidth) && 'body1', tabletWidth && 'body1', mobileWidth && 'body1')}>
                                    Do you need help?
                                </Typography>
                                <Typography color='primary' variant='body2' className='pt-2'>
                                    We will provide detailed information about our services, types of work, and top projects. We will calculate the cost and prepare a commercial proposal.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={5} className={clsx('d-flex pt-4 pb-4 justify-content-center align-items-center position-relative overflow-hidden', !(mobileWidth || tabletWidth) && classes.rightBanner, mobileWidth && classes.resRightBanner)}>
                            {!(mobileWidth || tabletWidth) &&
                                <div className='position-absolute w-100'>
                                    <img
                                        height='120px'
                                        width='100%'
                                        src={`${process.env.PUBLIC_URL}/assets/images/Ellipse.png`}
                                    ></img>
                                </div>
                            }
                            <Link className={clsx('d-flex justify-content-center align-items-center z-index')}>
                                <Typography onClick={showContactDrawer} color='primary' variant={clsx(!(mobileWidth || tabletWidth) && "body3", (mobileWidth || tabletWidth) && 'body3')}>
                                    Get consultation
                                </Typography>
                                <img className='ml-2' src={`${process.env.PUBLIC_URL}/assets/images/arrow-right.svg`} alt='arrow-right-icon' width='13px' height='7px' />
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <Grid container rowSpacing={2} columnSpacing={5} className='pt-4'>
                    <Grid item xs={12} sm={6} md={4} lg={4} className={clsx(classes.gridStyle, 'd-flex justify-content-between pt-2 pb-5')}>
                        <div>
                            <Typography color='primary' className='pt-3 pb-3 font-weight-bold'
                                variant={clsx(!(mobileWidth || tabletWidth) && 'body3', tabletWidth && 'body3', mobileWidth && 'caption')}>
                                Nav
                            </Typography>
                            <Link to='home' onClick={() => redirect("/")} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                <Typography className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                    Home
                                </Typography>
                            </Link>
                            <Link to='about' onClick={() => redirect("/about")} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                <Typography className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                    About
                                </Typography>
                            </Link>
                            <Link to='team' onClick={() => redirect("/about")} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                <Typography className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                    Team
                                </Typography>
                            </Link>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Our Ethics
                            </Typography>
                        </div>
                        <div>
                            <Typography color='primary' className='pt-3 pb-3 font-weight-bold'
                                variant={clsx(!(mobileWidth || tabletWidth) && 'body3', tabletWidth && 'body3', mobileWidth && 'caption')}>
                                Services
                            </Typography>
                            <Link to='team' onClick={() => redirect("/services")} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                <Typography className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                    Medical
                                </Typography>
                            </Link>
                            <Typography onClick={() => redirect("/services")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Communication
                            </Typography>
                            <Typography onClick={() => redirect("/services")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Regulatory Writing
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} className={clsx(classes.gridStyle, 'd-flex justify-content-between pt-2 pb-5')}>
                        <div>
                            <Typography color='primary' className='pt-3 pb-3 font-weight-bold'
                                variant={clsx(!(mobileWidth || tabletWidth) && 'body3', tabletWidth && 'body3', mobileWidth && 'caption')}>
                                Therapeutic Areas
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Gene therapy
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Immuno-oncology
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Infectious diseases
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Rare diseases
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Women’s health
                            </Typography>
                            <Typography onClick={() => redirect("/therapeutic-areas")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Vaccines
                            </Typography>
                        </div>
                        <div>
                            <Typography color='primary' className='pt-3 pb-3 font-weight-bold'
                                variant={clsx(!(mobileWidth || tabletWidth) && 'body3', tabletWidth && 'body3', mobileWidth && 'caption')}>
                                Info
                            </Typography>
                            <Typography onClick={() => redirect("/about")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                About us
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Works
                            </Typography>
                            <Typography onClick={showContactDrawer} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Contacts
                            </Typography>
                            <Typography onClick={() => redirect("/career")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                Careers
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={clsx(classes.gridStyle, !(mobileWidth || tabletWidth) && 'justify-content-end text-right', mobileWidth && 'justify-content-start text-left', 'w-100 d-flex pt-2 pb-5')}>
                        <div>
                            <div className="cursor-pointer pt-3 pb-3">
                                <img
                                    height='53px'
                                    width='227px'
                                    src={`${process.env.PUBLIC_URL}/assets/images/ceres-logo.svg`}
                                ></img>
                            </div>
                            <div className='w-100 d-flex justify-content-end pb-2'>
                                <Divider sx={{ width: '20%', backgroundColor: '#000', height: '1px', right: 0 }} />
                            </div>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                +1 981 341-23-19
                            </Typography>
                            <Typography onClick={() => redirect("/")} className={clsx(classes.textStyle, 'pt-1')} variant='caption'>
                                hello@caresonline.com
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={5}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <AppLabelV2 divider label='Instagram' iconSrc={`${process.env.PUBLIC_URL}/assets/images/instagram.svg`} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <AppLabelV2 divider label='Whatsapp' iconSrc={`${process.env.PUBLIC_URL}/assets/images/whatsapp.svg`} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={5}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <AppLabelV2
                            label={`©${new Date().getFullYear()}— Copyright`}
                            divider={false}
                        />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} className='d-flex justify-content-end'>
                        <IconButton onClick={scrollToTop}>
                            <img
                                width="54.14px"
                                height="54.14px"
                                src={`${process.env.PUBLIC_URL}/assets/images/scrollToTop.svg`}
                                alt='Social-icon'
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
            {
                state.isContactDrawerOpen ?
                    <AppContactDrawer
                        isContactDrawerOpen={state.isContactDrawerOpen}
                        showContactDrawer={showContactDrawer}
                        hideContactDrawer={hideContactDrawer}
                    /> : null
            }
        </Paper >
    )
}

export default Footer