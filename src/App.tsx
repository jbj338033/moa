import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import RootLayout from "./layouts/RootLayout";
import Apply from "./pages/Apply";
import Notice from "./pages/Notice";
import My from "./pages/My";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./layouts/AdminLayout";
import AdminNotice from "./components/admin/AdminNotice";
import AdminClubs from "./components/admin/AdminClubs";
import AdminHome from "./components/admin/AdminHome";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/my" element={<My />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="notice" element={<AdminNotice />} />
            <Route path="clubs" element={<AdminClubs />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
