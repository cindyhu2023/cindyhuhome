import './styles.css';
import NavBar from './navbar';
import TypeWriterEffect from 'react-typewriter-effect';
import './bg'

let path = process.env.PUBLIC_URL + '/image/';

  function Landing() {
      return (
        <div className="img-container" data-slideshow id="intro">
        <img src={path + 'img1.jpg'} alt="bg1"/>
        <img src={path + 'img2.jpg'} alt="bg1"/>
        <img src={path + 'img3.jpg'} alt="bg1"/>
        <img src={path + 'img4.jpg'} alt="bg1"/>
        <img src={path + 'img5.jpg'} alt="bg1"/>
        <div className="bg-filter-wrap">
            <NavBar/>
            <div className="intro-div">
            <TypeWriterEffect
                textStyle={{
                    textAlign: 'center',
                }}
                startDelay={500}
                cursorColor="#3F3D56"
                multiText={[
                'Hello!',
                '哈囉！',
                'Hey there!',
                '你好！',
                'Welcome!',
                '歡迎！'
                ]}
                multiTextDelay={2000}
                typeSpeed={100}
                multiTextLoop={true}
            />
                <h1 className="underline-decor"><span className="txt-rotate" data-period="2000" data-rotate='[ "Hello!", "哈囉！", "Hey there!", "你好！", "Welcome!", "歡迎！" ]'></span>
                </h1>
                <h1>I'm Cindy Hu.</h1>
                <div className="d-flex justify-content-center mx-auto">
                    <a className="btn btn-outline-light btn-lg" href="#about">About Me</a>
                    <a className="btn btn-outline-light btn-lg" href="#contact">Contact</a>
                </div>
            </div>
        </div>
      </div>
      );
  }

  export default Landing;