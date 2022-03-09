import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
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
