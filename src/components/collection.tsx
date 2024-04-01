export default function Collection() {
  return (
    <section className='collection section'>
      <div className='collection__container grid'>
        <div className='collection__card'>
          <div className='collection__data'>
            <h3 className='collection__name'>Nike</h3>
            <p className='collection__description'>New collection 2024</p>
            <a href='' className='button-light'>
              Buy now <i className='bx bx-right-arrow-alt button-icon'></i>
            </a>
          </div>

          <img src='assets/img/collection1.png' alt='' className='collection__img' />
        </div>

        <div className='collection__card'>
          <div className='collection__data'>
            <h3 className='collection__name'>Adidas</h3>
            <p className='collection__description'>New collection 2024</p>
            <a href='' className='button-light'>
              Buy now <i className='bx bx-right-arrow-alt button-icon'></i>
            </a>
          </div>

          <img src='assets/img/collection2.png' alt='' className='collection__img' />
        </div>
      </div>
    </section>
  );
}
