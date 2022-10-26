import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};