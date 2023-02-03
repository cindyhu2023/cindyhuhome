import './styles.css';
import Landing from './landing';
let path = process.env.PUBLIC_URL + '/image/';
// let img1 = path + 'img1.jpg';

function App() {
  return (
    <div>
      <Landing/>
      {/* <Landing2/> */}
      <img src={path + 'img1.jpg'} alt="bg1"/>
    </div>
  );
}

export default App;
