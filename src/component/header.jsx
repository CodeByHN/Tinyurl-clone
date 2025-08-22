import React, { useState } from 'react'
import { FaQuestion } from "react-icons/fa";
import { GoUnlink } from "react-icons/go";

const Header = () => {
  const [isHelpAbbrOpen, setIsHelpAbbrOpen] = useState(false);

  const handleHelpAbbrClose = () => setIsHelpAbbrOpen(false);
  const handleHelpAbbrOpen = () => setIsHelpAbbrOpen(true);

  return (
    <div className="min-h-screen text-white">
     
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#012C4B] h-[100px]">
        <h1 className="text-3xl font-extrabold">
          <a href="/">TINYURL</a>
        </h1>

        <div className="flex items-center gap-x-6">
          <div
            className="bg-[#0980A1] p-2 rounded-full cursor-pointer relative"
            onMouseOver={handleHelpAbbrOpen}
            onMouseLeave={handleHelpAbbrClose}
          >
            <FaQuestion />
            {isHelpAbbrOpen && (
              <div className="absolute mt-2 bg-[#0980A1] p-2 rounded text-sm">
                help
              </div>
            )}
          </div>

          <div className="flex bg-[#0980A1] rounded">
            {["My URLs", "Plans", "Blogs", "Features", "Sign Up", "Sign In"].map(
              (item) => (
                <div
                  key={item}
                  className="font-medium hover:bg-[#10BDE5] cursor-pointer px-4 py-2 rounded"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </header>

      {/* Main Content (push down using padding) */}
      <main className="pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20">
          {/* Left side: URL form */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <img src="/tinyurl.png" alt="Tiny URL" className="w-6" />
              <p className="text-lg">Shorten a long URL</p>
            </div>

            <input
              type="url"
              placeholder="Enter link here"
              className="w-full rounded border border-gray-300 p-3 mb-6 focus:outline-none"
            />

            <div className="flex items-center gap-2 mb-2">
              <GoUnlink />
              <p className="text-lg">Customize your link</p>
            </div>

            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="tinyurl.com"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Enter alias"
                className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none"
              />
            </div>

            <button className="bg-green-700 hover:bg-green-900 text-white w-full py-3 rounded-lg">
              Shorten URL
            </button>
          </div>

          {/* Right side: Hero text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">The Original URL Shortener</h1>
            <p className="mb-4">Create shorter URLs with TinyURL.</p>
            <p className="mb-6">
              Want more out of your link shortener? Track link analytics, use
              branded domains for fully custom links, and manage your links with
              our paid plans.
            </p>

            <div className="flex gap-4 mb-8">
              <button className="hover:bg-white hover:text-black border border-white px-4 py-2 rounded">
                View Plans
              </button>
              <button className="bg-white text-black px-6 py-2 rounded">
                Create Free Account
              </button>
            </div>

            <div>
              <p className="font-semibold">TinyURL plans include:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Detailed Link Analytics</li>
                <li>Fully Branded Domains</li>
                <li>Bulk Short URLs</li>
                <li>Link Management Features</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 h-[40px] z-50 flex  items-center text-white">
        <ul className="flex gap-6 text-sm">
          <li>Copyright © TinyURL LLC  • </li>
          <li className="cursor-pointer hover:underline">Terms  • </li>
          <li className="cursor-pointer hover:underline"> Privacy Policy  •</li>
          <li className="cursor-pointer hover:underline"> Accessibility  •  </li>
        </ul>
      </footer>
    </div>
  );
};

export default Header;