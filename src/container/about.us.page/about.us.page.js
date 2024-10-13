import React, { useEffect } from 'react'
import './about.us.page.scss';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../components/common/utill/utils';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './about.us.page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import AppButton from '../../components/common/app.button/app.button';
import AppBannerPanel from '../../components/common/app.banner.panel/app.banner.panel';
import AppContentBox from '../../components/common/app.content.box/app.content.box';
import CircularImageCard from '../../components/common/circular.image.card/circular.image.card';
import Testinomial from '../../components/common/testinomial/testinomial';
import AppLabel from '../../components/common/app.label/app.label';
import Carousel from '../../components/common/carousel/carousel';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();
    let navigate = useNavigate();

    const redirectTo = (url) => {
        navigate(url);
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    const workingWithUsContent = [
        {
            image: `${process.env.PUBLIC_URL}/assets/images/Chat_Icon_UIA.svg`,
            title: "Starts From Molecule Discovery",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation."
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/images/globe.svg`,
            title: "Till Actual Market Finish Product",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. "
        }
    ]

    const policiesContent = [
        {
            title: "Compliance Protocols",
            description: "At Ceres Online, we prioritize compliance, ensuring our team receives regular training to follow all relevant industry codes and regulations.",
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
        },
        {
            title: "Planet Health",
            description: "We care passionately about the environment, planet, and our role as a company to join in the fight against climate change. Irrefutable evidence demonstrates that climate change is a growing existential threat to humanity across the globe",
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
        },
        {
            title: "Culture Respect",
            description: `As a team of medical writers, we do not take ourselves too seriously, but we take what we do seriously. Quality is at the heart of everything we do. `,
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
        },
        {
            title: "Rules & Priorities",
            description: "Guided by firm rules and well-defined priorities, we ensure every action aligns with our commitment to excellence and success to help grow together.",
            gridSizes: [{
                sm: 6,
                md: 6,
                lg: 6
            }]
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

    const businessContent = [
        {
            label: "Ensure timely, accurate, and on-point medical writing and regulatory documentation within budget",
            iconSrc: `${process.env.PUBLIC_URL}/assets/images/NI-1.svg`
        },
        {
            label: "Leverage our expertise to create top-tier documentation for every phase of the clinical trial process.",
            iconSrc: `${process.env.PUBLIC_URL}/assets/images/NI-2.svg`
        },
        {
            label: "Collaborate with life sciences clients to achieve regulatory approvals and successfully commercialize transformative therapies.",
            iconSrc: `${process.env.PUBLIC_URL}/assets/images/NI-3.svg`
        },
        {
            label: "Lead the industry in client satisfaction and employee well-being.",
            iconSrc: `${process.env.PUBLIC_URL}/assets/images/NI-4.svg`
        }
    ]
    return (
        <div id='About-us'>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <BackgroundImageBanner
                    image={`${process.env.PUBLIC_URL}/assets/images/about-us-banner.svg`}
                    title='Deep Dive About Ceres Online'
                    label='An expert team of medical writers '
                    description="We are a passionate team of medical writers committed to delivering accurate, engaging, and accessible healthcare information, backed by our expertise in scientific research and medical communications."
                    buttonText='Get Connect With Us'
                />
            </div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <ContentActionBanner
                    maxWidth={mobileWidth ? 'xl' : "lg"}
                    buttonText="Our Mission"
                    title='From molecule to market, we write the science that transforms lives.'
                    description2='We support our industry partners in driving therapeutic innovation by providing world-class medical writing and regulatory documentation, from molecule to market.'
                    footer={<AppButton buttonText="Get Connect With Us" />}
                >
                    <Container maxWidth='xl' className={clsx(!(mobileWidth || tabletWidth) && 'pl-2 pr-2', (mobileWidth || tabletWidth) && 'pl-0 pr-0', 'pt-3 pb-3')}>
                        <Grid container rowSpacing={2} columnSpacing={2} className={clsx(!mobileWidth && '', (mobileWidth || tabletWidth) && 'mt-2 pl-0 pr-0')}>
                            {workingWithUsContent && workingWithUsContent.map((data, index) => {
                                return <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
                                    <CircularImageCard
                                        cardFlex
                                        height="56px"
                                        image={data && data.image}
                                        title={data && data.title}
                                        description={data && data.description}
                                    />
                                </Grid>
                            })}
                        </Grid>
                    </Container>
                </ContentActionBanner>
            </div>
            <AppBannerPanel
                maxWidth="lg"
                // classNames="pl-0 pr-0"
                leftSideContent={<img
                    src={`${process.env.PUBLIC_URL}/assets/images/about-men-arrow.svg`}
                    height={!(mobileWidth || tabletWidth) ? '526px' : tabletWidth ? '480px' : '400px'}
                    width='100%'
                />}
                rightSideContent={<div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                    <AppContentBox
                        title='Our Business Aims'
                        description2="We're dedicated to supporting our industry partners in driving therapeutic innovation with expert medical writing and regulatory documentation, guiding you every step of the way from molecule to market."
                    />
                    {businessContent && businessContent.map((data, i) => {
                        return <AppLabel
                            key={i}
                            iconSrc={data && data.iconSrc}
                            description={data && data.label}
                        />
                    })}
                </div>}
            />
            <CircularImageCardPanel
                maxWidth='lg'
                showTag={mobileWidth ? false : true}
                justifyContent="center"
                title='Our Core Focus'
                description="At Ceres Online, we prioritize compliance, ensuring our team receives regular training to follow all relevant industry codes and regulations."
                cardItems={policiesContent}
            />
            <div id='team'>
                <CircularImageCardPanel
                    maxWidth='lg'
                    title='Meet Our Team of Experts'
                    description="From discovery to delivery, we craft the science that changes lives."
                    topHeaderImage={`${process.env.PUBLIC_URL}/assets/images/dr-team.svg`}
                    cardItems={teamExpertsData}
                    buttonText="Join Our Team"
                    redirect="/career"
                />
            </div>
            <div id='testinomial' className='pt-3 pb-3'>
                <Testinomial />
            </div>
            <CircularImageCardPanel
                maxWidth='lg'
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
export default AboutUs