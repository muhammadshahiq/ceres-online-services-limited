import React, { useEffect } from 'react'
import './team.page.scss';
import { scrollToTop } from '../../components/common/utill/utils';
import CircularImageCardPanel from '../../components/common/circular.image.card.panel/circular.image.card.panel';

const TeamPage = () => {

    useEffect(() => {
        scrollToTop()
    }, [])

    const teamExpertsData = [
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/shaista-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Shaista Munshi",
            label: 'Director MS Physcology ',
            description: "Sheffield University UK",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/zahid-ashraf-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Zahid Ashraf",
            label: 'CIO & Digital Health Leader',
            description: "Mckenzie top50 award winning CTO",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/scott-mudi-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Scott Mudie",
            label: 'Sales Director',
            description: "Driving strategic growth and leading our sales team to deliver exceptional results and customer success.",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/emely-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Dr. Emily Harris",
            label: 'Director of Research & Development',
            description: "Leads cutting-edge research in cancer treatment",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/james-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Dr. James Patel",
            label: 'Head of Surgical Department',
            description: "Manages the surgical team, sets policies and procedures for the department",
            linkText: "Learn More",
        },
        {
            // tag: "",
            // titleIconSrc: `${process.env.PUBLIC_URL}/assets/images/girl-avatar.png`,
            avatar: `${process.env.PUBLIC_URL}/assets/images/sophia-pic.png`,
            // image: `${process.env.PUBLIC_URL}/assets/images/p-1.png`,
            title: "Dr. Sophia Martinez",
            label: 'Clinical Lead for Chronic Diseases Management',
            description: "Spearheads initiatives in diabetes and hormone-related diseases",
            linkText: "Learn More",
        }
    ]

    return (
        <div>
            <div>
                <CircularImageCardPanel
                    maxWidth='lg'
                    title='Meet Our Team of Experts'
                    description="From discovery to delivery, we craft the science that changes lives."
                    topHeaderImage={`${process.env.PUBLIC_URL}/assets/images/dr-teams.png`}
                    cardItems={teamExpertsData}
                    buttonText="Join Our Team"
                    redirect="/career"
                />
            </div>
        </div>
    )
}
export default TeamPage