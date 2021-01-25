import React, { useState } from "react";
import ImageUploader from "react-images-upload";

export const ReactUpload = () => {
  const [picture, setPicture] = useState({});
  const onDrop = (picture) => {
    setPicture({
      pictures: picture.concat(picture),
    });
    console.log(picture);
  };
  return (
    <div>
      <h6> helo from react ReactUpload </h6>
      <ImageUploader
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview
        label=""
        withIcon={false}
        defaultImage="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.pngall.com%2Favengers-png&psig=AOvVaw0rcmyqIuneLypK22GfFYpn&ust=1610268140815000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjFura6ju4CFQAAAAAdAAAAABAD"
      />
    </div>
  );
};
