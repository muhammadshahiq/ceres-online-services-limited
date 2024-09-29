import React from "react";
import "./video.section.scss"; // Custom styling file
import { Container, Typography } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { useStyle } from "./video.section.style";

const VideoSection = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const classes = useStyle()

    return (
        <div className={clsx(!(mobileWidth || tabletWidth) && "pt-5 pb-5", (mobileWidth || tabletWidth) && 'pt-1 pb-1')}>
            <Container maxWidth='lg' className={clsx('pl-0 pr-0')}>
                <div className={clsx(mobileWidth && 'border-radius-none', "video-container")}>
                    <video
                        className={clsx(mobileWidth && 'video-element-mobile', "video-element")}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="your-poster-image.jpg" // Optional poster image for video
                    >
                        <source
                            src={`${process.env.PUBLIC_URL}/assets/videos/video.2.mp4`} // Replace with actual video URL
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="play-button-overlay">
                        {/* Optional Play button overlay */}
                        <button className="play-button">▶</button>
                    </div>
                </div>
                <div className="pt-1 pb-1 w-100 d-flex justify-content-between position-relative">
                    <Typography className={clsx(!(mobileWidth || tabletWidth) && classes.textStyle, (mobileWidth || tabletWidth) && classes.textStyleMobile, 'pt-1 pb-1 font-weight-bold')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'caption', tabletWidth && 'caption', mobileWidth && 'caption')}>
                        What we do in 45 seconds
                    </Typography>
                    <Typography className={clsx(!(mobileWidth || tabletWidth) && classes.textStyle, (mobileWidth || tabletWidth) && classes.textStyleMobile, 'pt-1 pb-1 font-weight-bold')}
                        variant={clsx(!(mobileWidth || tabletWidth) && 'caption', tabletWidth && 'caption', mobileWidth && 'caption')}>
                        Ceres Online Services Limited - Showreel
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

export default VideoSection;
