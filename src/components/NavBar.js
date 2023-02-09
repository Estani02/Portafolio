/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import s from './NavBar.module.css';



export default function NavBar() {
  return (
    <nav class={s.navBar}>
      <div>
        <a href='#' className={s.logo}>
          EO
        </a>
      </div>
      <div className={s.container}>
        <a href='#' className={s.link}>Inicio</a>
        <a href='#'className={s.link}>Acerca de mi</a>
        <a href='#'className={s.link}>Proyecctos</a>
        <a href='#'className={s.link}>Contacto</a>
      </div>
    </nav>
  )
}
