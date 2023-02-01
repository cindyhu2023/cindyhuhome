import './styles.css';
import Landing from './landing';

let path = process.env.PUBLIC_URL + '/image/';

function App() {
  return (
    <div>
      <Landing/>
      <img src={path + 'img1.jpg'} alt="bg1"/>
    </div>
  );
}

export default App;
