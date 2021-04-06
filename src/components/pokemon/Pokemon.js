import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FETCH_INFO } from "../../redux/pokemon/actions";
import "./grid.css";

function Pokemon({ name, url, dispatch, listInfo }) {
  // const fetchInfo = async () => {
  //   const response = await axios(url).catch((err) => console.log(err));
  //   if (response) {
  //     const info = response.data;
  //     const { front_default } = info.sprites.other["official-artwork"];
  //     const { id } = info;
  //     dispatch({ type: FETCH_INFO, payload: { id, front_default } });
  //   }
  // };

  // React.useEffect(() => {
  //   fetchInfo();
  // }, [url]);

  return (
    <div className='col l-2-4'>
      {/* {listInfo
        .sort((a, b) => a.id - b.id)
        .map((info, index) => {
          return (
            <div key={info.id}>
              <img src={info.front_default} alt={name} />
            </div>
          );
          // }
        })} */}
      <p>{name}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { listInfo: state.listInfo };
};

export default connect(mapStateToProps)(Pokemon);
