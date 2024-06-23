const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mt-4 w-full max-w-3xl m-auto max-md:max-w-full max-md:px-4">
        <hr className="w-full" />
        <div className="my-6 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            nomomon © {year}
          </span>
          <span>🥕</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
