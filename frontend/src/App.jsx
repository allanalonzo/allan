import React, { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ calories: '', protein: '', carbs: '', fat: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, form]);
    setForm({ calories: '', protein: '', carbs: '', fat: '' });
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Calorie Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Calories:
            <input name="calories" type="number" value={form.calories} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Protein (g):
            <input name="protein" type="number" value={form.protein} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Carbs (g):
            <input name="carbs" type="number" value={form.carbs} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Fat (g):
            <input name="fat" type="number" value={form.fat} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Add Entry</button>
      </form>
      <h2>Entries</h2>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>
            {entry.calories} kcal - {entry.protein}g P / {entry.carbs}g C / {entry.fat}g F
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
