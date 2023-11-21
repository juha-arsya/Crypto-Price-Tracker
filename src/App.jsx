import { AuthProvider, useAuth } from "./components/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoTrending from "./pages/CryptoTrending";
import About from "./pages/About";
import CryptoDetail from "./pages/CryptoDetail";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <CryptoHome /> : <Login />}
        />
        <Route
          path="/trending"
          element={isAuthenticated ? <CryptoTrending /> : <Login />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <About /> : <Login />}
        />
        <Route
          path="/coin/:id"
          element={isAuthenticated ? <CryptoDetail /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
