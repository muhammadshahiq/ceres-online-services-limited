import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyle } from './expandable.view.style';
import { useState } from 'react';
import clsx from 'clsx';

export default function ExpandableView(props) {
    const classes = useStyle()
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const faqs = [
        {
            question: `Why Ceres Online Services Limited?`,
            answer: `Ceres Online Services Limited is your edge to streamlining your business and standing out in a crowded marketplace. We provide you with an end-to-end solution to help put your listings on the market for top dollar, increase your exposure, and ultimately build your brand. We have an in-house team that delivers for you photos, video, drone, 3D, websites, print, and leads. All delivered as fast as next-day. You can always call or text our team at any time and expect a prompt answer. We’re industry experts and solution-oriented. And because we have an in-house team, we are able to provide consistent quality at a wholesale rate - and more so unmatched value and innovation as your dedicated marketing team.`,
        },
        {
            question: `What services do you offer?`,
            // answer: `Expected Turnaround Time:`,
            detailItems: [
                {
                    title: 'We specialize in real estate marketing content, which includes:',
                    descriptions: [
                        {
                            listItem: 'Photography'
                        },
                        {
                            listItem: 'Videography'
                        },
                        {
                            listItem: 'Aerial Drone Photos/Video'
                        },
                        {
                            listItem: '3D Matterport Virtual Tour'
                        },
                        {
                            listItem: '2D Floor Plans'
                        },
                        {
                            listItem: 'Social Media Photo/Video Edits'
                        },
                        {
                            listItem: 'Dedicated Listing Websites'
                        },
                        {
                            listItem: 'Web Development'
                        },
                        {
                            listItem: 'Creative Branding/Storytelling'
                        },
                        {
                            listItem: 'Client Testimonials'
                        },
                        {
                            listItem: 'High-end Video Productions'
                        },
                        {
                            listItem: 'Design and more'
                        }
                    ]
                }
            ]
        },
        {
            question: `When do I get my photos/video (deliverables)?`,
            answer: `Expected Turnaround Time:`,
            detailItems: [
                {
                    title: 'One (1) business day:',
                    descriptions: [
                        {
                            listItem: 'Photographs (next-day before noon)'
                        },
                        {
                            listItem: 'Twilight and/or Virtual Twilight Photographs'
                        },
                        {
                            listItem: '3D Virtual Tours'
                        },
                        {
                            listItem: 'Dedicated Listing Websites'
                        }
                    ]
                },
                {
                    title: 'Two (2) business days:',
                    descriptions: [
                        {
                            listItem: 'Three (3) business days:'
                        },
                        {
                            listItem: 'Five (5) business days:'
                        },
                        {
                            listItem: 'Variable turnaround times:'
                        }
                    ]
                }
            ]
        },
        {
            question: `How do I schedule a shoot?`,
            answer: `To schedule a shoot, simply place an order in our portal found at: 
            Or call our project management line at 650-241-0095 ext. 3 and our team will consult you on our services, availability, and provide you confirmation on the shoot.`,
        },
        {
            question: `What do you charge?`,
            answer: `Our rates are very competitive for the quality of product we produce. Our pricing is transparent and can be found on our website
            Pricing for our major services is competitive to each market and dependent on where your project is and usually increases with the quality, size, and scope of the project.`,
        },
        {
            question: `How can I get help?`,
            answer: `We’re here to support you on everything real estate marketing. You can talk to a human being at any time through a phone call, email, and even chat!`,
        },
        {
            question: `What makes Ceres Online Services Limited unique?`,
            answer: `Ceres Online Services Limited is a full end-to-end solution to maximize your listings on the market, get you more exposure, and build your real estate brand. You can expect consistent quality and quick turnaround on photos, video, drone, 3D, websites, print/design, and more. Our dedicated team of project managers, creatives, and editors, becomes an extension of your own team - your competitive advantage. We innovate on your behalf, so marketing is the last thing holding you back from winning your next listing.`,
        },
    ]

    return (
        <div>
            <Typography className='text-dark font-weight-bold' variant='h2'>
                GOT QUESTIONS?
                WE GOT ANSWERS
            </Typography>
            {faqs && faqs.map((data, index) => {
                return <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    sx={{
                        background: expanded === index ? 'rgb(241, 242, 251)' : '#fff', // Change background color based on expansion
                    }}
                    className={clsx(classes.accordion)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='text-dark' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='body1' className='text-dark mb-2'>{data.question && data.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {data.answer ?
                            <Typography className='text-dark' variant='body2'>
                                {data.answer && data.answer}
                            </Typography> : null
                        }
                        {data && data.detailItems && data.detailItems.map((item, i) => {
                            return <div key={i}>
                                <Typography className='text-dark' variant='body2'>
                                    {item.title && item.title}
                                </Typography>
                                {
                                    item && item.descriptions && item.descriptions.map((list, ind) => {
                                        return <ul key={ind}>
                                            <li>
                                                <Typography variant='body2' className='text-dark'>
                                                    {list.listItem && list.listItem}
                                                </Typography>
                                            </li>
                                        </ul>
                                    })
                                }
                            </div>
                        })}
                    </AccordionDetails>
                </Accordion>
            })}
        </div >
    );
}
