interface DefaultLayoutProps {
  children: React.ReactNode;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div>{children}</div>;
}

export default DefaultLayout;
