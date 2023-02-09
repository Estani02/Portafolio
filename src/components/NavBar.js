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
</nav>
  )
}
