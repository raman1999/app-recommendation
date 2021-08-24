import React, { useState } from "react";
import "./styles.css";

const mobileApps = {
  Educational: [
    { name: "Flipboard", rating: "4.0/5" },
    { name: "Babble", rating: "3.2/5" },
    { name: "Buzzfeed", rating: "4/5" }
  ],
  Social: [
    { name: "Whatsapp", rating: "4.6/5" },
    { name: "Instagram", rating: "4/5" },
    { name: "Facebook", rating: "3.8/5" }
  ],
  Lifestyle: [
    { name: "Tripadvisor", rating: "4.4/5" },
    { name: "Elevate", rating: "4.6/5" },
    { name: "Fabulous", rating: "4.5/5" }
  ],

  Games: [
    { name: "Temple-Run", rating: "4.3/5" },
    { name: "Pokemon Go", rating: "4.2/5" },
    { name: "Hill Climb Racing", rating: "4.3/6" }
  ],
  Entertainment: [
    { name: "Netflix", rating: "4.3/5" },
    { name: "Podcast One", rating: "2.3/5" },
    { name: "Youtube", rating: "4.3/5" }
  ]
};

export default function App() {
  const [selectedCategoryItem, setCategoryItem] = useState("Educational");
  const mobileAppArray = Object.keys(mobileApps);
  function categoryClickHandler(mobileAppCategory) {
    setCategoryItem(mobileAppCategory);
  }
  return (
    <div className="App">
      <h1>📱 Mobile Apps</h1>
      <div id="container">
        <h4>Select a category to view recommendations</h4>
        {mobileAppArray.map((mobileApp) => {
          return (
            <button
              key={mobileApp}
              onClick={() => categoryClickHandler(mobileApp)}
            >
              {mobileApp}
            </button>
          );
        })}
        <ul>
          {mobileApps[selectedCategoryItem].map((app) => (
            <li id="listItem" key={app.name}>
              <div id="name">{app.name}</div>{" "}
              <div id="rating">{app.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
