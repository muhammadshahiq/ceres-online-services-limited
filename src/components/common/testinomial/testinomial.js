import './testinomial.scss'
import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { IsMobileWidth, IsTabletWidth } from '../../../components/common/utill/utils';
import clsx from 'clsx';
import AppButton from "../app.button/app.button";

const Testinomial = (props) => {
  const mobileWidth = IsMobileWidth()
  const tabletWidth = IsTabletWidth()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testinomialData = [
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    },
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    },
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    },
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    },
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    },
    {
      buttonText: "Testimonials",
      label: "Our valuable client feedback",
      content: "We have enjoyed working with the team, who are friendly and professional, and provide high-quality deliverables on time, whilst maintaining their flexibility to accommodate our business needs. We highly recommend Ceres Online Services Ltd and their team."
    }
  ]

  return (
    <div className='pt-5 pb-5 overflow-hidden'>
      <Slider {...settings} className="d-flex justify-content-center pt-3 pb-3 mt-3 mb-3">
        {testinomialData && testinomialData.map((data, index) => {
          return <div key={index} className='w-100 text-center d-flex justify-content-center'>
            <div className="w-80 position-relative">
              <div>
                <AppButton buttonText={data && data.buttonText} buttonTheme="ROUNDED" />
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'body1', tabletWidth && 'body2', mobileWidth && 'body3')} className="pt-2 pb-2">
                  {data && data.label}
                </Typography>
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h4', tabletWidth && 'h5', mobileWidth && 'h6')} className="pt-2 pb-2">
                  {data && data.content}
                </Typography>
              </div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  )
}

export default Testinomial