"use client";
import { Home, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useUser } from '@/lib/hooks/useUser';
import { countryOptions } from '@/lib/data/countries';
import Logo from './Logo';

const Sidebar = () => {
  const { userInfo, setUserInfo } = useUser()

  const [isUserInfoExpanded, setIsUserInfoExpanded] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
  ];

  const ageOptions = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const raceOptions = ['White', 'Black', 'East Asian', 'First Nations', 'Pacific Islander', 'Multiracial', 'Other', 'Prefer not to say'];
  const schoolStatusOptions = ['High School', 'Undergraduate', 'Graduate', 'PhD', 'Not a Student', 'Prefer not to say'];

  const handleChange = (field: string, value: string) => {
    setUserInfo({
      ...userInfo,
      [field]: value
    });
  };

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])
  
  return (
    <>
      {/* Sidebar */}
      <motion.aside 
        className="fixed top-4 left-4 overflow-hidden bg-bg-dark border border-gray-800 shadow-lg text-white z-40 transition-transform duration-300 w-80 rounded-2xl flex flex-col"
        initial={{ height: 0 }}
        animate={{ height: 'calc(100vh - 2rem)' }}
        transition={{ 
          duration: 1, 
          ease: [0.76, 0, 0.24, 1] 
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-800">
            <Logo />
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg transition-colors group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* User Info Section */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <button
                onClick={() => setIsUserInfoExpanded(!isUserInfoExpanded)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-bg transition-colors"
              >
                <span className="font-medium">User Info</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${isUserInfoExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              {isUserInfoExpanded && (
                <AnimatePresence>
                  <motion.div 
                    className="mt-2 space-y-4 px-2 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.76, 0, 0.24, 1] 
                    }}
                  >
                    {/* Age Dropdown */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-white block px-2">Age</label>
                      <select 
                        value={userInfo.age}
                        onChange={(e) => handleChange('age', e.target.value)}
                        className="w-full p-2 bg-bg border border-bg-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:border-transparent transition-colors"
                      >
                        <option value="">Select age</option>
                        {ageOptions.map(age => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>

                    {/* Race/Ethnicity Dropdown */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-white block px-2">Ethnicity</label>
                      <select 
                        value={userInfo.race}
                        onChange={(e) => handleChange('race', e.target.value)}
                        className="w-full p-2 bg-bg border border-bg-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:border-transparent transition-colors"
                      >
                        <option value="">Select ethnicity</option>
                        {raceOptions.map(race => (
                          <option key={race} value={race}>{race}</option>
                        ))}
                      </select>
                    </div>

                    {/* Country Dropdown */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-white block px-2">Country</label>
                      <select 
                        value={userInfo.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className="w-full p-2 bg-bg border border-bg-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:border-transparent transition-colors"
                      >
                        <option value="">Select country</option>
                        {countryOptions.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    {/* School Status Dropdown */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-white block px-2">Employment</label>
                      <select 
                        value={userInfo.schoolStatus}
                        onChange={(e) => handleChange('schoolStatus', e.target.value)}
                        className="w-full p-2 bg-bg border border-bg-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700/50 focus:border-transparent transition-colors"
                      >
                        <option value="">Select your status</option>
                        {schoolStatusOptions.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </nav>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
