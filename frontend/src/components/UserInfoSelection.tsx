"use client";
import { useState } from 'react';

const UserInfoSelection = () => {
  const [userInfo, setUserInfo] = useState({
    age: '',
    race: '',
    city: '',
    schoolStatus: ''
  });

  const ageOptions = Array.from({ length: 83 }, (_, i) => (i + 18).toString());
  const raceOptions = ['White', 'Black or African American', 'Asian', 'American Indian or Alaska Native', 'Native Hawaiian or Pacific Islander', 'Multiracial', 'Other', 'Prefer not to say'];
  const schoolStatusOptions = ['High School', 'Undergraduate', 'Graduate', 'PhD', 'Not Currently in School', 'Prefer not to say'];

  const handleChange = (field: string, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6 p-6">
      {/* Age Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">Age</label>
        <select 
          value={userInfo.age}
          onChange={(e) => handleChange('age', e.target.value)}
          className="w-full p-3 bg-bg-dark border border-bg-light/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select your age</option>
          {ageOptions.map(age => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>

      {/* Race/Ethnicity Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">Race/Ethnicity</label>
        <select 
          value={userInfo.race}
          onChange={(e) => handleChange('race', e.target.value)}
          className="w-full p-3 bg-bg-dark border border-bg-light/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select your race/ethnicity</option>
          {raceOptions.map(race => (
            <option key={race} value={race}>{race}</option>
          ))}
        </select>
      </div>

      {/* City Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">City</label>
        <input 
          type="text"
          value={userInfo.city}
          onChange={(e) => handleChange('city', e.target.value)}
          placeholder="Enter your city"
          className="w-full p-3 bg-bg-dark border border-bg-light/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        />
      </div>

      {/* School Status Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">School Status</label>
        <select 
          value={userInfo.schoolStatus}
          onChange={(e) => handleChange('schoolStatus', e.target.value)}
          className="w-full p-3 bg-bg-dark border border-bg-light/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select your school status</option>
          {schoolStatusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button 
        onClick={() => console.log('User info:', userInfo)}
        className="w-full bg-bg-light text-foreground py-3 px-4 rounded-lg font-medium hover:bg-bg-light/80 transition-colors border border-bg-light/20"
      >
        Continue
      </button>
    </div>
  );
};

export default UserInfoSelection;
