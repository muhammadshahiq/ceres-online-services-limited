import React, { lazy, useEffect } from 'react'
import './services.page.scss';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../components/common/utill/utils';
import Carousel from '../../components/common/carousel/carousel';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './services.page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import AppButton from '../../components/common/app.button/app.button';
import CircularImageCard from '../../components/common/circular.image.card/circular.image.card';
import ServicesPanel from '../../components/common/services-panel/services-panel';
import Testinomial from '../../components/common/testinomial/testinomial';
import TestinomialV2 from '../../components/common/testinomial.v2/testinomial.v2';

const ServicesPage = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();
    useEffect(() => {
        scrollToTop()
    }, [])
    const workingWithUsContent = [
        {
            title: "Deliver",
            description: "We constantly deliver error-free medical writing and regulatory documentation on time, on message, and on budget.",
        },
        {
            title: "Experts",
            description: "We use our experience and expertise to produce high-quality documentation for use across all stages of the clinical development lifecycle.",
        },
        {
            title: "Partnership",
            description: "We work in partnership with our clients to support the diffusion of therapeutic innovation to help transform lives globally.",
        },
        {
            title: "Trusted",
            description: "We are trusted by our life science and pharmaceutical partners to deliver on their medical writing objectives.",
        }
    ]

    const teamExpertsData = [
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Mrs. Julia James ",
            label: 'CEO & Principal Medical Writer',
            description: "MSc, Immunology and Immunogenetics",
            linkText: "Learn More",
        }
    ]

    const blogsContent = [
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            image: `${process.env.PUBLIC_URL}/assets/images/sampIeImage.svg`,
            cardFlex: true,
            cardBackgroundColor: true,
            title: "Providing Medical writing services",
            label: 'provide regulatory writing for you to gain marketing authorisation',
            description: "Our passion lies in medical writing. We offer regulatory writing services to help you obtain marketing authorization, and medical communications support to help you reach your commercial goals.",
            linkText: "Read full article",
            gridSizes: [{
                sm: 12,
                md: 12,
                lg: 12
            }]
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            image: `${process.env.PUBLIC_URL}/assets/images/sampIeImage.svg`,
            cardFlex: false,
            cardBackgroundColor: true,
            title: "Providing Medical writing services",
            // label: 'provide regulatory writing for you to gain marketing authorisation',
            description: "Our passion lies in medical writing. We offer regulatory writing services to help you obtain marketing authorization, and medical communications support to help you reach your commercial goals.",
            linkText: "Read full article",
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            // avatar: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            image: `${process.env.PUBLIC_URL}/assets/images/sampIeImage.svg`,
            cardFlex: false,
            cardBackgroundColor: true,
            title: "Providing Medical writing services",
            // label: 'provide regulatory writing for you to gain marketing authorisation',
            description: "Our passion lies in medical writing. We offer regulatory writing services to help you obtain marketing authorization, and medical communications support to help you reach your commercial goals.",
            linkText: "Read full article",
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
        }
    ]
    return (
        <div id='Services'>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <BackgroundImageBanner
                    image={`${process.env.PUBLIC_URL}/assets/images/service-page-banner.svg`}
                    title='Providing Medical Writing Servics'
                    label='On various medical domains'
                    description="We are a passionate team of medical writers committed to delivering accurate, engaging, and accessible healthcare information, backed by our expertise in scientific research and medical communications."
                    buttonText='Get Connect With Us'
                    redirect='/medical-writing-gene-theraphy'
                />
            </div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-5 pr-5 pt-4 pb-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <ServicesPanel backgroundColor="#f7f7f7" maxWidth='lg' />
            </div>
            {/* Remaining Carousel */}
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2', 'overflow-hidden')}>
                <TestinomialV2
                    title="What it Includes"
                    description="At Ceres Online, we are responsible to write complex medical writing including new disease and there hypothesis and theory and communicate with the world to test and cure teh symptoms."
                />
            </div>

            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2', 'overflow-hidden')}>
                <ContentActionBanner
                    buttonText="Why US"
                    waveTheme="1"
                    title='Why work with us? '
                    description='Helping Pharma, biotech, and medical device companies with one window solutions by our experts '
                    footer={<AppButton buttonText="Get in Touch" />}
                >
                    <Container maxWidth='md' className={clsx(!(mobileWidth || tabletWidth) && 'pl-5 pr-5', (mobileWidth || tabletWidth) && 'pl-0 pr-0')}>
                        <Grid container rowSpacing={2} columnSpacing={2} className={clsx(!mobileWidth && '', (mobileWidth || tabletWidth) && 'mt-2 pl-0 pr-0')}>
                            {workingWithUsContent && workingWithUsContent.map((data, index) => {
                                return <Grid key={index} item xs={12} sm={6} md={6} lg={6} className=''>
                                    <CircularImageCard
                                        title={data && data.title}
                                        description={data && data.description}
                                    />
                                </Grid>
                            })}
                        </Grid>
                    </Container>
                </ContentActionBanner>
            </div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <ContentActionBanner
                    hideBackgroundColor
                    buttonText="Lets Connect"
                    title='Start’s from experiments till goto Market Strategy'
                    titleVariant='subtitle64400'
                    descriptionVariant='body24400'
                    maxWidth='lg'
                    description='Helping Pharma, biotech, and medical device companies with one window solutions by our experts '
                    footer={<AppButton buttonText="Get in Touch" />}
                />
            </div>
            <div id='team'>
                <CircularImageCardPanel
                    // classNames="pl-5 pr-5"
                    maxWidth='lg'
                    title='Meet Our Team of Experts'
                    description="From discovery to delivery, we craft the science that changes lives."
                    topHeaderImage={`${process.env.PUBLIC_URL}/assets/images/dr-team.svg`}
                    cardItems={teamExpertsData}
                    buttonText="Join Our Team"
                    redirect="/career"
                />
            </div>
            <div className='pt-3 pb-3 overflow-hidden'>
                <Testinomial />
            </div>
            <CircularImageCardPanel
                maxWidth='lg'
                // classNames='pl-5 pr-5'
                justifyContent="center"
                title='Our latest blogs'
                description="Read our latest blogs on women’s health, and other therapeutic areas that we focus on."
                topHeaderImage={`${process.env.PUBLIC_URL}/assets/images/dr-team.svg`}
                cardItems={blogsContent}
                buttonText="View All Blogs"
                redirect="/blogs"
            />
        </div >
    )
}
export default ServicesPage