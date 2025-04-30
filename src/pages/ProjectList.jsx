const projects = [
  { id: 1, name: 'Health Outreach', sector: 'Health', status: 'Ongoing' },
  { id: 2, name: 'Flood Response', sector: 'Disaster', status: 'Completed' },
];

export const ProjectList = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Projects</h2>
    <ul className="space-y-2">
      {projects.map((p) => (
        <li key={p.id} className="p-4 border rounded bg-white shadow">
          <div className="font-bold">{p.name}</div>
          <div>Sector: {p.sector}</div>
          <div>Status: {p.status}</div>
        </li>
      ))}
    </ul>
  </div>
);
