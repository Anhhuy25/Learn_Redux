// import React from "react";
// import { connect } from "react-redux";
// import { INCREASE, DECREASE, RESET } from "../../redux/demo/actions";

// const increase = () => ({ type: INCREASE });
// const decrease = () => ({ type: DECREASE });
// const reset = () => ({ type: RESET });

// function Demo({ num, increase, decrease, reset }) {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h3>{num}</h3>
//       <p>
//         <button onClick={decrease}>decrease</button>
//         <button onClick={reset}>reset</button>
//         <button onClick={increase}>increase</button>
//       </p>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return { num: state.num };
// }

// // mapDispatchToProps as an Function
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     decrease: () => dispatch({ type: DECREASE }),
// //     reset: () => dispatch({ type: RESET }),
// //     increase: () => dispatch({ type: INCREASE }),
// //   };
// // };

// // mapDispatchToProps as an Object
// const mapDispatchToProps = {
//   increase,
//   decrease,
//   reset,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Demo);
