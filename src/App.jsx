import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './core/hooks/useTheme';
import { LanguageProvider } from './core/hooks/useLanguage';
import { AppRoutes } from './presentation/routes/AppRoutes';
import './presentation/styles/global.css';

/**
 * App — composition root for cross-cutting React context (theme,
 * language) and the router. Keeps main.jsx a one-line bootstrap.
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
