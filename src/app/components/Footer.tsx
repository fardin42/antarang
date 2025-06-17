'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-light-on-dark py-8 px-4 md:px-8 font-open-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold mb-2">Shrinath Realty</p>
          <p className="text-sm">Corporate Address: 2, Spandan, Opp Navrachana School,</p>
          <p className="text-sm">Sawarkar Nagar, Gangapur Road, Nashik. 422 013. Maharashtra (India)</p>
          <p className="text-sm mt-2">
            Website:{' '}
            <a 
              href="http://www.shrinathconstruction.com" 
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.shrinathconstruction.com
            </a>
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-sm">MahaRERA Reg No: [Your MahaRERA Number Here]</p>
          <p className="text-sm">Member of BAI | NAREDCO</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm">&copy; {currentYear} Shrinath Realty. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-4 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;