import React, { useState } from "react";
import "./styles.css";

import MainLayout from "./components/UI/MainLayout";
import MainContent from "./components/MainContent";
import RightRail from "./components/RightRail";
import Recommendations from "./components/Modal";

const Data = [
  {
    realtorInfo: {
      title: "Sales Representative",
      name: "Guy Lastname PREC",
      company: "Glacier Realty Group",
      phone: "604-123-456",
      email: "Guy@glacierRealty.com"
    },
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: [
      { title: "Type", content: "Condo" },
      { title: "Construction Status", content: "Pre-Construction" },
      { title: "Sales Status", content: "Registration" },
      { title: "Completion Date", content: 2022 }
    ],
    recommendations: [
      {
        date: "10/27/20",
        content: "Listed and Sold a house in North Vancouver for Kim in 2019."
      },
      {
        date: "10/27/20",
        content: "Helped Corey to buy and sell a home(s) in Vancouver in 2020."
      },
      {
        date: "10/27/20",
        content:
          "Listed and Sold a house in West Vancouver for Michelle in 2019."
      },
      {
        date: "10/27/20",
        content: "LIsted and Sold a lot in Langley for Chris in 2019."
      }
    ]
  }
];
export default function App() {
  const [isModal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleOpen = () => setModal(true);

  return (
    <>
      <MainLayout
        left={
          <MainContent
            realtorInfo={Data[0].realtorInfo}
            des={Data[0].des}
            numOfComm={Data[0].recommendations.length}
            onClick={handleOpen}
          />
        }
        right={<RightRail data={Data[0].status} />}
      />
      <Recommendations
        show={isModal}
        onHide={handleClose}
        onClick={handleClose}
        data={Data[0].recommendations}
      />
    </>
  );
}
