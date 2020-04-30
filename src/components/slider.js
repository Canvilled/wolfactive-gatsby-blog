import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import {Link} from "gatsby";
import 'react-alice-carousel/lib/alice-carousel.css'

export default class Slider extends Component {
  state = {
    responsive: { 1024: { items: 3 } },
  }
    render() {
    const { responsive} = this.state
    const handleOnDragStart = (e) => e.preventDefault();
    const{sliderData} = this.props;
    const elm = sliderData.map(sliderItem => {
      return (
        <Link key={sliderItem.node.id} to={sliderItem.node.slug} className="carousel" onDragStart={handleOnDragStart}>
           <img data-src={sliderItem.node.featured_media.source_url} alt={sliderItem.node.slug} className="lazyload"/>
           <div className="carousel__title title--section">
             {sliderItem.node.title}
           </div>
        </Link>
      );
    });

    return (
      <AliceCarousel
        buttonsDisabled={true}
        responsive={responsive}
        items={elm}
        autoPlayInterval={5000}
        autoPlayDirection="ltr"
        autoPlay={true}
        stopAutoPlayOnHover={true}
        mouseTrackingEnabled={true}
      />
    )
  }

}
