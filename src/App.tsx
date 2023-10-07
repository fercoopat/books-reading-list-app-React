import styles from './app.module.css';
import { Library, ReadingList } from './components';
import { useLibraryContext } from './hooks';

function App() {
  const { readingList } = useLibraryContext();

  return (
    <main className={styles['app-content']}>
      <Library />
      {readingList.length > 0 && <ReadingList />}
      {readingList.length < 1 && (
        <p className={styles['empty-reading-list']}>Add some books!</p>
      )}
    </main>
  );
}

export default App;
