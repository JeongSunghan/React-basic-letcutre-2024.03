import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() {
  return (
    <>
      <CardInput name={'제임스'} />
      <br />
      <CardInput2 name={'마리아'} email={'maria@gmail.com'} />
    </>
  );
}

export default App;