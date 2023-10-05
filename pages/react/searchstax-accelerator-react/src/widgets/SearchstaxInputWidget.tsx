import { SearchstaxInputWidget } from "@searchstax-inc/searchstudio-ux-react";

import type {
    ISearchstaxSuggestResponse,
    ISearchstaxSuggestProps,
    ISearchstaxSuggestion
} from "@searchstax-inc/searchstudio-ux-js";

function afterAutosuggest(result: ISearchstaxSuggestResponse) {
    const copy = { ...result };
    return copy;
  }
function beforeAutosuggest(props: ISearchstaxSuggestProps) {
    const propsCopy = { ...props };
    return propsCopy;
}

function InputTemplate(
    suggestions: ISearchstaxSuggestion[],
    onMouseLeave: () => void,
    onMouseOver: (suggestion: ISearchstaxSuggestion) => void,
    onMouseClick: () => void
  ): React.ReactElement {
    return (
      <div className="searchstax-search-input-wrapper">
        <input
          type="text"
          id="searchstax-search-input"
          className="searchstax-search-input"
          placeholder="SEARCH FOR..."
        />
        <div
          className={`searchstax-autosuggest-container ${suggestions.length === 0 ? "hidden" : ""}`}
          onMouseLeave={onMouseLeave}
        >
          {suggestions.map(function (suggestion) {
            return (
              <div className="searchstax-autosuggest-item" key={suggestion.term}>
                <div
                  className="searchstax-autosuggest-item-term-container"
                  dangerouslySetInnerHTML={{ __html: suggestion.term }}
                  onMouseOver={() => {
                    onMouseOver(suggestion);
                  }}
                  onClick={() => {
                    onMouseClick();
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <button className="searchstax-spinner-icon" id="searchstax-search-input-action-button"></button>
      </div>
    );
  }

  const InputWidget: React.FC = () => {
    return (
      <SearchstaxInputWidget
        afterAutosuggest={afterAutosuggest}
        beforeAutosuggest={beforeAutosuggest}
        inputTemplate={InputTemplate}
      ></SearchstaxInputWidget>
    );
  };
  
  export default InputWidget;

