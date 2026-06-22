import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import styles from './MainLayout.module.css';

/**
 * MainLayout — shared shell (navbar + footer) wrapped around every route.
 */
export function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
