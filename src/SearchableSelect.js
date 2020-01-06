import React, { useRef, useState } from "react";

function SearchbaleSelect({ options, onSelect }) {
  const input = useRef(null);
  const [searchText, setSearchText] = useState("");

  function onChange(e) {
    setSearchText(e.target.value);
  }

  function selectOption(option) {
    setSearchText(option.label);
    onSelect(option);
  }

  const filteredOptions = options.filter(
    o => searchText && o.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="combo-menu-wrapper">
      <div className="form-control">
        <label>Issue: </label>
        <input
          className="form-input"
          ref={input}
          value={searchText}
          type="text"
          onChange={onChange}
        />
      </div>
      {filteredOptions.length === 0 && searchText ? (
        <div className="menu-items-wrapper">
          <div className="menu-items">
            <div className="menu-item">No Issues Found</div>
          </div>
        </div>
      ) : (
        <div className="menu-items-wrapper">
          <div className="menu-items">
            {filteredOptions.map(option => (
              <div
                className="menu-item"
                key={option.id}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchbaleSelect;
