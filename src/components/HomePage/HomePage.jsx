import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import Access from "../Access/Access"
import heroImage from '../../assets/hero.jpg';

function HomePage() {
  return (
  <>
    <Access />
    <Navbar />
    <div className='hero-container' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-text-container'>
        <p className='hero-title'>Here to help you achieve your American Dream.</p>
        <p className='hero-description'>Expert Document Preparer and Notary specializing in Immigration Services preparation and notarization tailored to the complexities of immigration paper work.</p>
      </div>

    </div>
  </>
  )
}

export default HomePage
