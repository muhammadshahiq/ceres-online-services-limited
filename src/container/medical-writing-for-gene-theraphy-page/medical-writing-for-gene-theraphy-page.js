import React, { lazy, useEffect } from 'react'
import './medical-writing-for-gene-theraphy-page.scss';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../components/common/utill/utils';
import Carousel from '../../components/common/carousel/carousel';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Container, Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './medical-writing-for-gene-theraphy-page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import AppButton from '../../components/common/app.button/app.button';
import AppContentBox from '../../components/common/app.content.box/app.content.box';
import Testinomial from '../../components/common/testinomial/testinomial';

const MedicalWritingForGeneTheraphyPage = () => {
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
            title: "Fabry disease",
            description: "Gene therapy is a groundbreaking field, aiming to address the root genetic causes of diseases. We're committed to developing innovative therapies that can correct or modify faulty genes, offering life-changing solutions and new hope to patients who previously had limited treatment options.",
            gridSizes: [{
                sm: 12,
                md: 6,
                lg: 6
            }]
        },
        {
            tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/message-icon.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Gaucher disease",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            gridSizes: [{
                sm: 12,
                md: 6,
                lg: 6
            }]
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/infection.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Haemophilia",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation.",
            gridSizes: [{
                sm: 12,
                md: 6,
                lg: 6
            }]
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/disease.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Rare diseases",
            description: "With our experience, knowledge, and talent, we can take care of the entire regulatory medical writing and submission process. Through full compliance with regulatory industry standards and processes, we can help you deliver exceptional documents and secure marketing authorisation. ",
            gridSizes: [{
                sm: 12,
                md: 6,
                lg: 6
            }]
        }
    ]


    const tickerImages = [`${process.env.PUBLIC_URL}/assets/images/ticker-1.svg`, `${process.env.PUBLIC_URL}/assets/images/ticker-2.svg`]

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
                    image={`${process.env.PUBLIC_URL}/assets/images/medical-writing-banner.svg`}
                    title='Medical writing for gene therapy'
                    label='Take your gene therapy research to the next level'
                    description="Take your gene therapy research to the next level with ceres online superior medical writing services. We guarantee accuracy, reliability, and straightforwardness to make sure your work stands out!"
                    buttonText='What we offers'
                    tickerImages={tickerImages}
                    scrollID='gene-theraphy'
                />
            </div>
            <div className='pt-5 pb-5'>
                <Container maxWidth='lg'>
                    <AppContentBox
                        textAlign='center'
                        title='Why do we specialise in gene therapy?'
                        label='Gene therapy is arguably one of the most exciting areas of medical research that will hopefully widen the treatment options available to patients globally.'
                        description="Importantly, gene therapy has a vast amount of health-based potential, leading to the development of novel therapies for rare diseases, which are often overlooked in research and development terms. Equally, gene therapy holds the promise to create new treatments for more prevalent conditions, such as cardiovascular disease, cancer, diabetes, and haemophilia."
                        variantDescription='body2'
                        description2="At Ceres Online, we are passionate about advancing medical research and driving therapeutic change to improve the health outcomes of individuals and populations by focusing our attention on groundbreaking scientific developments, like gene therapy. Our wide-ranging knowledge and expertise can help you communicate your research in a meaningful way, ensuring your data is shared with the wider scientific community accurately, effectively, and ethically."
                    />
                </Container>
            </div>
            <div id='gene-theraphy' className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <CircularImageCardPanel
                            title='Gene therapy areas we explore'
                            description="We have a specific interest in the following diseases that can be treated by gene therapy:"
                            cardItems={professionalPackagesData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} className={clsx(!(mobileWidth || tabletWidth) && 'pt-5 pb-5 mt-5', (mobileWidth || tabletWidth) && 'pl-4 pr-4 pt-4 pb-4', 'w-100 h-100 d-flex justify-content-center align-items-center')}>
                        <div>
                            <Typography
                                className={clsx(classes.textStyle, !(mobileWidth || tabletWidth) && 'pt-5 mt-5')}>
                                Additionally, we have a keen interest in the development of new gene therapies for more common health issues like diabetes, cancer, and cardiovascular disease. However, our interests are far-reaching, and our expertise is continually growing, meaning that the list doesn’t stop there!
                            </Typography>
                            <div className='pt-4'>
                                <AppButton buttonText='What we offers' redirect="/services" />
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <ContentActionBanner
                    waveTheme="2"
                    maxWidth='lg'
                    buttonText="Lets Connect"
                    title='The future of gene therapy'
                    description='In the future, it is predicted that gene therapy will become increasingly more widespread for use by healthcare professionals should current levels of economic investment, research, and development remain constant. The future of gene therapy is tremendously exciting as it could liberate patients from the need to receive ongoing treatments for their respective health conditions which will improve quality of life and levels of individual well-being. It is now time to realise the great potential of gene therapy and look forward to the future of novel gene-based therapies for both prevalent and rare diseases alike.'
                    footer={<AppButton buttonText="Get in Touch" />}
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
export default MedicalWritingForGeneTheraphyPage