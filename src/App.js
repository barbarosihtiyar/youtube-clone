import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed,ChannelDetail,VideoDetail,SearchFeed,Navbar,Sidebar } from "./components/index"
import "./index.css"
import "./reset.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path="/" exacth element={<Feed />}/>
          <Route path="/videoDetail" element={<VideoDetail />}/>
          <Route path="/channelDetail" element={<ChannelDetail />}/>
          <Route path="/searchFeed" element={<SearchFeed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
