import './testinomial.v2.scss'
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import CircularImageCard from '../circular.image.card/circular.image.card';
import { useStyle } from './testinomial.v2.style';

const TestinomialV2 = (props) => {
  const { title, description } = props
  const mobileWidth = IsMobileWidth()
  const tabletWidth = IsTabletWidth()
  const classes = useStyle()
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: !(mobileWidth || tabletWidth) ? 3 : tabletWidth ? 2 : mobileWidth ? 1 : 3,
    slidesToScroll: !(mobileWidth || tabletWidth) ? 3 : tabletWidth ? 2 : mobileWidth ? 1 : 3,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear"
  };

  const testinomialData = [
    {
      title: "Literature Searches",
      description: "We perform targeted literature searches across several scientific databases including PubMed, Scopus, Google Scholar, and EMBASE to ensure we have the most relevant and recent references to support your medical communications deliverables and identify any gaps in research and knowledge."
    },
    {
      title: "Medical Manuscripts",
      description: "Being experienced medical communication writers, we can provide different types of medical manuscripts including: clinical trials, case studies, and reviews. At Bham Pharma, we work with you to turn your data into a clear story. With our comprehensive quality control, we can maximise your chances of getting your manuscript accepted."
    },
    {
      title: "Clinical Trial Application (CTA)",
      description: "From the cover letter to the investigational medicinal product dossier, our team can help collate everything you need for a smooth submission."
    },
    {
      title: "Literature Searches",
      description: "We perform targeted literature searches across several scientific databases including PubMed, Scopus, Google Scholar, and EMBASE to ensure we have the most relevant and recent references to support your medical communications deliverables and identify any gaps in research and knowledge."
    },
    {
      title: "Medical Manuscripts",
      description: "Being experienced medical communication writers, we can provide different types of medical manuscripts including: clinical trials, case studies, and reviews. At Bham Pharma, we work with you to turn your data into a clear story. With our comprehensive quality control, we can maximise your chances of getting your manuscript accepted."
    },
    {
      title: "Clinical Trial Application (CTA)",
      description: "From the cover letter to the investigational medicinal product dossier, our team can help collate everything you need for a smooth submission."
    }
  ]

  return (
    <div className='pt-5 pb-5 overflow-hidden'>
      <Container maxWidth='md'>
        <div className={clsx(!(mobileWidth || tabletWidth) && "pt-1 pb-1 w-100", (mobileWidth || tabletWidth) && 'pt-2 pb-2 w-100 d-flex flex-column justify-content-center align-items-center')}>
          <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 text-center')}
            variant={clsx(!(mobileWidth || tabletWidth) && 'h2', tabletWidth && 'h4', mobileWidth && 'h6')}>
            {title ? title : ''}
          </Typography>
          {description ?
            <Typography className={clsx(classes.textStyle, 'pt-2 pb-2 text-center')}
              variant={clsx(!(mobileWidth || tabletWidth) && 'body1', tabletWidth && 'body1', mobileWidth && 'body2')}>
              {description}
            </Typography> : null
          }
        </div>
      </Container>
      <Slider {...settings} className="d-flex justify-content-center pt-3 pb-3 mt-3 mb-3">
        {testinomialData && testinomialData.map((item, index) => {
          return <div key={index} className='d-flex justify-content-start pt-4 pb-4 pl-2 pr-3'>
            <CircularImageCard
              title={item && item.title}
              description={item && item.description}
              minHeight={230}
            />
          </div>
        })}
      </Slider>
    </div >

  )
}

export default TestinomialV2