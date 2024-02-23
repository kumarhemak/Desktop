import React from "react";

import { Header } from "../Header";
import { ChartListWrapper } from "../ChartListWrapper";
import { Device } from "../Device/device";

const Home = () => {
  return (
    <>
      <Device>
        <Header />
        <ChartListWrapper />
      </Device>
      ;
    </>
  );
};

export { Home };
