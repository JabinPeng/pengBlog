import React, { FC, Suspense, lazy } from "react";

import Loading from "@/components/Loading";
import Nav from "@/sections/Nav";

const Home = lazy(() => import("@/sections/Home"));
const About = lazy(() => import("@/sections/About"));
const Project = lazy(() => import("@/sections/Project"));
const Footer = lazy(() => import("@/sections/Footer"));

const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <Nav />

      <main>
        <Home />
        <About />
        <Project />
      </main>

      <Footer />
    </Suspense>
  </div>
);

export default App;
