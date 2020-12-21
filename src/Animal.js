import React from "react";
import WrapperComponent from "./WrapperComponent";
import Photo from "./Photo";

const Animal = (props) => {
  const details = props.details;
  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <WrapperComponent
            key={index}
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            index={index}
            removeList={props.removeList}
          />
        ))}
      </ul>
    </div>
  );
};

export default Animal;
