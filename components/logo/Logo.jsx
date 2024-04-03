import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function LogoComponent(props) {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../img/${props.brandLogo}.png`);
      setImagePath(image.default);
    };

    loadImage();
  }, [props.brandLogo]);

  return (
    <div className=" w-[30px] h-[30px] ">
      {/* white circle around logo */}

      <div className="w-14 h-14 bg-white rounded-full"></div>

      {/* if image path shown, then shows brand image */}
      <div className="transform translate-x-[13px]">
        {imagePath && (
          <Image
            src={imagePath}
            alt={`Brand Logo ${props.brandLogo}`}
            className="transform translate-y-[-43px]"
          />
        )}
      </div>
    </div>
  );
}
