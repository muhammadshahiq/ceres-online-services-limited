import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss"; // Custom CSS file for styling
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Container, Typography } from '@mui/material';
import { useStyle } from "./carousel.style";

const testimonials = [
    {
        name: "Alex Yam",
        // company: "COMPASS",
        review:
            "Ceres Online Services Limited has definitely changed the game in real estate marketing. They are truly the one-stop shop. Their pricing is competitive and the quality of their work is second to none. They have a fairly large team and everyone are great at their roles with communication throughout.",
        image: 'https://cdn.prod.website-files.com/626b03ca7629cd91b5c563ce/63512cce749c2e4126c132c7_AC%20Portraits%202-min.jpg', // Placeholder, replace with actual image URL
        logo: `${process.env.PUBLIC_URL}/assets/images/pt-1.png`, // Placeholder logo URL, replace with actual
    },
    {
        name: "Sarah Collins",
        // company: "XYZ Real Estate",
        review:
            "I am so impressed with Ceres Online Services Limited. What I like best about Ceres Online Services Limited is that it looks like a very professional and aesthetically pleasing HGTV movie. My sellers and buyers were raving about the video. The service and staff interaction was excellent and the turn around time for my videos and pictures was quick. I am so grateful for having found a great partner in Ceres Online Services Limited.  Looking forward to lots more listings together specially now where virtual tours are essential and the way of the future.",
        image: 'https://cdn.prod.website-files.com/626b03ca7629cd91b5c563ce/630eea4311317d226203a8f5_AC%20Portraits%2056.jpg', // Placeholder, replace with actual image URL
        logo: `${process.env.PUBLIC_URL}/assets/images/pt-2.png`, // Placeholder logo URL, replace with actual
    },
    // Add more testimonials as needed
];

// {
//     image: `${process.env.PUBLIC_URL}/assets/images/pt-2.png`
// },
// {
//     image: `${process.env.PUBLIC_URL}/assets/images/pt-1.png`
// },

// {
//     image: `${process.env.PUBLIC_URL}/assets/images/pt-3.png`
// },
// {
//     image: `${process.env.PUBLIC_URL}/assets/images/pt-4.png`
// }
const CarouselComponent = (props) => {
    const { title = "Why Our Clients Love Us" } = props
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && "carousel-section", mobileWidth && 'carousel-section-mobile')}>
            <Container maxWidth='xl' className="pl-0 pr-0 pt-0 pb-0 position-relative">
                {(title && mobileWidth) ? <div className="w-100 d-flex justify-content-center">
                    <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h4', (mobileWidth || tabletWidth) && 'h6')} className={clsx(classes.textStyle, 'pt-2 pb-2 font-weight-bold')}>
                        {title}
                    </Typography>
                </div> : null
                }
                <div className={clsx(!(mobileWidth || tabletWidth) && 'd-flex', mobileWidth && 'd-flex flex-column-reverse', "w-100 h-100")}>
                    <div className={clsx(!(mobileWidth || tabletWidth) && "content-section", mobileWidth && 'content-section-mobile')}>
                        {(title && !(mobileWidth || tabletWidth)) ? <div className="w-100 d-flex justify-content-center">
                            <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h4', (mobileWidth || tabletWidth) && 'h6')} className={clsx(classes.textStyle, 'text-left w-60 mt-3 pt-2 pb-2 font-weight-bold')}>
                                {title}
                            </Typography>
                        </div> : null
                        }
                        <div className={clsx(!(mobileWidth || tabletWidth) && "card-container", mobileWidth && 'card-container-mobile')}>
                            <div className="testimonial-card pl-4 pr-4 pt-4 pb-4">
                                <div className="card-header1 pr-3">
                                    <img src={testimonials[activeSlide].logo} alt="logo" className="company-logo" />
                                    <div className="carousel-arrows">
                                        <Slider {...settings}>
                                            {testimonials.map((_, index) => (
                                                <div key={index} />
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <h3>{testimonials[activeSlide].company}</h3>
                                <p>{testimonials[activeSlide].review}</p>
                                <p className="client-name">- {testimonials[activeSlide].name}</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(!(mobileWidth || tabletWidth) && "w-60", mobileWidth && 'w-100', "image-section")}>
                        <img
                            src={testimonials[activeSlide].image}
                            alt={testimonials[activeSlide].name}
                            className="testimonial-image"
                        />
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default CarouselComponent;
