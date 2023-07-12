import React, { Suspense, lazy } from "react";
import { Display1 } from "./Display1";
import { Display2 } from "./Display2";
import { Display3 } from "./Display3";
import { Display4 } from "./Display4";
import s from './Display1/Display1.module.css';
import { Footer } from "./Display6";
import NavBar from "../NavBar/NavBar";

const LazyDisplay5 = lazy(() => import("./Display5"));

export default function Home() {
  return (
    <div>
      <NavBar />
      <Display1 />
      <Display2 />
      <div className={s.background2} />
      <Display3 />
      <div className='bg-[#000000]'>
        <Display4 />
        <Suspense fallback={<div>Cargando...</div>}>
          <LazyDisplay5 />
        </Suspense>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
