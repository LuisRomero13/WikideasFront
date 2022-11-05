import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages";
import { NewTheme } from "../pages/NewTheme";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="crearTema" element={<NewTheme />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
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

const Layout = () => {
  return (
    <>
      <Navbar  />
      <Outlet />
    </>
  );
};