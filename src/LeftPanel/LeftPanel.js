import React from "react";

const LeftPanel = props => {
  let data = (
    <div>
      <div className="ui vertical menu">
        <a href="/" className="active teal item">
          Leads
          <div className="ui teal left pointing label" />
        </a>
        <a href="/" className="item">
          Application List
          <div className="ui green left pointing label" />
        </a>
        <a href="/" className="item">
          Activities
          <div className="ui blue left pointing label" />
        </a>
      </div>
    </div>
  );
  if (props.clickCount % 2 !== 0) data = null;

  return (
    <>
      <i className="undo alternate icon" />
      {data}
    </>
  );
};

export default LeftPanel;
