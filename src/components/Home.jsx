
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import About from './About';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import GetInvolved from './GetInvolved';




const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <HowItWorks></HowItWorks>
            <Impact></Impact>
            <GetInvolved></GetInvolved>

            <Footer></Footer>
        </div>
    );
};

export default Home;