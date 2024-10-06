import * as React from "react";
import PartnerTicker, { PartnerTickerItem } from "./Ticker";

const Partners = (props) => {
  const { images } = props
  return (
    <div className="w-100">
      <PartnerTicker >
        {images && images.map((image, i) => {
          return <PartnerTickerItem key={i} icon={image} iconAlt={i} />
        })}
      </PartnerTicker>
    </div>
  );
};

export default Partners;
