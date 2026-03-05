import React from 'react';
import UserProfile from './UserProfile';

export default function UserDashboard() {
  const user = { 
    name: 'John Doe', 
    email: 'john@example.com', 
    address: "bangalore"
};

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile />
    </div>
  );
}

