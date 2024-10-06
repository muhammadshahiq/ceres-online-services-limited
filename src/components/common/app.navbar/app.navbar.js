import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./app.navbar.style";
import { AppBar, Toolbar, Container, Button, Typography, Grid } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import AppDrawer from "./drawer";
import DropDownMenu from "../dropdown.menu/dropdown.menu";
import AppContactDrawer from "./drawer.contact";

const AppNavbar = (props) => {
    const classes = useStyle();
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    const navigate = useNavigate();

    const [isSticky, setIsSticky] = useState(false);  // For sticky navbar logic
    const [bgColorChange, setBgColorChange] = useState(false);  // For background color change on scroll

    const stickyRef = useRef(null);
    const [state, setState] = useState({
        isContactDrawerOpen: false
    })

    const showContactDrawer = () => {
        setState({ ...state, isContactDrawerOpen: true });
    };

    const hideContactDrawer = () => {
        setState({ ...state, isContactDrawerOpen: false });
    };


    const redirect = (url) => {
        navigate(url);
    };

    const dropdownData = [
        {
            name: 'Therapeutic areas',
            items: {
                // label: 'Kaichain',
                // imageSrc: `${process.env.PUBLIC_URL}/assets/images/logo-img-1.png`,
                child: [
                    {
                        name: 'Gene therapy',
                        path: '/'
                    },
                    {
                        name: 'Immuno-oncology',
                        path: '/'
                    },
                    {
                        name: 'Infectious diseases',
                        path: '/'
                    },
                    {
                        name: 'Rare diseases',
                        path: '/'
                    },
                    {
                        name: 'Women’s health',
                        path: '/'
                    },
                    {
                        name: 'Vaccines',
                        path: '/'
                    }
                ]
            }
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            // Get current scroll position
            const scrollY = window.scrollY;

            // Check if the scroll position is greater than 100px
            if (scrollY > 800) {
                setBgColorChange(true);  // Change background color
            } else {
                setBgColorChange(false);  // Revert to original background
            }

            // Set sticky based on scrollY
            if (scrollY > 800) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="position-relative">
            {!mobileWidth && !tabletWidth ? (
                <AppBar
                    position="relative"
                    className={clsx(classes.appNavbar, 'm-auto position-relative')}
                >
                    <Container maxWidth="xl" className=''>
                        <Toolbar className={clsx(!mobileWidth && "w-100 d-flex flex-row justify-content-between pt-2 pb-2")}>
                            <Grid container columnSpacing={2} className='h-100 d-flex justify-content-center align-items-center'>
                                <Grid item md={3} lg={3.5} className='h-100' >
                                    <div className="cursor-pointer">
                                        <img
                                            height='64px'
                                            width='274px'
                                            src={`${process.env.PUBLIC_URL}/assets/images/ceres-logo.svg`}
                                        ></img>
                                    </div>
                                </Grid>
                                <Grid item md={6} lg={6.5} className="h-100 d-flex justify-content-center">
                                    <div className="position-absolute left-30 top-0">
                                        <img
                                            height='150px'
                                            width='100%'
                                            src={`${process.env.PUBLIC_URL}/assets/images/vertical-divider-icon.svg`}
                                        ></img>
                                    </div>
                                    <Link to="Home" spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                        <Button onClick={() => redirect('/')} variant="none" className={clsx(classes.textStyle, "text-transform-none ml-2")}>
                                            Home
                                        </Button>
                                    </Link>
                                    <Link to="About-us" onClick={() => redirect('/about')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                        <Button variant="none" className={clsx(classes.textStyle, "text-transform-none ml-2")}>
                                            About us
                                        </Button>
                                    </Link>
                                    <Link to="Services" onClick={() => redirect('/services')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                        <Button variant="none" className={clsx(classes.textStyle, "text-transform-none ml-2")}>
                                            Services
                                        </Button>
                                    </Link>
                                    <div>
                                        {dropdownData && dropdownData.map((data, index) => {
                                            return <div key={index}>
                                                <DropDownMenu
                                                    name={data.name}
                                                    label={data.items && data.items.label}
                                                    imageSrc={data.items && data.items.imageSrc}
                                                    data={data.items && data.items.child}
                                                />
                                            </div>
                                        })}
                                    </div>
                                    <Link to="Blog" onClick={() => redirect('/blogs')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                        <Button variant="none" className={clsx(classes.textStyle, "text-transform-none ml-2")}>
                                            Blog
                                        </Button>
                                    </Link>
                                    <div className="position-absolute right-20 top-0">
                                        <img
                                            height='120px'
                                            width='100%'
                                            src={`${process.env.PUBLIC_URL}/assets/images/vertical-divider-icon-2.svg`}
                                        ></img>
                                    </div>
                                </Grid>
                                <Grid item md={3} lg={2} className='h-100 d-flex justify-content-end' >
                                    <Button onClick={showContactDrawer} variant="outlined" className={clsx(classes.btn, "text-transform-uppercase font-weight-boldclasses.textStyle, pt-2 pb-2 pl-4 pr-4")}>
                                        Contact Us
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            ) : (
                <AppBar position="absolute" className={classes.responsiveAppNavbar}>
                    <Container maxWidth="lg">
                        <Toolbar className="d-flex flex-row justify-content-between m-auto">
                            <div ref={stickyRef}>
                                <img
                                    height='30px'
                                    width='100%'
                                    src={`${process.env.PUBLIC_URL}/assets/images/ceres-logo.svg`}
                                ></img>
                            </div>
                            <AppDrawer dropdownData={dropdownData} />
                        </Toolbar>
                    </Container>
                </AppBar>
            )}

            {
                state.isContactDrawerOpen ?
                    <AppContactDrawer
                        isContactDrawerOpen={state.isContactDrawerOpen}
                        showContactDrawer={showContactDrawer}
                        hideContactDrawer={hideContactDrawer}
                    /> : null
            }
        </div>
    );
};

export default AppNavbar;
