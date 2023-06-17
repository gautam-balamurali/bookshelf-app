import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import SearchPage from "../../pages/search-page/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-books" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
