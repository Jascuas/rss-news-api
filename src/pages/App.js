import {Routes,Route} from 'react-router-dom';

import News from "./news"
import New from "./new"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<News />} />
      <Route path="/news" element={<News />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}

export default App;
