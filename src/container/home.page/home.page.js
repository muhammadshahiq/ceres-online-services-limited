import React, { lazy, useEffect } from 'react'
import './home.page.scss';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../components/common/utill/utils';
import Carousel from '../../components/common/carousel/carousel';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './home.page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import AppButton from '../../components/common/app.button/app.button';
import AppBannerPanel from '../../components/common/app.banner.panel/app.banner.panel';
import AppContentBox from '../../components/common/app.content.box/app.content.box';
import CircularImageCard from '../../components/common/circular.image.card/circular.image.card';
import ServicesPanel from '../../components/common/services-panel/services-panel';
import Testinomial from '../../components/common/testinomial/testinomial';

const HomePage = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();
    useEffect(() => {
        scrollToTop()
    }, [])
    const professionalPackagesData = [
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/Chat_Icon_UIA.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Gene therapy",
            description: "Gene therapy is a groundbreaking field, aiming to address the root genetic causes of diseases. We're committed to developing innovative therapies that can correct or modify faulty genes, offering life-changing solutions and new hope to patients who previously had limited treatment options.",
            linkText: "Learn More",
        },
        {
            tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/message-icon.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Immuno-oncology",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            linkText: "Learn More",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/infection.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Infectious diseases",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            linkText: "Learn More",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/disease.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Rare diseases",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            linkText: "Learn More",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/women-health.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Women’s health",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            linkText: "Learn More",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/vaccine.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Vaccines",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            linkText: "Learn More",
        }
    ]


    const tickerImages = [`${process.env.PUBLIC_URL}/assets/images/ticker-1.svg`, `${process.env.PUBLIC_URL}/assets/images/ticker-2.svg`]

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
        <div id='Home'>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <BackgroundImageBanner
                    image={`${process.env.PUBLIC_URL}/assets/images/men-banner-1.svg`}
                    title='Bring your medical communication'
                    label='projects to life on a global scale.'
                    description="We provide precise medical writing and regulatory documentation, delivered on time, with clear messaging, and within budget."
                    buttonText='What we offers'
                    redirect="/services"
                    id='services'
                    tickerImages={tickerImages}
                    descriptionWidth='w-70'
                />
            </div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-3 pr-3 pt-5 pb-3', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <ContentActionBanner
                    maxWidth='lg'
                    waveTheme="2"
                    buttonText="Lets Connect"
                    title='Start’s from experiments till goto Market Strategy'
                    titleVariant='subtitle64400'
                    descriptionVariant="body24400"
                    description='Helping Pharma, biotech, and medical device companies with one window solutions by our experts '
                    footer={<AppButton buttonText="Get in Touch" />}
                />
            </div>
            <ServicesPanel />
            <div id='gene-theraphy' className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <CircularImageCardPanel
                    justifyContent="center"
                    title='Our Therapeutic Areas'
                    description="We have extensive experience across all therapeutic areas, with a particular focus on providing medical writing services for the following:"
                    cardItems={professionalPackagesData}
                />
            </div>
            <AppBannerPanel
                maxWidth="lg"
                classNames="pl-0 pr-0"
                leftSideContent={<img
                    src={`${process.env.PUBLIC_URL}/assets/images/telescope-image.svg`}
                    height={!(mobileWidth || tabletWidth) ? '450px' : tabletWidth ? '400px' : '400px'}
                    width='100%'
                />}
                rightSideContent={<div className={clsx(!(mobileWidth || tabletWidth) && '', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                    <AppContentBox
                        title='Our mission is to discover molecules & Deliver to the Market'
                        label='From discovery to delivery, we craft the science that changes lives.'
                        variantTitleDesktop='subtitle56400'
                        variantLabelDesktop="subtitle32400"
                        description="We're dedicated to supporting our industry partners in driving therapeutic innovation with expert medical writing and regulatory documentation, guiding you every step of the way from molecule to market."
                    />
                </div>}
            />
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2', 'overflow-hidden')}>
                <ContentActionBanner
                    buttonText="Why US"
                    waveTheme="1"
                    title='Why work with us? '
                    description='Helping Pharma, biotech, and medical device companies with one window solutions by our experts '
                    footer={<AppButton buttonText="Get in Touch" />}
                >
                    <Container maxWidth='md' className={clsx(!(mobileWidth || tabletWidth) && 'pl-5 pr-5')}>
                        <Grid container rowSpacing={2} columnSpacing={2} className={clsx(!mobileWidth && '', mobileWidth && 'mt-2')}>
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
            <div className='pt-3 pb-3'>
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
        </div>
    )
}
export default HomePage