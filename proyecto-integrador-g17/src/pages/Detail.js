import React from "react";
import DetailS from "../components/DetailS/DetailS";

function Detail(props){
  return(
    <React.Fragment>
      <DetailS  id={props.match.params.id}/>
    </React.Fragment>
  )
}


export default Detail;