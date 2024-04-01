export default function Shop() {
  return (
    <section className='featured section' id='shop'>
      <h2 className='section-title'>All Products</h2>

      <div className='featured__container grid'>
        <article className='sneaker'>
          <img src='assets/img/featured1.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Jordan</span>
          <span className='sneaker__preci'>$149.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/featured2.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Jordan</span>
          <span className='sneaker__preci'>$149.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/featured3.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Jordan</span>
          <span className='sneaker__preci'>$149.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/new2.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Sply</span>
          <span className='sneaker__preci'>$79.96</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/new3.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Sply</span>
          <span className='sneaker__preci'>$79.96</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/new4.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Sply</span>
          <span className='sneaker__preci'>$79.96</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/new5.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Sply</span>
          <span className='sneaker__preci'>$79.96</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/women1.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Womens</span>
          <span className='sneaker__preci'>$129.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/women2.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Womens</span>
          <span className='sneaker__preci'>$129.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/women3.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Womens</span>
          <span className='sneaker__preci'>$129.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>

        <article className='sneaker'>
          <img src='assets/img/women4.png' alt='' className='sneaker__img' />
          <span className='sneaker__name'>Nike Womens</span>
          <span className='sneaker__preci'>$129.99</span>
          <a href='#' className='button-light sneaker__button'>
            Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
          </a>
        </article>
      </div>

      <div className='sneaker__pages grid' style={{ justifyItems: "center" }}>
        <div>
          <span className='sneaker__pag'>1</span>
          <span className='sneaker__pag'>2</span>
          <span className='sneaker__pag'>3</span>
          <span className='sneaker__pag'>4</span>
          <span className='sneaker__pag'>&#8594;</span>
        </div>
      </div>
    </section>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
