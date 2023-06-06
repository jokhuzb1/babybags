import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/bags/004.jpg';
import img2 from '../../assets/bags/10.jpg';
import img3 from '../../assets/bags/009.jpg';
function Images
({id}) {
  return (
    <section id={id}>
    <Carousel variant="dark" className='img-gallery'  interval={3000} >
      <Carousel.Item className='img-body'>
        <img
          className="d-block w-90"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>Производство из ПВХ-материала </h4>
          <h6>Влагозащитный материал, поверхность легко моется, и удобная ручка </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={img3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>Доставка по странам СНГ</h4>
          <h6>Быстрая доставка по странм СНГ, доставим в течении  5 до 10 дней</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>Выгодные цены</h4>
          <h6>
            Для оптовых клиентoв самые лучшие цены и качества
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Images
;