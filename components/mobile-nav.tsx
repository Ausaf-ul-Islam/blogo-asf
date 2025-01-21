'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUser, FaTachometerAlt } from 'react-icons/fa';
import { auth } from '@/app/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const MobileNav = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/" className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors font-bold">
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors">
            <FaInfoCircle className="mr-2" /> About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors">
            <FaInfoCircle className="mr-2" /> Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
        </li>

        <div className="buttons gap-2 flex text-sm">
          {user ? (
            <>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/profilePage"
              >
                <FaUser className="mr-1" /> Profile
              </Link>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/dashboard"
              >
                <FaTachometerAlt className="mr-1" /> Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/login"
              >
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link
                className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-300 hover:border-purple-600 transition-colors duration-200 ease-in-out flex items-center"
                href="/signup"
              >
                <FaUser className="mr-1" /> Signup
              </Link>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default MobileNav;

