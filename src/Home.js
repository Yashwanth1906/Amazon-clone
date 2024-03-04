import React from 'react';
import './Home.css';
import Product from './Product';
export default function Home() {
  return (
    <div className='Home'>
        <div className='home_container'>
            <img className="banner" src='https://needthat.com/wp-content/uploads/2020/09/amazon-prime-day-banner.png'></img>
            <div className='home_row'>
                <Product id={1}desc="Titan" price={1500} image='https://rukminim1.flixcart.com/image/1664/1664/watch/8/g/6/9162sl01-titan-original-imadptzuwhgnqzmk.jpeg?q=90'
                star={4}
                />
                <Product id={2} desc="Samsung" price={10000} image='https://th.bing.com/th/id/OIP.tuyTFaew8LIw5fg9z-0HzAAAAA?rs=1&pid=ImgDetMain'
                star={5} />
            </div>
            <div className='home_row'>
              <Product id={3} desc="Dell" price={120000} image='https://images.idgesg.net/images/article/2017/08/dell_xps_13_right_side_half-open_3qtr-cropped-100733555-orig.jpg' star={4}/>
              <Product id={4} desc='Blue Star' price={35000} image="https://th.bing.com/th/id/OIP.9QMpnA79_NmlLmeEKa94HAAAAA?rs=1&pid=ImgDetMain" star={3}/>
              <Product id={5} desc="Boat Headphones" price={1500} image="https://cdn1.smartprix.com/rx-iR0ht9hJb-w1200-h1200/boat-airdopes-431-tr.jpg" star={5}/>
            </div>
            <div className='home_row'>
              <Product id={6} desc='Monitor' price={17000} image="https://superwidemonitor.com/wp-content/uploads/2020/07/Dell_U4919DW-1-1080x675.jpg" star={4}/>
            </div>
        </div>
    </div>
  )
}
