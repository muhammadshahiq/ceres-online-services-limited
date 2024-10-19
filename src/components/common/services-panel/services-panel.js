import React from 'react'
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import { Grid } from '@mui/material';
import clsx from 'clsx';
import AppBannerPanel from '../app.banner.panel/app.banner.panel';
import AppContentBox from '../app.content.box/app.content.box';
import CircularImageCard from '../circular.image.card/circular.image.card';

const ServicesPanel = (props) => {
    const { backgroundColor = "", maxWidth } = props
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    // const classes = useStyle();
    return (
        <div style={{ background: backgroundColor }}>
            <AppBannerPanel
                backgroundColor={backgroundColor}
                maxWidth={maxWidth ? maxWidth : "lg"}
                classNames="pl-0 pr-0"
                leftSideContent={<div className={clsx(!(mobileWidth || tabletWidth) && '')}>
                    <AppContentBox
                        title="Providing Medical writing services"
                        variantTitleDesktop='subtitle64400'
                        variantLabelDesktop='subtitle40400'
                        label="provide regulatory writing for you to gain marketing authorisation"
                        description="Our passion lies in medical writing. We offer regulatory writing services to help you obtain marketing authorization, and medical communications support to help you reach your commercial goals."
                    /></div>}
                rightSideContent={<Grid container rowSpacing={2} columnSpacing={2} className={clsx(!mobileWidth && 'pt-0 mt-0', mobileWidth && 'mt-3')}>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='w-100 d-flex justify-content-end align-items-end pt-0'>
                        <div className={clsx(mobileWidth && 'd-none')}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/wave-2lines.png`} alt='link-arrow-icon' width='46px' height='69px' />
                        </div>
                        <div className={clsx(!(mobileWidth || tabletWidth) && 'w-100 pl-2')}>
                            <CircularImageCard
                                // image={`${process.env.PUBLIC_URL}/assets/images/men-banner-1.svg`}
                                titleIconSrc={`${process.env.PUBLIC_URL}/assets/images/doc-icon.svg`}
                                title="Regulatory Writing"
                                description="With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. "
                                linkText="Learn More"
                                redirectTo='/medical-writing-gene-theraphy'
                            // selected={true}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='w-100 d-flex justify-content-end'>
                        <CircularImageCard
                            // image={`${process.env.PUBLIC_URL}/assets/images/men-banner-1.svg`}
                            titleIconSrc={`${process.env.PUBLIC_URL}/assets/images/message-icon.svg`}
                            title="Medical Communications"
                            description="We combine science with creativity to provide a wide range of medical communication services as part of a broader scientific communication, marketing, and commercial strategy involving multiple stakeholders to ensure your product is at the heart of everything we do."
                            linkText="Learn More"
                            redirectTo='/medical-writing-gene-theraphy'
                        // selected={true}
                        />
                    </Grid>
                </ Grid>}
            />
        </div>
    )
}

export default ServicesPanel