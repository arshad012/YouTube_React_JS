import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, useColorMode } from "@chakra-ui/react"
import { Provider } from 'react-redux'

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Watch from './pages/Watch';
import Shorts from './pages/Shorts';
import Subscription from './pages/Subscription';
import You from './pages/You';

import YoutubeDrawer from './components/Drawer';
import { Store } from './Redux';
import NotFound from './pages/NotFound';

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box position='relative' h='100vh' bgColor={colorMode === "light" ? "#ffffff" : "#0f0f0f"}>
      <Provider store={Store}>
        <YoutubeDrawer />
        {/*  */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/you" element={<You />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Box>
  )
}

export default App;