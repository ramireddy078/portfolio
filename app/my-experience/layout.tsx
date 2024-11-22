export const metadata = {
    title: "My Experience | Venkat Website",
    description: "Learn more about My experience.",
  };
  
  const ExperienceLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div>  
        <main>{children}</main>
      </div>
    );
  };
  
  export default ExperienceLayout;
  