import {Routes,Route} from 'react-router-dom';

import News from "./news"
import NewsList from "./newsList"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<NewsList />} />
      <Route path="/newsList" element={<NewsList />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
