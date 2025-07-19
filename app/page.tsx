"use client";

import { useState } from "react";
import UserForm from "@/components/User/UserForm";
import UsersContainer from "@/components/User/UsersContainer";
import Hero from "@/components/User/Hero";

export default function Home() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Hero />
      <UserForm onUserAdded={() => setRefresh((r) => r + 1)} />
      {/* Re-mount UsersContainer to refresh list after adding user */}
      <div key={refresh}>
        <UsersContainer />
      </div>
    </div>
  );
}
