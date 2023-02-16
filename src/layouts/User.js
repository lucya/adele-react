import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from 'userRoutes.js';

function User() {

  return (
    <>
      <div className="wrapper">
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={prop.layout + prop.path}
              />
            )
          })}

        </Routes>
      </div>
    </>
  )
}
export default User;