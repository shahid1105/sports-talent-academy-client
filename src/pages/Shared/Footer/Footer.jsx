const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 bg-opacity-70 rounded-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <img
              src="logo.png"
              alt="Website Logo"
              className="h-12 mb-4 rounded-full"
            />
            <p className="text-sm">Sports Talent Academy</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Address</h4>
            <p>123 Dhanmondi, Dhaka</p>
            <p>Dhanmondi, Dhaka</p>
            <p>Bangladesh, 5470</p>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sports Talent Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
