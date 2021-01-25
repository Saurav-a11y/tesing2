import React, { useState } from "react";
import "./style.css";
export const PreviewImage = () => {
  const [bannerPreviewUrl, setBannerPreviewUrl] = useState("");
  const [logoPreviewUrl, setLogoPreviewUrl] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    brand: "",
    logo: "",
    banner: "",
  });
  const restForm = () => {
    setFormValues({
      name: "",
      email: "",
      brand: "",
      logo: "",
      banner: "",
    });
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("values submiting", formValues);
    restForm();
    setLogoPreviewUrl("");
    setBannerPreviewUrl("");
  };
  const handleChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log("setting values", formValues);
  };

  const _handleBannerImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFormValues((prevState) => ({
        ...prevState,
        banner: file,
      }));
      setBannerPreviewUrl({
        bannerPreviewsUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFormValues((prevState) => ({
        ...prevState,
        logo: file,
      }));
      setLogoPreviewUrl({
        logoPreviewsUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
    console.log(file);
  };

  let { logoPreviewsUrl } = logoPreviewUrl;
  let { bannerPreviewsUrl } = bannerPreviewUrl;

  const logoImg = {
    backgroundImage: `url(${logoPreviewsUrl})`,
    height: "250px",
    border: "1px solid",
    width: "500px",
  };
  const bannerImg = {
    backgroundImage: `url(${bannerPreviewsUrl})`,
    height: "250px",
    border: "1px solid",
    width: "500px",
  };
  console.log("previewing", logoPreviewsUrl);
  return (
    <div className="previewComponent">
      <form onSubmit={(e) => _handleSubmit(e)}>
        <input
          name="name"
          value={formValues.name}
          className="fileInput"
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          value={formValues.email}
          className="fileInput"
          type="text"
          onChange={handleChange}
        />
        <input
          name="brand"
          value={formValues.brand}
          className="fileInput"
          type="text"
          onChange={handleChange}
        />
        <div className="logo-img">
          <input
            name="logo"
            style={logoImg}
            type="file"
            onChange={(e) => _handleImageChange(e)}
            value=""
          />
        </div>
        <input
          name="banner"
          style={bannerImg}
          type="file"
          onChange={(e) => _handleBannerImageChange(e)}
          value=""
        />
        <button
          className="submitButton"
          type="submit"
          onClick={(e) => _handleSubmit(e)}
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default PreviewImage;
