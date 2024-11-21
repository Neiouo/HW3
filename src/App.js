import React, { useState} from "react";

// Weather Dashboard Component
function WeatherDashboard() {
  const [weather, setWeather] = useState({
    temperature: 0,
    condition: "",
    location: "",
  });
  const [city, setCity] = useState("");

  const fetchWeather = () => {
    // Simulated weather data
    const mockWeather = {
      temperature: Math.floor(Math.random() * 30),
      condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)],
      location: city,
    };
    setWeather(mockWeather);
  };

  return (
    <div className="weather-dashboard">
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Check Weather</button>
      <div className="weather-info">
        <p>Location: {weather.location}</p>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Condition: {weather.condition}</p>
      </div>
    </div>
  );
}

// Habit Tracker Component
function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (!newHabit.trim()) return;
    setHabits([
      ...habits,
      { id: Date.now(), name: newHabit, completed: false },
    ]);
    setNewHabit("");
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="habit-tracker">
      <h2>Daily Habits</h2>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add new habit"
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
            />
            <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
              {habit.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Notes Manager Component
function NotesManager() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;
    setNotes([
      ...notes,
      {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-manager">
      <h2>Quick Notes</h2>
      <div className="note-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note content"
        />
        <button onClick={addNote}>Save Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{note.date}</small>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Personal Dashboard</h1>
      <WeatherDashboard />
      <HabitTracker />
      <NotesManager />
    </div>
  );
}

export default App;