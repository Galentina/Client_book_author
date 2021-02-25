import styles from './index.less';
import Book from '@/pages/book/Book';
import Author from '@/pages/author/Author'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Book/>
      <Author/>
    </div>
  );
}
