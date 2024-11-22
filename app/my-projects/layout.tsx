export const metadata = {
    title: "My Projects | Venkat Website",
    description: "Learn more my all projects .",
  };
  
  const ProjectsLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div>  
        <main>{children}</main>
      </div>
    );
  };
  
  export default ProjectsLayout;