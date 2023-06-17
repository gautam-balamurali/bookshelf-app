/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import SearchPage from "../../pages/search-page/SearchPage";
import PageNotFoundPage from "../../pages/page-not-found-page/PageNotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-books" element={<SearchPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
