import Sneaker from "./sneaker.js";

export default function Featured() {
  const data = [
    {
      id: 1,
      name: "Nike Jordan",
      imgSrc: "assets/img/featured1.png",
      price: 149.99,
      isSale: false,
    },
    {
      id: 1,
      name: "Nike Jordan",
      imgSrc: "assets/img/featured1.png",
      price: 149.99,
      isSale: true,
    },
    {
      id: 1,
      name: "Nike Jordan",
      imgSrc: "assets/img/featured1.png",
      price: 149.99,
      isSale: true,
    },
  ];
  return (
    <section className='featured section' id='featured'>
      <h2 className='section-title'>FEATURED</h2>

      <div className='featured__container grid'>
        {data.map(item => (
          <Sneaker key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
