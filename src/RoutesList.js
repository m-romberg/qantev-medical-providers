import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProviderDetails from "./ProviderDetails";
import Homepage from "./Homepage";

/**
 * RoutesList
 *
 * Holds routes for app
 *
 * state:
 *     none
 *
 *
 * App --> RoutesList --> { Homepage, ProviderDetails }
 */

function RoutesList() {


  return (
  <div className="RoutesList">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/providers/:provider" element={<ProviderDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </div>);
}

export default RoutesList;