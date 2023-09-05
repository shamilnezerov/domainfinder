import React from "react";
import styles from "./SearchTag.module.scss";
import SearchTag from "./SearchTag"; // SearchTag bileşenini içe aktardık

function MyComponent() {
  const data = [
    {
      id: 1,
      title: "development",
    },
    {
      id: 2,
      title: "agile",
    },
    {
      id: 3,
      title: "design",
    },
    {
      id: 4,
      title: "finance",
    },
    {
      id: 5,
      title: "startup",
    },
    {
      id: 6,
      title: "delivery",
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <SearchTag key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default MyComponent;
