import { ISearchstaxSuggestion } from "@searchstax-inc/searchstudio-ux-js";
import React, { useState } from "react";

export function InputTemplate(
  suggestions: ISearchstaxSuggestion[],
  onMouseLeave: () => void,
  onMouseOver: (suggestion: ISearchstaxSuggestion) => void,
  onMouseClick: () => void
): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const showSuggestions = isFocused && suggestions.length > 0;

  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        id="searchstax-search-input" // Ensure this ID matches what the library expects
        className="search-input"
        placeholder="Search something..."
        aria-label="search"
        // value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {showSuggestions && (
        <div className="autosuggest-container" onMouseLeave={onMouseLeave}>
          {suggestions.map((suggestion) => (
            <div
              className="autosuggest-item"
              key={suggestion.term}
              onMouseOver={() => onMouseOver(suggestion)}
              onMouseDown={onMouseClick}
            >
              <div
                className="autosuggest-item-term"
                dangerouslySetInnerHTML={{ __html: suggestion.term }}
              ></div>
            </div>
          ))}
        </div>
      )}

      {/* <button
        className="search-button"
        id="search-input-action-button"
        aria-label="search"
      >
        <i className="fa fa-search">Submit</i>
      </button> */}
    </div>
  );
}
