"use client";

import { UserDocument } from "@/lib/models/user";
import { useEffect, useState } from "react";

function UsersContainer() {
  const [users, setUsers] = useState<UserDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch {
      setUsers([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Users</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading users...</div>
      ) : users.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={String(user._id)}
              className="border-b pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-semibold">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">No users found.</div>
      )}
    </section>
  );
}

export default UsersContainer;
