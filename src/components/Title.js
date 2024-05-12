// Title.js
import React from 'react';
import {uncamel} from "../utils/stringUtils";

const Title = ({ sortBy, timeFrame }) => {

    function renderTitle() {
        return "Most " + uncamel(sortBy) + ' - ' + uncamel(timeFrame)
    }

  return (
      <div className={'big-title-div'}>
          <h2 className={'big-title-text'}>
            {renderTitle()}
          </h2>
      </div>
  );
};

export default Title;
