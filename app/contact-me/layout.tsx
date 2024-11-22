export const metadata = {
    title: "Contact Us | Venkat Website",
    description: "Learn more to know contact me.",
  };
  
  const AboutLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div>  
        <main>{children}</main>
      </div>
    );
  };
  
  export default AboutLayout;
  