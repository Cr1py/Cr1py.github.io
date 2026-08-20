import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-ele-space">
      <Header/>
      <main className="flex-1 mt-20 mb-20">{children}</main>
      <Footer className="fixed bottom-0 left-0 right-0 z-50" />
    </div>
  );
};

export default Layout;