// import React, { useState } from "react";
// import "./App.scss";
// import {
//   SearchstaxWrapper,
//   SearchstaxInputWidget,
//   SearchstaxResultWidget,
//   SearchstaxPaginationWidget,
//   SearchstaxFacetsWidget,
// } from "@searchstax-inc/searchstudio-ux-react";
// import { Searchstax } from "@searchstax-inc/searchstudio-ux-js";
// import {
//   ISearchObject,
//   ISearchstaxParsedResult,
//   ISearchstaxSuggestProps,
//   ISearchstaxSuggestResponse,
// } from "@searchstax-inc/searchstudio-ux-js";
// import { InputTemplate } from "./templates/inputTemplates";
// import {
//   noResultTemplate,
//   resultsTemplate,
// } from "./templates/resultsTemplates";

// //@ts-ignore
// import { config, renderConfig } from "../config.js";
// import { paginationTemplate } from "./templates/paginationTemplates.js";
// import {
//   facetsTemplateDesktop,
//   facetsTemplateMobile,
// } from "./templates/facetTemplates.js";

// function App() {
//   const [searchstaxInstance, setSearchstaxInstance] =
//     useState<Searchstax | null>(null);

//   const sessionId = generateSessionId(25);

//   function generateSessionId(length: number): string {
//     let result = "";
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return result;
//   }

//   function beforeSearch(props: ISearchObject) {
//     const propsCopy = { ...props };
//     return propsCopy;
//   }
//   function afterSearch(results: ISearchstaxParsedResult[]) {
//     const copy = [...results];
//     return copy;
//   }
//   function initialized(searchstax: Searchstax) {
//     setSearchstaxInstance(searchstax);
//   }

//   function afterAutosuggest(
//     result: ISearchstaxSuggestResponse
//   ): ISearchstaxSuggestResponse {
//     // Modify and return the autosuggest result
//     return { ...result };
//   }

//   function beforeAutosuggest(
//     props: ISearchstaxSuggestProps
//   ): ISearchstaxSuggestProps | null {
//     // Modify and return the autosuggest props
//     return { ...props };
//   }

//   function afterLinkClick(
//     result: ISearchstaxParsedResult
//   ): ISearchstaxParsedResult {
//     // Modify and return the clicked result
//     return { ...result };
//   }

//   return (
//     <SearchstaxWrapper
//       searchURL={config.searchURL}
//       suggesterURL={config.suggesterURL}
//       trackApiKey={config.trackApiKey}
//       searchAuth={config.searchAuth}
//       beforeSearch={beforeSearch}
//       afterSearch={afterSearch}
//       authType={"token"}
//       language={config.language}
//       initialized={initialized}
//     >
//       <div className="searchstax-page-layout-container">
//         <SearchstaxInputWidget
//           inputTemplate={InputTemplate}
//           suggestAfterMinChars={renderConfig.inputWidget.suggestAfterMinChars}
//           afterAutosuggest={afterAutosuggest}
//           beforeAutosuggest={beforeAutosuggest}
//         ></SearchstaxInputWidget>
//         {/* <SearchstaxFacetsWidget
//           facetingType="and"
//           itemsPerPageDesktop={2}
//           itemsPerPageMobile={3}
//           specificFacets={undefined}
//           facetsTemplateDesktop={facetsTemplateDesktop}
//           facetsTemplateMobile={facetsTemplateMobile}
//         /> */}
//         <SearchstaxResultWidget
//           afterLinkClick={afterLinkClick}
//           resultsPerPage={10}
//           renderMethod={"pagination"}
//           resultsTemplate={resultsTemplate}
//           noResultTemplate={noResultTemplate}
//         />
//         <SearchstaxPaginationWidget paginationTemplate={paginationTemplate} />
//       </div>
//     </SearchstaxWrapper>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.scss";
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
  SearchstaxFacetsWidget,
} from "@searchstax-inc/searchstudio-ux-react";
import { Searchstax } from "@searchstax-inc/searchstudio-ux-js";
import {
  ISearchObject,
  ISearchstaxParsedResult,
  ISearchstaxSuggestProps,
  ISearchstaxSuggestResponse,
} from "@searchstax-inc/searchstudio-ux-js";
import { InputTemplate } from "./templates/inputTemplates";
import {
  noResultTemplate,
  resultsTemplate,
} from "./templates/resultsTemplates";

//@ts-ignore
import { config, renderConfig } from "../config.js";
import { paginationTemplate } from "./templates/paginationTemplates.js";
import {
  facetsTemplateDesktop,
  facetsTemplateMobile,
} from "./templates/facetTemplates.js";

function App() {
  const [searchstaxInstance, setSearchstaxInstance] =
    useState<Searchstax | null>(null);

  const sessionId = generateSessionId(25);

  function generateSessionId(length: number): string {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  function beforeSearch(props: ISearchObject) {
    const propsCopy = { ...props };
    return propsCopy;
  }
  function afterSearch(results: ISearchstaxParsedResult[]) {
    const copy = [...results];
    return copy;
  }
  function initialized(searchstax: Searchstax) {
    setSearchstaxInstance(searchstax);
  }

  function afterAutosuggest(
    result: ISearchstaxSuggestResponse
  ): ISearchstaxSuggestResponse {
    // Modify and return the autosuggest result
    return { ...result };
  }

  function beforeAutosuggest(
    props: ISearchstaxSuggestProps
  ): ISearchstaxSuggestProps | null {
    // Modify and return the autosuggest props
    return { ...props };
  }

  function afterLinkClick(
    result: ISearchstaxParsedResult
  ): ISearchstaxParsedResult {
    // Modify and return the clicked result
    return { ...result };
  }

  return (
    <SearchstaxWrapper
      searchURL={config.searchURL}
      suggesterURL={config.suggesterURL}
      trackApiKey={config.trackApiKey}
      searchAuth={config.searchAuth}
      beforeSearch={beforeSearch}
      afterSearch={afterSearch}
      authType={"token"}
      language={config.language}
      initialized={initialized}
    >
      <div className="searchstax-page-layout-container">
        <SearchstaxInputWidget
          inputTemplate={InputTemplate}
          suggestAfterMinChars={renderConfig.inputWidget.suggestAfterMinChars}
          afterAutosuggest={afterAutosuggest}
          beforeAutosuggest={beforeAutosuggest}
        ></SearchstaxInputWidget>
        {/* <SearchstaxFacetsWidget
          facetingType="and"
          itemsPerPageDesktop={2}
          itemsPerPageMobile={3}
          specificFacets={undefined}
          facetsTemplateDesktop={facetsTemplateDesktop}
          facetsTemplateMobile={facetsTemplateMobile}
        /> */}
        <SearchstaxResultWidget
          afterLinkClick={afterLinkClick}
          resultsPerPage={10}
          renderMethod={"pagination"}
          resultsTemplate={resultsTemplate}
          noResultTemplate={noResultTemplate}
        />
        <SearchstaxPaginationWidget paginationTemplate={paginationTemplate} />
      </div>
    </SearchstaxWrapper>
  );
}

export default App;
