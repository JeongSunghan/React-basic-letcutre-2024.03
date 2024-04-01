import React from "react";
import { useParams } from "react-router-dom";

export default function BoardDetail() {
  //파라메터 값을 받아와야함
  const params = useParams();

  return (
    <div style={{ margin: '20px' }}>
      BoardDetail Page, bid = {params.bid}
    </div>
  );

}