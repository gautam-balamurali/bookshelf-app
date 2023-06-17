/* eslint-disable */

import AppRoutes from "../../../core/app-routes/AppRoutes";
import Header from "../header/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <section className="section">
        <AppRoutes />
      </section>
    </div>
  );
};

export default AppLayout;
