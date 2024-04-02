import React from "react";

const ReducerVirtual = ({ params }: { params: { pid: string } }) => {
  return <div>
    <div>this is redux/reducers/page</div>
    <div>{"{ params }: { params: { id: string } }"} :::: {params.pid}</div>
     </div>;
};

export default ReducerVirtual;
