import Header from "../../components/Header/v1/Header";
import Footer from "../../components/Footer/v1/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
