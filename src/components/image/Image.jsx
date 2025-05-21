import React, { useState } from "react";
import { Image } from "antd";
import "./style.css";

const ImageLoading = ({ src, alt = "", className = "min-h-[240px]" }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 bg-gray-300 image-scelaton"></div>
      )}
      <Image
        className={`${loading ? "none" : "block"} w-full h-full`}
        onLoad={() => setLoading(false)}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageLoading;
