// Title.js
import React from 'react';
import {uncamel} from "../utils/stringUtils";

const Title = ({ sortBy, timeFrame }) => {

    function getTitle() {
        return "Most " + uncamel(sortBy) + ' - ' + uncamel(timeFrame)
    }

  return (
      <div className={'title-div'}>
          <h2 className={'title-text'}>
            {getTitle()}
          </h2>
      </div>
  );
};

export default Title;
