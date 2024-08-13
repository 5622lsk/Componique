"use client";

import React, { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  activeColor?: string;
  inactiveColor?: string;
  width?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  activeColor = "bg-Basic",
  inactiveColor = "bg-gray-300",
  width = "w-80",
  onSearch,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className={`flex items-center rounded-full bg-white p-2 shadow-md transition-all duration-300 ${
        isActive ? `${width}` : "w-12"
      }`}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${isActive ? activeColor : inactiveColor}`}
      >
        🔍
      </button>
      {isActive && (
        <input
          type="text"
          className="ml-2 flex-grow border-none text-black outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default SearchInput;
