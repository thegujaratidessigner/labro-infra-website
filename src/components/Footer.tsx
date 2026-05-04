import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg overflow-hidden inline-block">
              <Image
                src="/logo.png"
                alt="Labro Infra"
                width={400}
                height={120}
                className="h-20 w-auto object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Labro Infra is a forward-thinking real estate and land investment company focused on identifying high-growth opportunities in emerging development corridors like Mumbai 3.0 / KSC Region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a href="/why-invest" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Why Invest in KSC
                </a>
              </li>
              <li>
                <a href="/government-support" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Government Support
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+91 7506674848</p>
                  <p className="text-gray-400">+91 98672 30303</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">info@labroinfra.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  1105, Shelton Cubix, Plot No. 87,<br />
                  Sector 15, CBD Belapur,<br />
                  Navi Mumbai, 400614
                </p>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <a
              href="https://wa.me/917506674848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Labro Infra. All rights reserved.
            </p>
            <a
              href="https://www.thegujaratidesigner.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Developed by The Gujarati Designer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
