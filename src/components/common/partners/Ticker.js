import * as React from "react";
import './ticker.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const PartnerTickerItem = ({
  icon,
  iconAlt,
}) => {
  return (
    <div className="ticker-item-container">
      {/* className={styles["ticker-item-normal-text"]} */}
      {/* <Image objectFit="contain" src={icon} alt={iconAlt} /> */}
      <LazyLoadImage
        src={icon}
        height='60px'
        effect="blur"
        width='120px'
        alt={iconAlt}
      />
    </div>
  );
};
const PartnerTicker = (
  props
) => {
  const animation = `scroll 10s linear infinite`;
  return (
    <div className='ticker'>
      <div style={{ animation: animation, display: "flex" }}>
        <div className="ticker-list">{props.children}</div>
      </div>
    </div>
  );
};

export default PartnerTicker;
