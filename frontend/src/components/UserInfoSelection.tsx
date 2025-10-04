"use client";
import { useUser } from '@/lib/hooks/useUser';
import { countryOptions } from '@/lib/data/countries';

const UserInfoSelection = () => {

  const { userInfo, setUserInfo } = useUser()

  const ageOptions = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const raceOptions = ['White', 'Black', 'East Asian', 'First Nations', 'Pacific Islander', 'Multiracial', 'Other', 'Prefer not to say'];
  const schoolStatusOptions = ['High School', 'Undergraduate', 'Graduate', 'PhD', 'Not a Student', 'Prefer not to say'];

  const handleChange = (field: string, value: string) => {
    setUserInfo({
      ...userInfo,
      [field]: value
    });
    console.log(userInfo)
  };

  return (
    <div className="space-y-6 py-6">
      {/* Age Dropdown */}
      <div className="flex items-center justify-between">
        <label className="text-md font-bold text-foreground">Age</label>
        <select 
          value={userInfo.age}
          onChange={(e) => handleChange('age', e.target.value)}
          className="p-3 bg-bg border border-bg-light rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select age</option>
          {ageOptions.map(age => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>

      {/* Race/Ethnicity Dropdown */}
      <div className="flex items-center justify-between">
        <label className="text-md font-bold text-foreground">Ethnicity</label>
        <select 
          value={userInfo.race}
          onChange={(e) => handleChange('race', e.target.value)}
          className="bg-bg p-3 border border-bg-light rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select ethnicity</option>
          {raceOptions.map(race => (
            <option key={race} value={race}>{race}</option>
          ))}
        </select>
      </div>

      {/* Country Dropdown */}
      <div className="flex items-center justify-between">
        <label className="text-md font-bold text-foreground">Country</label>
        <select 
          value={userInfo.country}
          onChange={(e) => handleChange('country', e.target.value)}
          className="p-3 bg-bg border border-bg-light rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select country</option>
          {countryOptions.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* School Status Dropdown */}
      <div className='flex items-center justify-between'>
        <label className="text-md font-bold text-foreground">Employment</label>
        <select 
          value={userInfo.schoolStatus}
          onChange={(e) => handleChange('schoolStatus', e.target.value)}
          className="p-3 bg-bg border border-bg-light rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-bg-light/50 focus:border-transparent transition-colors"
        >
          <option value="">Select your status</option>
          {schoolStatusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserInfoSelection;
