export const timeStampConversion = (timestamp) => {
    
const date = new Date(timestamp);

// Set the timezone to 'Asia/Kolkata'
const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const localTime = date.toLocaleString('en-US', options);

return localTime // Output will be in the format MM/DD/YYYY, HH:MM:SS AM/PM

}