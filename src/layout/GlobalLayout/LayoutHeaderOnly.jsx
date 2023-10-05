import Header from "../../components/Header/v1/Header";

function LayoutHeaderOnly({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayoutHeaderOnly;
