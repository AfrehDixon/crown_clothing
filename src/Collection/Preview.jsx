import React from "react";
import './Previewstyle.scss';
import Collectionitemcom from "../CollectionItem/Collectionitemcom";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otheritemprops}) => {
              return <Collectionitemcom key={id} {...otheritemprops} />
          })}
      </div>
    </div>
  );
};

export default Preview;
