import React from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import Loading from "./Loading";
import typeColors from "./typeColors";
import "./grid.css";
import "./style.css";

const url = "https://pokeapi.co/api/v2/pokemon";

function PokemonDetail() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [info, setInfo] = React.useState({});
  const [nextPKM, setNextPKM] = React.useState("");
  const [prevPKM, setPrevPKM] = React.useState("");
  const { id } = useParams();
  let history = useHistory();

  const fetchURL = React.useCallback(async () => {
    setIsLoading(true);
    const response = await axios(`${url}/${id}`).catch((err) => console.log(err));
    let responsePrev;
    if (id <= 1) {
      responsePrev = await axios(`${url}/${id}`).catch((err) => console.log(err));
    } else {
      responsePrev = await axios(`${url}/${parseInt(id) - 1}`).catch((err) => console.log(err));
    }
    const responseNext = await axios(`${url}/${parseInt(id) + 1}`).catch((err) => console.log(err));

    if (response && responsePrev && responseNext) {
      setInfo(response.data);
      setPrevPKM(responsePrev.data.name);
      setNextPKM(responseNext.data.name);
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchURL();
  }, [id, fetchURL]);

  const goToHome = () => {
    history.push("/");
  };

  const handlePrev = React.useCallback(async () => {
    history.push(`/pokemon/${parseInt(id) - 1}`);
    setIsLoading(true);
    //const response = await axios(`${url}/${parseInt(id) - 1}`).catch((err) => console.log(err));
    let responsePrev;
    if (id <= 1) {
      responsePrev = await axios(`${url}/${id}`).catch((err) => console.log(err));
    } else {
      responsePrev = await axios(`${url}/${parseInt(id) - 1}`).catch((err) => console.log(err));
    }

    if (responsePrev) {
      setInfo(responsePrev.data);
      setPrevPKM(responsePrev.data.name);
      setIsLoading(false);
    }
  }, [id, history]);

  const handleNext = React.useCallback(async () => {
    history.push(`/pokemon/${parseInt(id) + 1}`);
    setIsLoading(true);
    const response = await axios(`${url}/${parseInt(id) + 1}`).catch((err) => console.log(err));
    const responseNext = await axios(`${url}/${parseInt(id) + 2}`).catch((err) => console.log(err));
    //const responsePrev = await axios(`${url}/${parseInt(id) - 1}`).catch((err) => console.log(err));

    if (response) {
      setInfo(response.data);
      //setPrevPKM(responsePrev.data.name);
      setNextPKM(responseNext.data.name);
      setIsLoading(false);
    }
  }, [id, history]);

  const { name, height, weight, types } = info;
  //console.log(info.sprites);
  console.log(prevPKM, nextPKM);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 onClick={goToHome} className='info-name'>
        {name}
      </h1>
      <div className='info-btn'>
        {id > 1 && (
          <button className='prevdetails-btn' onClick={handlePrev}>
            {`#${parseInt(id) - 1} ${prevPKM}`}
          </button>
        )}
        {id < 1118 && (
          <button className='nextdetails-btn' onClick={handleNext}>
            {`#${parseInt(id) + 1} ${nextPKM}`}
          </button>
        )}
      </div>
      <div className='grid wide'>
        <div className='row info'>
          <div className='col l-6'>
            <img className='info-img' src={info.sprites.other["official-artwork"].front_default} alt={name} />
          </div>
          <div className='col l-6'>
            <table>
              <tbody>
                <tr>
                  <th>National №</th>
                  <td>{id}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  {types.map((type, index) => {
                    return (
                      <td className='info-type' style={{ backgroundColor: typeColors[type.type.name] }} key={index}>
                        {type.type.name}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{(height / 10).toFixed(1)} m</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{(weight / 10).toFixed(1)} kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
