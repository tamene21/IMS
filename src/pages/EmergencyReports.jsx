const reports = [
  { id: 1, type: 'Flood', location: 'Region A', date: '2025-04-29' },
  { id: 2, type: 'Conflict', location: 'Region B', date: '2025-04-27' },
];

export const EmergencyReports = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Emergency Reports</h2>
    <ul className="space-y-2">
      {reports.map((r) => (
        <li key={r.id} className="p-4 border rounded bg-white shadow">
          <div className="font-bold">{r.type}</div>
          <div>Location: {r.location}</div>
          <div>Date: {r.date}</div>
        </li>
      ))}
    </ul>
  </div>
);
