import './App.css';
import Calendar from "@ericz1803/react-google-calendar";
import creds from './calendar-config.json';

const API_KEY = creds.apiKey;
const calendars = [
  { calendarId: "" }
];
function App() {
  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  );
}

export default App;
