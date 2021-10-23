// import React, { Component } from "react";

// export const MyContext = React.createContext();

// class MyProvider extends Component {
//   state = {
//     message: [],
//   };

//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           state: this.state,
//           setMessage: (value) =>
//             this.setState({
//               message: [value],
//             }),
//         }}
//       >
//         {this.props.children} //this indicates that all the child tags with
//         MyProvider as Parent can access the global store.
//       </MyContext.Provider>
//     );
//   }
// }
