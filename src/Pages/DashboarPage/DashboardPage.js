import { Typography } from "@material-ui/core";
import React from "react";
import { NavigationButton } from "../../Components/NavigationButton/NavigationButton";

export const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="button-group">
        <NavigationButton />
      </div>
      <h3>this is dashboard page </h3>
    </div>
  );
};
