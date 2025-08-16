// components/PlatformStats.js
import React from "react";

export default function PlatformStats() {
  return (
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div className="p-4 border rounded shadow-sm">
            <i className="bi bi-graph-up text-success fs-3 mb-2"></i>
            <h5 className="fw-bold mb-0">$2.4B+</h5>
            <p className="text-muted mb-0 small">Assets Under Management</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-4 border rounded shadow-sm">
            <i className="bi bi-people text-success fs-3 mb-2"></i>
            <h5 className="fw-bold mb-0">10M+</h5>
            <p className="text-muted mb-0 small">Active Investors</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-4 border rounded shadow-sm">
            <i className="bi bi-star text-success fs-3 mb-2"></i>
            <h5 className="fw-bold mb-0">98.5%</h5>
            <p className="text-muted mb-0 small">Success Rate</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-4 border rounded shadow-sm">
            <i className="bi bi-globe text-success fs-3 mb-2"></i>
            <h5 className="fw-bold mb-0">24/7</h5>
            <p className="text-muted mb-0 small">Market Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}
