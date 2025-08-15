import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="headerSection">

        <div><img src="https://3extent.vercel.app/Assets/3extent.png" width="80" /></div>
        <div className="headerLinksSection">
          <div><a href="https://3extent.vercel.app/#partnerWithUs" className="headerLinks">Partner With Us</a></div>
          <div><a href="https://3extent.vercel.app/#aboutUs" className="headerLinks">About Us</a></div>
          <div><a href="https://3extent.vercel.app/#contactUs" className="headerLinks">Contact Us</a></div>
        </div>

      </div>

      <div className="advertiseSection">
        <div className="advertiseInfo">Certified Second-Hand Mobiles<br />
          Fully tested, graded, and ready for resale</div>
      </div>

      <div className="infoSection">
        At 3_EXTENT Pvt. Ltd., we specialize in the bulk supply of high-quality,
        pre-owned smartphones to resellers, retailers, and businesses across India.
        With a strong focus on quality, affordability, and trust, we help you grow
        your business by giving you access to the best devices at competitive wholesale
        prices.
      </div>

      <div className="appInfo">
        <div className='appInfoAdjustments'>
          <div className="textSection">We specialize in B2B wholesale trading of high-quality second-hand and refurbished mobile phones. Since our inception, we've been committed to delivering reliable, affordable, and premium-grade devices to retailers, resellers, and bulk buyers across India.</div>
          <div className="imageSection"><img src="https://3extent.vercel.app/Assets/home2.webp"  width="580"/></div>
        </div>
        <div className='appInfoAdjustments'>
          <div className="imageSection"><img src="https://3extent.vercel.app/Assets/home3.webp" width="580"/></div>
          <div className="textSection">With a deep understanding of the mobile market and strong supplier networks, we ensure that every device we sell is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our clients maximize their margins while giving customers access to the latest smartphones at the best value.</div>
        </div>
        <div className='appInfoAdjustments'>
          <div className="textSection">In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling thousands of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a large-scale distributor, we provide the products and service you can depend on.</div>
          <div className="imageSection"><img src="https://3extent.vercel.app/Assets/home4.webp" width="580"/></div>
        </div>
      </div>



    </div>
  );
}

export default App;
