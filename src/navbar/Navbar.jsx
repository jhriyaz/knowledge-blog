import img from '/profile.png'
const Navbar = () => {
    
  return (
    <header className="container mx-auto">
      <nav className=" flex justify-between items-center py-8 px-5 md:px-5 lg:px-0">
        <h2 className=" font-bold text-4xl">Knowledge Cafe</h2>
        <img className="w-[50px]" src={img} alt="Admin" />
        
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
