import React, { FC, Suspense } from "react";

import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const Home = React.lazy(() => import("./sections/Home"));
// const About = React.lazy(() => import("./sections/About"));
// const Project = React.lazy(() => import("./sections/Project"));
// const Contact = React.lazy(() => import("./sections/Contact"));
// const Footer = React.lazy(() => import("./sections/Footer"));

const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <Nav />

      <main>
        <Home />
        {/* <About /> */}
        {/* <Project /> */}
        {/* <Contact /> */}
      </main>

      {/* <Footer /> */}
    </Suspense>
  </div>
);

export default App;
