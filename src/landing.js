import './styles.css';
// import img1 from '/image/img1.jpg';
// import img2 from '/image/img2.jpg';
// import img3 from '/image/img3.jpg';
// import img4 from '/image/img4.jpg';
// import img5 from '/image/img5.jpg';
// import $ from 'jquery';
import TypeWriterEffect from 'react-typewriter-effect';

// let path = process.env.PUBLIC_URL + '/image/';

  function Landing() {
      return (
        <div className="img-container" data-slideshow id="intro">
        {/* <img src={path + 'img1.jpg'} alt="bg1"/>
        <img src={img2} alt="bg1"/>
        <img src={img3} alt="bg1"/>
        <img src={img4} alt="bg1"/>
        <img src={img5} alt="bg1"/> */}
        <div className="bg-filter-wrap">
            <nav className="navbar navbar-expand-sm navbar-dark nav-pills">
                <a className="navbar-brand" href="#intro">CH.</a>
                  <ul className="navbar-nav nav justify-content-end" style={{width: "100%"}}>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#project">Experience & Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
              </nav>
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