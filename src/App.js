import './App.scss';
import ItemComponent from './component/itemComponent/ItemComponent';
import NotificationComponent from './component/notificationComponent/NotificationComponent';
import ProductComponent from './component/productComponent/ProductComponent';
import ProductSizeComponent from './component/productSizeComponent/ProductSizeComponent';

function App() {
  return (
    <main className="App">
      <NotificationComponent />
      <ProductSizeComponent />
      <ItemComponent />
      <ProductComponent />
    </main>
  );
}

export default App;
