import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyle } from './expandable.view.style';
import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-scroll';
// import { useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mui/material';

export default function ExpandableView(props) {
    const classes = useStyle()
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // const navigate = useNavigate();

    // const redirect = (url) => {
    //     navigate(url);
    // };
    const faqs = [
        {
            question: `Therapeutic areas`,
            // answer: `Expected Turnaround Time:`,
            detailItems: [
                {
                    // title: 'We specialize in real estate marketing content, which includes:',
                    descriptions: [
                        {
                            listItem: 'Gene therapy',
                            pathName: '/'
                        },
                        {
                            listItem: 'Immuno-oncology',
                            pathName: '/therapeutic-areas'
                        },
                        {
                            listItem: 'Infectious diseases',
                            pathName: '/therapeutic-areas'
                        },
                        {
                            listItem: 'Rare diseases',
                            pathName: '/therapeutic-areas'
                        },
                        {
                            listItem: 'Women’s health',
                            pathName: '/therapeutic-areas'
                        },
                        {
                            listItem: 'Vaccines',
                            pathName: '/therapeutic-areas'
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <div className='w-100'>
            {faqs && faqs.map((data, index) => {
                return <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    // sx={{
                    //     background: expanded === index ? 'rgb(241, 242, 251)' : '#fff', // Change background color based on expansion
                    // }}
                    className={clsx(classes.accordion)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='text-dark pt-0 pb-0' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        classes={{ content: classes.accordionSummaryContent }}
                    >
                        <Typography
                            sx={{
                                // Normal text style
                                color: 'primary.main',
                                // '&:hover': {
                                //     // Text becomes bold on hover
                                //     fontWeight: '600',
                                // },
                            }}
                            variant='body3' className='text-right d-flex justify-content-end'>
                            {data.question && data.question}
                        </Typography>
                        {/* <Typography variant='body1' className='text-dark mb-2'>{data.question && data.question}</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails className='pt-0 pb-0'>
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
                                        return <div key={ind} className='w-100 text-right'>
                                            <Link className='w-100 text-right' onClick={() => props.redirect(list.pathName)} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                                <Button variant="none" className={clsx(classes.textStyle, "text-transform-none w-100 text-right d-flex justify-content-end")}>
                                                    {list.listItem && list.listItem}
                                                </Button>
                                            </Link>
                                            <div className='w-100 d-flex justify-content-center align-items-center'>
                                                <Divider sx={{ width: '100%', backgroundColor: '#ACACAC' }} />
                                            </div>
                                        </div>
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
