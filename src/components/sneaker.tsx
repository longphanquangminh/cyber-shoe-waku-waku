type Props = {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  isSale: boolean;
};

export default function Sneaker(props: Props) {
  return (
    <article className='sneaker'>
      {props.isSale && <div className='sneaker__sale'>Sale</div>}
      <img src={props.imgSrc} alt='' className='sneaker__img' />
      <span className='sneaker__name'>{props.name}</span>
      <span className='sneaker__preci'>${props.price}</span>
      <a href='#' className='button-light'>
        Add to Cart <i className='bx bx-right-arrow-alt button-icon'></i>
      </a>
    </article>
  );
}
