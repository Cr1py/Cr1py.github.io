import Header from "./Header";
import Footer from "../sections/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="fixed top-0 left-0 right-0 z-50" />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;