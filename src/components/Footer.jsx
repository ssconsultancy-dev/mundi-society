import React from 'react';
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>123456789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:mundissociety1@gmail.com" className="hover:text-gray-300">
                mundissociety1@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Office:Co-Operative Hamz,
                    Opp. Multitech Tower JLPL, Sec. 91, Mohall
                E-mail: </span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                <a
                  href="https://forms.google.com/your-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Submit a Complaint
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#board" className="hover:text-gray-300">Board Members</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.378336208484!2d76.6727001148729!3d30.6898992816544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef1a68a2d6d7%3A0x7a2e76cfd77e153a!2sCo-Operative%20Homz%2C%20JLPL%2C%20Sector%2091%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1713625600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mundi Society Location"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} THE MUNDI(S) House Building
            Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;