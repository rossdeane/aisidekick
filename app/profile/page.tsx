"use client";

import { useUser } from "@stackframe/stack";

export default function ProfilePage() {
  const user = useUser({ or: "redirect" });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-sm text-gray-900">{user.displayName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <p className="mt-1 text-sm text-gray-900">{user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
