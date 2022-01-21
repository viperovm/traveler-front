import Footer from "../wrappers/footer/Footer";
import Header from "../wrappers/header/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
