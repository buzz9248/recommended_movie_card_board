// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// function App() {

//   return (
//     <Router>
//       <Switch>
//         <Route path="/movie/:id">
//           <Detail />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/movie/:id" element={<Detail />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename="/recommended_movie_card_board">
      <Routes>
        {/* 루트 경로 */}
        <Route path="/" element={<Home />} />

        {/* 영화 상세 정보 */}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;