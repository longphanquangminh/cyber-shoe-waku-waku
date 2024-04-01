export default function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container grid'>
        <div className='home__sneaker'>
          <div className='home__shape'></div>
          <img src='assets/img/imghome.png' alt='' className='home__img' />
        </div>

        <div className='home__data'>
          <span className='home__new'>New in</span>
          <h1 className='home__title'>
            YEEZY BOOST <br />
            SPLY - 350
          </h1>
          <p className='home__description'>Explore the new collections of sneakers</p>

          <a href='#new' className='button'>
            Explore now
          </a>
        </div>
      </div>
    </section>
  );
}
