import React from "react";
import Button from "@material-ui/core/Button";

export const CustomButton = ({ name, onClickHandle }) => {
  return (
    <Button
      value={name}
      variant="outlined"
      color="primary"
      size="small"
      onClick={onClickHandle}
    >
      {name}
    </Button>
  );
};
