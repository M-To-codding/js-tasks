import React from "react";
import CustomButton from "./components/CustomButton";

const sortingData = [
  {
    type: "price",
    value: "price"
  },
  {
    type: "count",
    value: "count"
  }
];

function SortDropdown({selectedFilter, selectFilterOnClick}) {
  const sortingButtons = <>
    {
      sortingData.map((item) => {
        return (
          <CustomButton
            onClickAction={() => selectFilterOnClick(item.value)}
            theme={selectedFilter === item.value ?
              {
                backgroundColor: 'green',
                color: 'white'
              } : {
                backgroundColor: 'white',
                color: 'black'
              }}
            text={`sort by ${item.type} ^`}
            // customOptions
            key={item.value}
            type="button"
            value={item.value}
          />
        )
      })
    }
  </>;

  return (
    <article className="dropdown">
      {sortingButtons}

      <CustomButton
        key="reset-btn"
        onClickAction={() => selectFilterOnClick(null)}
        theme={{color: '#fff', backgroundColor: 'gray'}}
        type="button"
        text="reset sorting"
      />
    </article>
  )
}

export default SortDropdown;