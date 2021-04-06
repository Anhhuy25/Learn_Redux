import React from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";
import "./grid.css";

function ListPKM({ listPKM, isLoading }) {
  const [page, setPage] = React.useState(0);
  const [newListPKM, setNewListPKM] = React.useState([]);

  React.useEffect(() => {
    if (isLoading) return;
    setNewListPKM(listPKM[page]);
  }, [isLoading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className='grid wide'>
      <div className='row'>
        {newListPKM.map((pokemon, index) => {
          return <Pokemon key={index} {...pokemon} page={page} />;
        })}
      </div>
      {!isLoading && (
        <div>
          <button disabled={page <= 0} onClick={() => setPage((oldPage) => oldPage - 1)}>
            Prev
          </button>
          {listPKM.map((pokemon, index) => {
            return (
              <button onClick={() => handlePage(index)} key={index}>
                {index + 1}
              </button>
            );
          })}
          <button disabled={page >= 55} onClick={() => setPage((oldPage) => oldPage + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { listPKM: state.listPKM, isLoading: state.isLoading };
};

export default connect(mapStateToProps)(ListPKM);
