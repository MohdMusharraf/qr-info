import React from "react";
import "./splineEx.css";
import Spline from '@splinetool/react-spline';

export default function SplineEx() {
  return (
    <div className="spline-css">
        <Spline className="spline-scene" scene="https://prod.spline.design/d8O54ldC5I6dpCNN/scene.splinecode" />
    </div>
  );
}
