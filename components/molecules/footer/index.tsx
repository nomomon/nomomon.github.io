const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full max-w-4xl my-6 flex justify-between m-auto max-md:max-w-full max-md:px-4">
        <span className="text-sm text-muted-foreground">nomomon © {year}</span>
        <span>☁️</span>
      </div>
    </footer>
  );
};

export default Footer;
