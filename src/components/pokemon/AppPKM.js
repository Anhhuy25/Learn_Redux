import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { FETCH_INFO } from "../../redux/pokemon/actions";
import axios from "axios";
import "./style.css";

// Components
import ListPKM from "./ListPKM";
import Loading from "./Loading";
import PokemonDetail from "./PokemonDetail";

const url = "https://pokeapi.co/api/v2/pokemon";

function AppPKM({ dispatch }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [nextURL, setNextURL] = React.useState("");
  const [prevURL, setPrevURL] = React.useState("");

  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await axios(url).catch((err) => console.log(err));

    if (response) {
      const data = response.data;
      setNextURL(data.next);
      setPrevURL(data.previous);
      await loadingData(data.results);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line
  }, []);

  const loadingData = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pkm) => {
        //pkm is object(name,url)
        //console.log(pkm);
        let pokemonRecord = await getPokemon(pkm);
        return pokemonRecord;
      }),
    );
    dispatch({ type: FETCH_INFO, payload: pokemonData });
  };

  const getPokemon = async (data) => {
    const { url } = data;
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => response.json())
        .then((info) => {
          resolve(info);
        });
    });
  };

  const handlePrev = async () => {
    setIsLoading(true);
    const response = await axios(prevURL).catch((err) => console.log(err));

    if (response) {
      const data = response.data;
      setNextURL(data.next);
      setPrevURL(data.previous);
      await loadingData(data.results);
      setIsLoading(false);
    }
  };

  const handleNext = async () => {
    setIsLoading(true);
    const response = await axios(nextURL).catch((err) => console.log(err));

    if (response) {
      const data = response.data;
      setNextURL(data.next);
      setPrevURL(data.previous);
      await loadingData(data.results);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Switch>
          <Route path='/' exact>
            <h1>POKE-API</h1>
            <ListPKM next={handleNext} prev={handlePrev} />
          </Route>
        </Switch>
        <Route path='/pokemon/:id' children={<PokemonDetail />}></Route>
        {/* <div style={{ margin: "12px 0" }}>
        <ListPKM />
      </div> */}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppPKM);
