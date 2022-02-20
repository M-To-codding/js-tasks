import React, {useState} from "react";
import SortDropdown from "./SortDropdown";
import CustomButton from "./components/CustomButton";

function SortDropdownContainer({sortProducts}) {
  let [selectedFilter, setSelectedFilter] = useState(null);
  let [isDropDownDisplayed, setDropdownDisplayed] = useState(false);

  function selectFilterOnClick(filterType) {
    setSelectedFilter(filterType);
    sortProducts(filterType);
  }

  function displayDropdownOnClick() {
    setDropdownDisplayed(!isDropDownDisplayed);
  }

  return <>
    <CustomButton
      onClickAction={displayDropdownOnClick}
      theme={{color: '#fff', backgroundColor: 'black'}}
      text='sorting dropdown'
    />

    {
      isDropDownDisplayed &&
      <SortDropdown
        selectedFilter={selectedFilter}
        selectFilterOnClick={selectFilterOnClick}
      />
    }
  </>
}

export default SortDropdownContainer;