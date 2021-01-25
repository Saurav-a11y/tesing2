import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
export default function UploadButtons() {
  const classes = useStyles();
  const [logoImage, setLogoImage] = useState("");
  const [logoImagePreviewUrl, setLogoImagePreviewUrl] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [bannerImagePreviewUrl, setBannerImagePreviewUrl] = useState("");

  const onLogoImageHandeChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setLogoImage((prevState) => ({
        ...prevState,
        logo: file,
      }));
      setLogoImagePreviewUrl({
        logoPreviewsUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const onBannerImageHandeChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setBannerImage((prevState) => ({
        ...prevState,
        banner: file,
      }));
      setBannerImagePreviewUrl({
        bannerPreviewsUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  console.log("bannerPreview", bannerImagePreviewUrl);
  const uploadLogoImgButton = {
    height: "200px",
    width: "400px",
    border: "1px solid",
    backgroundImage: logoImage
      ? `url(${logoImagePreviewUrl.logoPreviewsUrl})`
      : "",
  };
  const uploadBannerImgButton = {
    height: "200px",
    width: "400px",
    border: "1px solid",
    backgroundImage: bannerImage
      ? `url(${bannerImagePreviewUrl.bannerPreviewsUrl})`
      : "",
  };
  return (
    <div className={classes.root}>
      <input
        name="logo"
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onLogoImageHandeChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          style={uploadLogoImgButton}
        >
          Upload Logo
        </Button>
      </label>
      <input
        name="banner"
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        multiple
        onChange={onBannerImageHandeChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          style={uploadBannerImgButton}
        >
          Upload Banner
        </Button>
      </label>
    </div>
  );
}
