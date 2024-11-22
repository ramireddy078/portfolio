export const metadata = {
    title: "About Us | Venkat Website",
    description: "Learn more about me mission.",
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
  