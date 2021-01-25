import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { DashboardPage } from "./Pages/DashboarPage/DashboardPage";
import { ComparisionPage } from "./Pages/ComparisonPage/ComparisionPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileListAsync } from "./Redux/ProfileDataList/profielDataAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileListAsync());
  }, [fetchProfileListAsync]);
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/comparision" component={ComparisionPage} />
      </div>
    </Router>
  );
}

export default App;
