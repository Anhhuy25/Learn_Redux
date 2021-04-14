import React from "react";
import ReduxThunk from "./components/redux-thunk/ReduxThunk";
//import AppPKM from "./components/pokemon/AppPKM";

function App() {
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div style={{ textAlign: "center" }}>
      {/* <AppPKM /> */}
      <ReduxThunk />
    </div>
  );
}

export default App;
