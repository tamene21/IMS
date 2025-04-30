export const Login = () => (
  <div className="max-w-sm mx-auto mt-10">
    <h2 className="text-xl font-semibold mb-4">Login</h2>
    <input className="w-full border p-2 mb-3" placeholder="Username" />
    <input
      className="w-full border p-2 mb-3"
      type="password"
      placeholder="Password"
    />
    <button className="w-full bg-blue-600 text-white py-2">Login</button>
  </div>
);
