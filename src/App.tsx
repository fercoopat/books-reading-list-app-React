import { Library, ReadingList } from './components';
import { LibraryContextProvider } from './contexts';

function App() {
  return (
    <LibraryContextProvider>
      <Library />
      <ReadingList />
    </LibraryContextProvider>
  );
}

export default App;
