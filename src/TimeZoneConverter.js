import React, { useState } from "react";

function TimeZoneConverter() {
  const [localTime, setLocalTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [convertedTime, setConvertedTime] = useState("");

  const handleLocalTimeChange = (e) => {
    setLocalTime(e.target.value);
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const convertTimezone = () => {
    const convertedDate = new Date(localTime).toLocaleString("en-US", {
      timeZone: selectedTimezone
    });
    setConvertedTime(convertedDate);
  };

  return (
    <div>
      <h1>Time Zone Converter</h1>
      <div>
        <label>Local Time</label>
        <input
          type="datetime-local"
          value={localTime}
          onChange={handleLocalTimeChange}
        />
      </div>
      <div>
        <label>Time Zone</label>
        <select value={selectedTimezone} onChange={handleTimezoneChange}>
          <option value="">Select a time zone</option>
          <option value="America/New_York">New York</option>
          <option value="America/Los_Angeles">Los Angeles</option>
          <option value="Europe/London">London</option>
          <option value="Asia/Tokyo">Tokyo</option>
          <option value="Asia/Shanghai">China</option>
          <option value="Europe/Helsinki">Finland</option>
          <option value="Asia/Amman">Jordan</option>
        </select>
      </div>
      <button onClick={convertTimezone}>Convert Time</button>
      {convertedTime && (
        <div>
          <p>Converted Time: {convertedTime}</p>
        </div>
      )}
    </div>
  );
}

export default TimeZoneConverter;
