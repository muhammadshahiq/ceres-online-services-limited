import React, { lazy } from 'react'
import './therapeutic.areas.page.scss';
import { IsMobileWidth, IsTabletWidth } from '../../components/common/utill/utils';
import Carousel from '../../components/common/carousel/carousel';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './therapeutic.areas.page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import AppButton from '../../components/common/app.button/app.button';
import AppBannerPanel from '../../components/common/app.banner.panel/app.banner.panel';
import AppContentBox from '../../components/common/app.content.box/app.content.box';
import CircularImageCard from '../../components/common/circular.image.card/circular.image.card';
import ServicesPanel from '../../components/common/services-panel/services-panel';
import Testinomial from '../../components/common/testinomial/testinomial';

const TherapeuticAreasPage = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();

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
        <div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <BackgroundImageBanner
                    className='pr-5'
                    image={`${process.env.PUBLIC_URL}/assets/images/therapeutic-areas.svg`}
                    title='Treatment Domains'
                    label='Our breadth of experience spans all therapeutic areas'
                    description="However, we take a special interest in providing medical writing for the following:"
                    buttonText='What we offers'
                    tickerImages={tickerImages}
                />
            </div>
            <div id='gene-theraphy' className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <CircularImageCardPanel
                    justifyContent="center"
                    title='Our Therapeutic Areas'
                    description="We have extensive experience across all therapeutic areas, with a particular focus on providing medical writing services for the following:"
                    cardItems={professionalPackagesData}
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
            />
        </div>
    )
}
export default TherapeuticAreasPage