
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store'
import DynamicCounter from './components/DynamicCounter';
import Shop from './components/shop/Shop';

function App() {
  return (
    <Provider store={store} >

      {/* <Counter />
      <DynamicCounter /> */}
      <Shop />


    </Provider>
  );
}

export default App;
