import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/ui/CustomCursor';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ChatbotUI from './components/ui/ChatbotUI';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <CustomCursor />
        <AppRouter />
        <WhatsAppButton />
        <ChatbotUI />
        <Toaster position="bottom-right" reverseOrder={false} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
