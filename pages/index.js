// import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from '../src/components/herobanner/HeroBanner'
import ServiceSection from '../src/components/service_section'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ServiceSection />
      <Footer />
    </div>
  )
}
