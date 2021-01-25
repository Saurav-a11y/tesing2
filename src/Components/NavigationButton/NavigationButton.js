import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProfileList } from "../../Redux/ProfileDataList/profielDataAction";
import { CustomButton } from "../CustomButton/CustomButton";

export const NavigationButton = () => {
  const dispatch = useDispatch();
  const { profileList } = useSelector((state) => state.profileData);
  const profiles = Object.keys(profileList).map((key) => profileList[key]);

  const onClickHandle = (e, index) => {
    e.preventDefault();

    dispatch(setSingleProfileList(profiles[index]));
  };

  return (
    <div>
      <CustomButton
        name="Instagram"
        onClickHandle={(e) => onClickHandle(e, 0)}
        index={0}
      />
      <CustomButton
        name="Facebook"
        onClickHandle={(e) => onClickHandle(e, 1)}
        index={1}
      />
      <CustomButton
        name="Twitter"
        onClickHandle={(e) => onClickHandle(e, 2)}
        index={2}
      />
    </div>
  );
};
