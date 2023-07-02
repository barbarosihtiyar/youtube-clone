import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed,ChannelDetail,VideoDetail,SearchFeed, Navbar } from "./components/index"
import "./index.css"
import "./reset.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exacth element={<Feed />}/>
          <Route path="/videoDetail/:id" element={<VideoDetail />}/>
          <Route path="/channelDetail/:id" element={<ChannelDetail />}/>
          <Route path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
