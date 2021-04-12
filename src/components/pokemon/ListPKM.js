import React from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";
import "./grid.css";

function ListPKM({ listInfo, next, prev }) {
  return (
    <>
      <div className='btn'>
        <button className='prev-btn' onClick={prev}>
          Prev
        </button>
        <button className='next-btn' onClick={next}>
          Next
        </button>
      </div>
      <div className='grid wide'>
        <div className='row'>
          {listInfo.map((info, index) => {
            return <Pokemon key={index} {...info} />;
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { listInfo: state.listInfo };
};

export default connect(mapStateToProps)(ListPKM);
