import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
