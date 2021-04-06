import React from "react";
import { connect } from "react-redux";
import { LOADING, FETCH_PKM } from "./redux/pokemon/actions";
import axios from "axios";

// Components
import ListPKM from "./components/pokemon/ListPKM";
import Loading from "./components/pokemon/Loading";
import pagination from "./components/pokemon/pagination";

const url = "https://pokeapi.co/api/v2/pokemon";

function App({ isLoading, dispatch }) {
  const fetchData = async (url) => {
    dispatch({ type: LOADING });
    const response = await axios(url).catch((err) => console.log(err));

    if (response) {
      // const data = await axios
      //   .get(url)
      //   .then((response) => console.log(response))
      //   .catch((err) => console.log(err));
      const data = response.data;
      dispatch({ type: FETCH_PKM, payload: pagination(data.results) });
    }
  };

  React.useEffect(() => {
    fetchData(`${url}?offset=0&limit=1118}`);
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ListPKM />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLoading: state.isLoading };
};

export default connect(mapStateToProps)(App);
