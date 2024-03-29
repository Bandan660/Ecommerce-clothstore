import React, { Fragment } from "react";
import Routing from "./Routes/routes";
import Header from "./Components/Shared/Header";

const App = () => {
  return (
    <Fragment>
      {/* Header component start */}
      <Header />
      {/* Header component end */}

      {/* All routes start from here  */}
      <Routing />
      {/* All routes end here  */}
    </Fragment>
  );
};

export default App;
