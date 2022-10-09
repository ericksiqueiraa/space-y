import React, { ReactNode } from "react";
import Btn from "../../components/button/index";

function Button(props) {
  return (
    <div>
        <button className="rounded-md font-medium text-[18px] font-Heebo text-white w-[264px] h-[52px] bg-[#E85937]">{props.text}</button>
    </div>
  );
}

export default Button;
