import React, { useState } from "react";
import "./ImagePicker.css";

export const FuncImgPic = () => {
  const [logoImg, setLogoImg] = useState({
    logo: "",
    loading: "",
  });
  const [featuredImg, setFeaturedImg] = useState({
    banner: "",
    loading: "",
  });
  const [fullScreen, setFullScreen] = useState("");
  const handleFileChange = (event) => {
    const { target } = event;
    const { files, name } = target;
    console.log(name);
    if (files && files[0]) {
      var reader = new FileReader();

      reader.onloadstart = () => {
        setLogoImg({ loading: true });
      };

      reader.onload = (event) => {
        setLogoImg({
          logo: event.target.result,
          loading: false,
        });
      };

      reader.readAsDataURL(files[0]);
    }
  };
  const handleFileChangeFeaturedImg = (event) => {
    console.log("this is fired");
    const { target } = event;
    const { files, name } = target;
    console.log(name);
    if (files && files[0]) {
      var reader = new FileReader();

      reader.onloadstart = () => {
        setFeaturedImg({ loading: true });
      };

      reader.onload = (event) => {
        setFeaturedImg({
          banner: event.target.result,
          loading: false,
        });
      };

      reader.readAsDataURL(files[0]);
    }
  };
  const handlePreviewClick = () => {
    if (!logoImg.logo || !featuredImg.banner) {
      return;
    }
    setFullScreen({ fullScreen: !fullScreen });
  };
  const handleClearClick = () => {
    setLogoImg({
      data: null,
    });
    setFullScreen({
      fullScreen: false,
    });
  };
  console.log(logoImg);
  console.log(featuredImg);
  const backgroundImage = logoImg.logo
    ? { backgroundImage: `url(${logoImg.logo})` }
    : null;
  const featuredImage = featuredImg.banner
    ? { backgroundImage: `url(${featuredImg.banner})` }
    : null;

  return (
    <div className="imgPicker">
      <div>
        <input
          id="car"
          name="car"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div
          className="preview"
          style={backgroundImage}
          onClick={handlePreviewClick}
        >
          {!logoImg.logo && !logoImg.loading && (
            <label htmlFor="car">Click to capture</label>
          )}

          {logoImg.loading && <span>Loading...</span>}
        </div>

        <button type="button" onClick={handleClearClick}>
          Clear Image
        </button>
      </div>
      <div>
        <input
          id="bike"
          name="bike"
          type="file"
          accept="image/*"
          onChange={handleFileChangeFeaturedImg}
        />

        <div
          className="preview"
          style={featuredImage}
          onClick={handlePreviewClick}
        >
          {!featuredImg.banner && !featuredImg.loading && (
            <label htmlFor="car">Click to capture</label>
          )}

          {featuredImg.loading && <span>Loading...</span>}
        </div>

        <button type="button" onClick={handleClearClick}>
          Clear Image
        </button>
      </div>
    </div>
  );
};
