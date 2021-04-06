import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FETCH_INFO } from "../../redux/pokemon/actions";
import "./grid.css";

function Pokemon({ name, url, dispatch, listInfo, page }) {
  const [newListInfo, setNewListInfo] = React.useState([]);

  const fetchInfo = async () => {
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const info = response.data;
      dispatch({ type: FETCH_INFO, payload: info });
    }
  };

  React.useEffect(() => {
    fetchInfo();
  }, [url]);

  // React.useEffect(() => {
  //   const newList = listInfo.sort((a, b) => a.id - b.id);
  //   setNewListInfo(newList);
  // });

  return (
    <div className='col l-2-4'>
      {/* {newListInfo.map((info, index) => {
        const { id, name } = info;
        const { front_shiny } = info.sprites;
        if (id === index + 1) {
          return (
            <div key={id}>
              <img src={front_shiny} alt={name} />
              <p>{name}</p>
            </div>
          );
        }
      })} */}
      <p>{name}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { listInfo: state.listInfo };
};

export default connect(mapStateToProps)(Pokemon);
