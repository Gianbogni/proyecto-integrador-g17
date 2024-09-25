import React from "react";
import DetailCard from "../components/DetailCard/DetailCard";

function Detail(props){
  return(
    <div>
      <DetailCard  id={props.match.params.id}/>
    </div>
  )
}


export default Detail;