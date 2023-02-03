import './styles.css';
import NavBar from './navbar';
import TypeWriterEffect from 'react-typewriter-effect';
import BackgroundSlider from 'react-background-slider'

let path = process.env.PUBLIC_URL + '/image/';
let img1 = path + 'img1.jpg';
let img2 = path + 'img2.jpg';

  function Landing2() {
      return (
        <div className="img-container" data-slideshow id="intro">
            <BackgroundSlider
        images={[img1, img2]}
        duration={3}
        transition={2}
        />
        {/* <img src={path + 'img1.jpg'} alt="bg1"/>
        <img src={path + 'img2.jpg'} alt="bg1"/>
        <img src={path + 'img3.jpg'} alt="bg1"/>
        <img src={path + 'img4.jpg'} alt="bg1"/>
        <img src={path + 'img5.jpg'} alt="bg1"/> */}
        <div className="bg-filter-wrap">
            <NavBar/>
            <div className="intro-div">
            <TypeWriterEffect
                textStyle={{
                    textAlign: 'center',
                    // fontFamily: 'Red Hat Display',
                    // color: '#3F3D56',
                    // fontWeight: 500,
                    // fontSize: '1.5em',
                }}
                // style={{
                //     textAlign: 'center'
                // }}
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
                <h1>I'm Cindy Hu. 1</h1>
                <div className="d-flex justify-content-center mx-auto">
                    <a className="btn btn-outline-light btn-lg" href="#about">About Me</a>
                    <a className="btn btn-outline-light btn-lg" href="#contact">Contact</a>
                </div>
                
            </div>
        </div>
      </div>
      );
  }

  export default Landing2;