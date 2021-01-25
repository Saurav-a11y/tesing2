import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { CustomButton } from "../../Components/CustomButton/CustomButton";
import { NavigationButton } from "../../Components/NavigationButton/NavigationButton";
import { fetchProfileListAsync } from "../../Redux/ProfileDataList/profielDataAction";
export const HomePage = () => {
  const [activeState, setActiveState] = useState([0]);
  const dispatch = useDispatch();
  const { profileList, activeSocialMediaType } = useSelector(
    (state) => state.profileData
  );
  const profiles = Object.keys(profileList).map(
    (key) => profileList[activeSocialMediaType]
  );

  useEffect(() => {
    dispatch(fetchProfileListAsync());
  }, [fetchProfileListAsync]);

  useEffect(() => {
    setActiveState(profiles[0]);
  }, [profiles[0]]);

  console.log(
    "showing list of active social media type",
    activeSocialMediaType
  );
  return (
    <div className="home-page">
      <div className="button-group">
        <NavigationButton />
      </div>
      <div className="activeComponent">
        {activeState ? <CardComponent data={activeState} /> : ""}
      </div>
    </div>
  );
};
