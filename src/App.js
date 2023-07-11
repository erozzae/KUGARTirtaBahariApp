import { Flex, VStack, Wrap, WrapItem, Box } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Produk from './components/Produk'
import Artikel from './components/Artikel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>           
      <Main/>
      <Produk/>
      <Artikel/>
      <Footer/>
    </div>
  );
}

export default App;
