import React, { lazy, useEffect } from 'react'
import './career.page.scss';
import { IsMobileWidth, IsTabletWidth, scrollToTop } from '../../components/common/utill/utils';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';
import BackgroundImageBanner from '../../components/common/background.image.banner/background.image.banner';
import clsx from 'clsx';
import { useStyle } from './career.page.style';

const CareerPage = () => {
    const tabletWidth = IsTabletWidth()
    const mobileWidth = IsMobileWidth()
    const classes = useStyle();
    useEffect(() => {
        scrollToTop()
    }, [])
    const ourlatestVacancies = [
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/align-center.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Regulatory Medical Writer",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        },
        {
            tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/message-icon.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Medical Communications Writer",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/film.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Creative Manager",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/mouse-pointer.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Project Manager",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/globe.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Marketing Manager",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        },
        {
            // tag: "",
            titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/layout.svg`,
            // avatar: ``,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Account Manager",
            description: "Full-time position - Salary dependant on experience - UK - Remote",
            linkText: "Find out more",
        }
    ]


    const tickerImages = [`${process.env.PUBLIC_URL}/assets/images/ticker-1.svg`, `${process.env.PUBLIC_URL}/assets/images/ticker-2.svg`]

    return (
        <div>
            <div className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <BackgroundImageBanner
                    image={`${process.env.PUBLIC_URL}/assets/images/career-banner.svg`}
                    title='Careers at Ceres Online'
                    label='Empowering Growth Through Collaboration'
                    description="Our team unites to achieve personal and professional goals, fostering a thriving environment for new talent to flourish and drive our business forward. Together, we embrace ambition and innovation!"
                    buttonText='Join our team'
                    tickerImages={tickerImages}
                    bannerHeight="550px"
                    descriptionWidth='w-90'
                />
            </div>
            <div id='team' className={clsx(!(mobileWidth || tabletWidth) && 'pl-4 pr-4 pt-4 pb-4', tabletWidth && 'pl-3 pr-3', mobileWidth && 'pl-2 pr-2')}>
                <CircularImageCardPanel
                    justifyContent="center"
                    title='Vacancies Title'
                    description="We are always looking for new talent to join the Bham Pharma team, so if you think you might be a good fit, and would like to start, or grow, your medical writing career, then get in touch, or check out our latest vacancies below. "
                    cardItems={ourlatestVacancies}
                />
            </div>
        </div>
    )
}
export default CareerPage