"use client";
import "./../../node_modules/@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css";
import "./style.css";
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
  SearchstaxOverviewWidget,
  SearchstaxSortingWidget,
  SearchstaxRelatedSearchesWidget,
  SearchstaxExternalPromotionsWidget,
  SearchstaxFacetsWidget,
  //@ts-ignore
} from "@searchstax-inc/searchstudio-ux-react";

import type {
  ISearchObject,
  ISearchstaxParsedResult,
  ISearchstaxSuggestProps,
  ISearchstaxSuggestResponse,
  Searchstax,
} from "@searchstax-inc/searchstudio-ux-js";

//@ts-ignore
import { config, renderConfig } from "./../../../config.js";
import {
  noResultTemplate,
  resultsTemplate,
} from "./templates/resultsTemplates";
import {
  infiniteScrollTemplate,
  paginationTemplate,
} from "./templates/paginationTemplates";
import { searchRelatedSearchesTemplate } from "./templates/relatedSearchesTemplates";
import { searchExternalPromotionsTemplate } from "./templates/externalPromotionsTemplates";
import {
  facetsTemplateDesktop,
  facetsTemplateMobile,
} from "./templates/facetTemplates";
import { searchSortingTemplate } from "./templates/sorting.templates";
import { searchOverviewTemplate } from "./templates/searchOverviewTemplates";
import { InputTemplate } from "./templates/inputTemplates";
import Script from "next/script";
function beforeSearch(props: ISearchObject) {
  const propsCopy = { ...props };
  return propsCopy;
}
function afterSearch(results: ISearchstaxParsedResult[]) {
  const copy = [...results];
  return copy;
}
function initialized(searchstax: Searchstax) {}
function afterAutosuggest(result: ISearchstaxSuggestResponse) {
  const copy = { ...result };
  return copy;
}
function beforeAutosuggest(props: ISearchstaxSuggestProps) {
  // gets suggestProps, if passed along further autosuggest will execute, if null then event gets canceled
  // props can be modified and passed along
  const propsCopy = { ...props };
  return propsCopy;
}
function afterLinkClick(result: ISearchstaxParsedResult) {
  // gets result that was clicked, if passed along further functions will execute, if null then event gets canceled
  const resultCopy = { ...result };

  return resultCopy;
}

const renderConfTyped = renderConfig as any;
const confTyped = config as any;

export default function Home() {
  return (
    <>
    <main>
    <h1 className="searchstax-main-page-title">Searchstax Search Page</h1>
      <SearchstaxWrapper
        searchURL={confTyped.searchURL}
        suggesterURL={confTyped.suggesterURL}
        trackApiKey={confTyped.trackApiKey}
        searchAuth={confTyped.searchAuth}
        initialized={initialized}
        beforeSearch={beforeSearch}
        afterSearch={afterSearch}
        authType={confTyped.authType as "token" | "basic" | undefined} // eslint-disable-line
        analyticsBaseUrl={confTyped.analyticsBaseUrl}
        router={{ enabled: true }}
        language="en"
      >
        <div className="searchstax-page-layout-container">
          <SearchstaxInputWidget
            inputTemplate={InputTemplate}
            suggestAfterMinChars={renderConfTyped.inputWidget.suggestAfterMinChars}
            afterAutosuggest={afterAutosuggest}
            beforeAutosuggest={beforeAutosuggest}
          ></SearchstaxInputWidget>

          <div className="search-details-container">
            <SearchstaxOverviewWidget
              searchOverviewTemplate={searchOverviewTemplate}
            ></SearchstaxOverviewWidget>
            <SearchstaxSortingWidget
              searchSortingTemplate={searchSortingTemplate}
            ></SearchstaxSortingWidget>
          </div>

          <div className="searchstax-page-layout-facet-result-container">
            <div className="searchstax-page-layout-facet-container">
              <SearchstaxFacetsWidget
                facetingType={renderConfTyped.facetsWidget.facetingType} // eslint-disable-line
                itemsPerPageDesktop={
                  renderConfTyped.facetsWidget.itemsPerPageDesktop
                }
                itemsPerPageMobile={
                  renderConfTyped.facetsWidget.itemsPerPageMobile
                }
                specificFacets={undefined}
                facetsTemplateDesktop={facetsTemplateDesktop}
                facetsTemplateMobile={facetsTemplateMobile}
              ></SearchstaxFacetsWidget>
            </div>

            <div className="searchstax-page-layout-result-container">
              <SearchstaxExternalPromotionsWidget
                searchExternalPromotionsTemplate={
                  searchExternalPromotionsTemplate
                }
              ></SearchstaxExternalPromotionsWidget>
              <SearchstaxResultWidget
                afterLinkClick={afterLinkClick}
                resultsPerPage={renderConfTyped.resultsWidget.itemsPerPage}
                renderMethod={renderConfTyped.resultsWidget.renderMethod} // eslint-disable-line
                noResultTemplate={noResultTemplate}
                resultsTemplate={resultsTemplate}
              ></SearchstaxResultWidget>
              <SearchstaxRelatedSearchesWidget
                relatedSearchesURL={confTyped.relatedSearchesURL}
                relatedSearchesAPIKey={confTyped.relatedSearchesAPIKey}
                searchRelatedSearchesTemplate={searchRelatedSearchesTemplate}
              ></SearchstaxRelatedSearchesWidget>
              <SearchstaxPaginationWidget
                infiniteScrollTemplate={infiniteScrollTemplate}
                paginationTemplate={paginationTemplate}
              ></SearchstaxPaginationWidget>
            </div>
          </div>
        </div>
      </SearchstaxWrapper>
      </main>
    </>
  );
}
