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
 * - none
 *
 * props:
 * - providers: array of providers [{address, name, id,...},...]
 *
 *
 * App --> RoutesList --> { Homepage, ProviderDetails }
 */

function RoutesList({ providers }) {


  return (
  <div className="RoutesList">
    <Routes>
      <Route path="/home" element={<Homepage providers={providers} />} />
      <Route
        path="/providers/:providerId"
        element={<ProviderDetails providers={providers} />}
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </div>);
}

export default RoutesList;