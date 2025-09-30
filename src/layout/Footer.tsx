export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2">
            {/* Replace with your logo */}
            <div className="bg-yellow-600 w-10 h-10 rounded flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Kitchnox</h2>
              <p className="text-sm text-gray-400">Modular Kitchen</p>
            </div>
          </div>
          <p className="text-gray-400">
            We made project specially for Modular Kitchen &amp; Interior
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
            <div>
              <p className="text-gray-400">Call Us</p>
              <p className="font-semibold text-white">+1800(345)-67890</p>
            </div>
            <div>
              <p className="text-gray-400">Send a message</p>
              <p className="font-semibold text-white">info@example.com</p>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog Grid
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Designs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Planner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Remodeling Kitchen
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Cabinet
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Modelling
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Installation
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-400">
          © Copyright <span className="text-white font-semibold">Kitchnox</span>{" "}
          2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
