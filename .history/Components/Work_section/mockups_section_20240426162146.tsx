import React from "react";
import Image from "next/image";

export default function MockupsSection(props) {
  const { imageLink } = props;

  return (
    <div>
      <Image src={imageLink} alt="mockup" width={1000} height={1000}></Image>
    </div>
  );
}
