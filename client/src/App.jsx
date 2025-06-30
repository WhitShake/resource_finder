import { useEffect, useState } from 'react'

// Creates a fully scaffolded FE
function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch data from Express BE
    fetch('http://localhost:3001/api/resources')
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error('Error fetching resources:', err));
  }, []);

  return (
    <div className="App">
      <h1>Community Resources</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <strong>{resource.name}</strong> – {resource.category} – {resource.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
