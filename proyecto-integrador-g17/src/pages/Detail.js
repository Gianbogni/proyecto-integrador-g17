import React from "react";
import DetailS from "../components/DetailS/DetailS";

function Detail(props){
  return(
    <div>
      <DetailS  id={props.match.params.id}/>
    </div>
  )
}


export default Detail;