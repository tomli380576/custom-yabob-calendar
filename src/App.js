import './App.css';
import Calendar from "@ericz1803/react-google-calendar";
import creds from './calendar-config.json';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React from 'react';

const API_KEY = creds.apiKey;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:calendarId" element={<CalendarEmbed />} />
      </Routes>
    </BrowserRouter>
  );
}

const CalendarEmbed = () => {
  const { calendarId } = useParams();
  console.log(calendarId);
  const calendars = [
    { calendarId: calendarId }
  ];
  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  )
}

export default App;
