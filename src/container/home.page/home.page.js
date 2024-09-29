import React, { lazy } from 'react'
import './home.page.scss';
import { IsMobileWidth, IsTabletWidth } from '../../components/common/utill/utils';
import AppNavbar from '../../components/common/app.navbar/app.navbar';
import Carousel from '../../components/common/carousel/carousel';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import { Button, Grid } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './home.page.style';
import ContentActionBanner from '../../components/common/content.action.banner/content.action.banner';
import FaqsAndContactSection from '../../components/common/faqs.and.contact.section/faqs.and.contact.section';
import Partners from '../../components/common/partners/partners';
import VideoContentSection from '../../components/common/video.content.section/video.content.section';
import AppButton from '../../components/common/app.button/app.button';
import AppBannerPanel from '../../components/common/app.banner.panel/app.banner.panel';
import AppContentBox from '../../components/common/app.content.box/app.content.box';
import CircularImageCard from '../../components/common/circular.image.card/circular.image.card';
import ServicesPanel from '../../components/common/services-panel/services-panel';

const HomePage = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();

    const professionalPackagesData = [
        {
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: 'Care Package',
            description: 'Interior and exterior photoshoot, 3D virtual tour, 30-45 seconds video tour, drone photoshoot and a listing website.',
            buttontextCard: 'Learn more'
        },
        {
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            image: `${process.env.PUBLIC_URL}/assets/images/p-2.jpg`,
            buttontextCard: 'Learn more',
            title: 'Premier Package',
            description: 'This comprehensive package is best suited for great properties that deserve a step above for leaving lasting impressions.'
        },
        {
            selected: true,
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            image: `${process.env.PUBLIC_URL}/assets/images/p-3.png`,
            buttontextCard: 'Learn more',
            title: 'Luxury Package',
            description: 'If you want the best results, this exclusive package includes an enhanced quality of our best services for your portfolio-worthy listing.'
        }
    ]

    const popularServicesData = [
        {
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            image: `${process.env.PUBLIC_URL}/assets/images/pp-1.jpg`,
            title: 'Expert Reels & Influencer Video ',
            description: 'Convert more on social media',
            buttontextCard: 'Learn more',
        },
        {
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            buttontextCard: 'Learn more',
            image: `${process.env.PUBLIC_URL}/assets/images/pp-2.jpg`,
            title: 'Twilight Services',
            description: 'Illuminate your property with gorgeous twilight photos, video, and drone photo/video. '
        },
        {
            // tag: '',
            // time: '',
            // author: '',
            // date: '',
            buttontextCard: 'Learn more',
            image: `${process.env.PUBLIC_URL}/assets/images/pp-3.png`,
            title: 'Listing Copywriting',
            description: 'Breathtaking pictures and videos showcase your listing, but words fill in the gaps by explaining what makes that space a home.'
        }
    ]

    const recentlyPostData = [
        {
            tag: 'Social media',
            time: '3 min read',
            author: 'Brendan Hsu',
            date: '7.14.2021',
            image: `${process.env.PUBLIC_URL}/assets/images/rp-1.png`,
            title: 'Ceres Online Services Limited Ranked As Top 20 Digital Marketing Agency in California',
            description: 'Ceres Online Services Limited has been recognized as a Top 20 Digital Marketing Agency in San Francisco in 2021 by DesignRush.'
        },
        {
            tag: '',
            time: '5 min read',
            author: 'Ashley Hemmingway',
            // date: '7.14.2021',
            image: `${process.env.PUBLIC_URL}/assets/images/rp-2.png`,
            title: 'How to Get 10,000+ Views on Your Real Estate Listing',
            description: 'Zillow analyzed listings with more than 10,000 views, and this is what those agents are doing right: A listing is only as strong as its photos'
        },
        {
            tag: '',
            time: '3 min read',
            author: 'Ashley Hemmingway',
            // date: '7.14.2021',
            image: `${process.env.PUBLIC_URL}/assets/images/rp-3.png`,
            title: '15 Words Proven to Increase the Selling Price of Your Listings',
            description: 'While quality photos will help your real estate listing tremendously, a great written description can do wonders as well. According to Zillow.com, these 15 adjectives could make the difference between asking price and your best sale of the year!'
        }
    ]
    const tickerImages = [`${process.env.PUBLIC_URL}/assets/images/ticker-1.svg`, `${process.env.PUBLIC_URL}/assets/images/ticker-2.svg`]

    return (
        <div>
            <BackgroundImageBanner
                image={`${process.env.PUBLIC_URL}/assets/images/men-banner-1.svg`}
                title='Bring your medical communication'
                label='projects to life on a global scale.'
                description="We provide precise medical writing and regulatory documentation, delivered on time, with clear messaging, and within budget."
                buttonText='What we offers'
                tickerImages={tickerImages}
            />
            <ContentActionBanner
                title='Start’s from experiments till goto Market Strategy'
                description='Helping Pharma, biotech, and medical device companies with one window solutions by our experts '
                footer={<AppButton buttonText="Get in Touch" />}

            />

            <ServicesPanel />
            {/* <CircularImageCardPanel
                title='PROFESSIONAL PACKAGES'
                buttontext='Explore Pricing'
                cardItems={professionalPackagesData}
            /> */}
            {/* <div className={clsx(!(mobileWidth || tabletWidth) && 'professional-section')}>
                <CircularImageCardPanel
                    title='PROFESSIONAL PACKAGES'
                    buttontext='Explore Pricing'
                    cardItems={professionalPackagesData}
                />
            </div>
            <CircularImageCardPanel
                title='POPULAR SERVICES'
                buttontext='Explore Pricing'
                cardItems={popularServicesData}
            />
            <div>
                <VideoContentSection />
            </div>
            <div>
                <Carousel />
            </div>
            <CircularImageCardPanel
                title='RECENTLY POSTED'
                buttontext='More Posts'
                cardItems={recentlyPostData}
            />
            <FaqsAndContactSection />
           
            <Partners /> */}
        </div>
    )
}
export default HomePage