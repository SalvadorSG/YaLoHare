import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <h1> Ya lo haré</h1>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
