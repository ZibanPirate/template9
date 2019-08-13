import * as React from "react";
import { render } from "react-dom";
import "./style";

document.title = "{|page title|}";

render(
  (
    <>
      {/* <h1>{"{|Hello|} from main page"}</h1> */}
      {/* <h3>{"the language used is {|en|}"}</h3> */}
    </>
  )
  ,
  document.getElementById("app-container"),
);
