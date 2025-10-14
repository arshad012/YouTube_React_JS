import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Show, useColorMode } from "@chakra-ui/react"
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

import RestComponents from './components/restComponents';
import BottomBar from './components/BottomBar';
import WatchLater from './pages/WatchLater';
import History from './pages/History';

function App() {
  const { colorMode } = useColorMode();

  const triggerScroll = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <Box bgColor={colorMode === "light" ? "#ffffff" : "#0f0f0f"}>
      <Provider store={Store}>

        <RestComponents />
        {/*  */}
        <BrowserRouter>
          <Navbar />

          <YoutubeDrawer />

          <Routes>
            <Route path="/" element={<Home triggerScroll={triggerScroll} />} />
            <Route path="/watch" element={<Watch triggerScroll={triggerScroll} />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/you" element={<You />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/watch-history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Show breakpoint='(max-width: 750px)'>
            <BottomBar />
          </Show>
        </BrowserRouter>

      </Provider>
    </Box>
  )
}

export default App;