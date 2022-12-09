import React ,{Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import { storeProducts } from './ProductDetails/ProductDetails';
import ProductTable from './Components/ProductTable/ProductTable';

class App extends Component {
    render (){
      return (
        <div>
          <Navbar></Navbar>
          <ProductTable details={storeProducts}></ProductTable>
        </div>

      )
    }
}

export default App;
