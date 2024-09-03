import { ISearchstaxParsedResult, ISearchstaxSearchMetadata } from "@searchstax-inc/searchstudio-ux-js";

export function noResultTemplate(
  searchTerm: string,
  metaData: ISearchstaxSearchMetadata | null,
  executeSearch: (searchTerm: string) => void
): React.ReactElement {
  return (
    <div>
      <div className="searchstax-no-results">
        {" "}
        Showing <strong>no results</strong> for <strong>"{searchTerm}"</strong>
        <br />
        {metaData?.spellingSuggestion && (
          <span>
            &nbsp;Did you mean{" "}
            <a href="#" className="searchstax-suggestion-term" onClick={(e) => {
                          e.preventDefault();
                          executeSearch(metaData?.spellingSuggestion);
                        }}>
              {metaData?.spellingSuggestion}
            </a>
            ?
          </span>
        )}
      </div>
      <ul>
        <li>
          {" "}
          Try searching for search related terms or topics. We offer a wide
          variety of content to help you get the information you need.{" "}
        </li>
        <li>Lost? Click on the ‘X” in the Search Box to reset your search.</li>
      </ul>
    </div>
  );
}

export function resultsTemplate(
  searchResults: ISearchstaxParsedResult[],
  resultClicked: (
    results: ISearchstaxParsedResult,
    event: any
  ) => ISearchstaxParsedResult[]
): React.ReactElement {
  return (
    <>
      {searchResults && searchResults.length && (

      <div className="searchstax-search-results" aria-live="polite">
       {searchResults !== null &&
                    searchResults.map(function (searchResult) {
                      return (
                        <a href={searchResult.url ?? ''} onClick={event => {
                          resultClicked(searchResult, event);
                        }}
                        onKeyDown={(e) => {
                          if(e.key === 'Enter' || e.key === ' ') {
                            resultClicked(searchResult, e);
                          }
                        }}
                        data-searchstax-unique-result-id={ searchResult.uniqueId} key={searchResult.uniqueId} className="searchstax-result-item-link searchstax-result-item-link-wrapping" tabIndex={0}>
                        <div
                          className={`searchstax-search-result ${
                            searchResult.thumbnail ? "has-thumbnail" : ""
                          }`}
                          key={searchResult.uniqueId}
                        >
                          {searchResult.promoted && (
                            <div className="searchstax-search-result-promoted"></div>
                          )}


                          {searchResult.ribbon && (
                            <div className="searchstax-search-result-ribbon">
                              {searchResult.ribbon}
                            </div>
                          )}

                          {searchResult.thumbnail && (
                            <img
                              src={searchResult.thumbnail}
                              className="searchstax-thumbnail"
                            />
                          )}

                          <div className="searchstax-search-result-title-container">
                            <span className="searchstax-search-result-title">
                              {searchResult.title}
                            </span>
                          </div>

                          {searchResult.paths && (
                            <p className="searchstax-search-result-common">
                              {searchResult.paths}
                            </p>
                          )}

                          {searchResult.description && (
                            <p className="searchstax-search-result-description searchstax-search-result-common">
                              {searchResult.description}
                            </p>
                          )}

                          {searchResult.unmappedFields.map(function (
                            unmappedField: any
                          ) {
                            return (
                              <div key={unmappedField.key}>
                                {unmappedField.isImage &&
                                  typeof unmappedField.value === "string" && (
                                    <div className="searchstax-search-result-image-container">
                                      <img
                                        src={unmappedField.value}
                                        className="searchstax-result-image"
                                      />
                                    </div>
                                  )}

                                {!unmappedField.isImage && (
                                  <div>
                                    <p className="searchstax-search-result-common">
                                      {unmappedField.value}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        </a>
                      );
                    })}
    </div>

      )}
    </>
  );
}
