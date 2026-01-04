import { Menu, X } from "lucide-react";
import { useState} from "react";

export default function Navbar( {scrolled}) {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 w-full z-50 py-1 transition-all duration-300 ${scrolled ? "bg-slate-950/60 backdrop-blur-lg border-b border-slate-800" : "bg-slate-950/20 backdrop-blur-sm"} `}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div>
                            <img src="/Chinchila.png" alt="Chinchila" className="h-12 w-12 sm:w-14 sm:h-14 " />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]">
                            <span className="text-white">Darvey</span>
                            <span className="text-blue-300">Parsin</span>
                        </span>
                    </div>
                    {/* Nav links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]">
                            Pricing
                        </a>
                        <a href="#testimonial" className="text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]">
                            Testimonials
                        </a>
                    </div>
                    <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                      {mobileMenuIsOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                    ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                      )}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden w-30 absolute top-full right-9 rounded-md bg-stone-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                        href="#features" 
                        className="block text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]"
                        onClick={() => setMobileMenuIsOpen(false)}>
                            Features
                        </a>
                        <a 
                        href="#pricing" 
                        className="block text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]"
                        onClick={() => setMobileMenuIsOpen(false)}>
                            Pricing
                        </a>
                        <a 
                        href="#testimonial" 
                        className="block text-gray-300 hover:text-white text-sm lg:text-base hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,1)]"
                        onClick={() => setMobileMenuIsOpen(false)}>
                            Testimonials
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}