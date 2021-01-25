import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";
import "./styles.css";
import { connect, useSelector } from "react-redux";
import { fetchProfileListAsync } from "../../Redux/ProfileDataList/profielDataAction";
import profileDataReducer from "../../Redux/ProfileDataList/profileDataReducer";
import { SearchBox } from "../SearchBox.js/SearchBox";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Directior",
    selector: "director",
    sortable: true,
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: true,
    right: true,
  },
];
const onRowClicked = () => {
  alert("row is clicked");
};
const onSelectedRowsChange = () => {
  alert("seleted row is clicked");
};
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };
console.log(selectableRowsComponentProps);
const handleChange = (state) => {
  // You can use setState or dispatch with something like Redux so we can use the retrieved data
  console.log("Selected Rows: ", state.selectedRows);
};

const ProfileDataTable = ({ fetchProfileListAsync }) => {
  const [filteredData, setFilteredData] = useState({});
  const { loading, profileList } = useSelector((state) => state.profileData);

  const handleChange = (e) => {
    setFilteredData({ searchField: e.target.value });
    console.log(filteredData);
  };

  const searchedData = profileList.filter((profile, filteredData) =>
    profile.title.toLowerCase()
  );
  console.log(searchedData);
  useEffect(() => {
    fetchProfileListAsync();
  }, [fetchProfileListAsync]);

  return (
    <div className="App">
      <Card>
        <SearchBox placeholder="search user" handleChange={handleChange} />
        <DataTable
          title
          columns={columns}
          data={searchedData ? searchedData : profileList}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectableRowsComponentProps}
          striped
          Clicked
          onSelectedRowsChange={handleChange}
        />
      </Card>
    </div>
  );
};

export default connect(null, { fetchProfileListAsync })(ProfileDataTable);
