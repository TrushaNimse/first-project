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
      <div className='mainInfoSection'>
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
            <div><img src="https://3extent.vercel.app/Assets/home2.webp" width="600" className="imageSection" /></div>
          </div>
          <div className='appInfoAdjustments'>
            <div><img src="https://3extent.vercel.app/Assets/home3.webp" width="600" className="imageSection" /></div>
            <div className="textSection2">With a deep understanding of the mobile market and strong supplier networks, we ensure that every device we sell is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our clients maximize their margins while giving customers access to the latest smartphones at the best value.</div>
          </div>
          <div className='appInfoAdjustments'>
            <div className="textSection">In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling thousands of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a large-scale distributor, we provide the products and service you can depend on.</div>
            <div><img src="https://3extent.vercel.app/Assets/home4.webp" width="600" className="imageSection" /></div>
          </div>
        </div>

        <div className='partnershipSection'>
          <div className='partnershipSectionHeading'>Partner With Us</div>
          <div className='partnershipInfo'>Looking to stock up on reliable smartphones for resale? Partner with<span className='extent'> 3_EXTENT Pvt. Ltd.</span> and get access to a consistent, profitable, and growing supply chain.</div>
        </div>

        <div className='founderSection'>
          <div className='aboutUsTitile'>About Us</div>
          <div className='aboutUsCard'>
            <div className='founderCard'>
              <div><img src="https://3extent.vercel.app/Assets/CEO.jpeg" className='founderImage' /></div>
              <div className='founderInfo'>FOUNDER, Chief Executive Officer (CEO)</div>
              <div className='founderName'>Hrushikesh Tangadkar</div>
            </div>
            <div className='founderCard'>
              <div><img src="https://3extent.vercel.app/Assets/CTO.jpg" className='founderImage' /></div>
              <div className='founderInfo'>FOUNDER, Chief Technology Officer (CTO)</div>
              <div className='founderName'>Dipak Dhawade</div>
            </div>
            <div className='founderCard'>
              <div><img src="https://3extent.vercel.app/Assets/CGO.jpeg" className='founderImage' /></div>
              <div className='founderInfo'>FOUNDER, Chief Growth Officer (CGO)</div>
              <div className='founderName'>Vinod Gade</div>
            </div>

          </div>
        </div>

        <div className='ourMissionSection'>
          <div className='ourMissionSectionHeadings'>Our Mission</div>
          <div className='ourMissionSectionInfo'>To become India’s most trusted wholesale partner for second-hand and refurbished mobiles by consistently delivering quality, value, and customer satisfaction.</div>
          <div className='ourMissionSectionHeadings'>Our Values</div>
          <div>
            <div className='buisnessInfoOuterSection'><h1 className='buisnessInfo'>Quality First – </h1><div className='buisnessInfo2'> Every device is tested for performance and reliability.</div></div>
            <div className='buisnessInfoOuterSection'><h1 className='buisnessInfo'>Integrity in Business – </h1><div className='buisnessInfo2'> We believe in honest pricing and transparent deals.</div></div>
            <div className='buisnessInfoOuterSection'><h1 className='buisnessInfo'>Partnership Focused –  </h1><div className='buisnessInfo2'> Your success is our success.</div></div>
          </div>
        </div>

        <div className='contactUsSection'>
          <div className='contactUsHeadings'>Contact Us</div>
          <div className='contactUsSectionInfo'>We’re here to help you with bulk orders, partnership inquiries, or any questions about our products and services. Get in touch with us through the details below — our team will respond promptly.</div>
          
          
          <div className='cardOuterSection'>

            <div className='contactUsCard'>
              <div className='contactUsCardHeading'>
                <div></div>
                <div>Office Address</div>
              </div>
              <div>3_EXTENT Pvt. Ltd.
                Shop No. 310, Deluxe Mall,
                Pimpri, Pune – 411017,
                Maharashtra, India</div>
            </div>


            <div className='contactUsCard'>
              <div className='contactUsCardHeading'>
                <div></div>
                <div>Contact Us</div>
              </div>
              <div>
                <div>
                  <div></div>
                  <div>+91 9665856368</div>
                </div>
                <div>
                  <div></div>
                  <div>dipak.dhawade@3extent.com</div>
                </div>
              </div>
            </div>



            <div className='contactUsCard'>
              <div className='contactUsCardHeading'>
                <div></div>
                <div>Business Hours</div>
              </div>
              <div>
                <div>Monday – Saturday: 10:00 AM – 7:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
            </div>
            </div>

          
          </div>
        </div>
        );
}

        export default App;
