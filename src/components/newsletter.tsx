"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className='newsletter section'>
      <div className='newsletter__container grid'>
        <div>
          <h3 className='newsletter__title'>
            Suscribe And Get <br />
            10% OFF
          </h3>
          <p className='newsletter__description'>Get 10% discount for all products</p>
        </div>

        <form action='' className='newsletter__subscribe'>
          <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='@email.com' className='newsletter__input' />
          <a href='#' className='button'>
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
}
