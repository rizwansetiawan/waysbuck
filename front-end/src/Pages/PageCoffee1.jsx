import React from "react";
import DetailLayouts from "../components/Layouts/DetailLayouts";
import DetailCoffee from "../components/Fragments/DetailCoffee";
const PageCoffee1 = () => {
  return (
    <DetailLayouts name="coffee1">
      <DetailCoffee type="coffee1" />
    </DetailLayouts>
  );
};

export default PageCoffee1;
