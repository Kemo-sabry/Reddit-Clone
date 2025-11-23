import React from "react";

export default function CommunityPage({ params }: { params: { subreddit: string } }) {
  const { subreddit } = params;

  // Dummy community data
  const communityData = {
    name: subreddit,
    description: "Welcome to this community!",
    members: 12345,
  };

  const posts = [
    { id: 1, title: "First post", votes: 12, comments: 3 },
    { id: 2, title: "Another post", votes: 5, comments: 2 },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-6 flex gap-6">
      {/* Main content */}
      <div className="flex-1 space-y-4">
        <div className="p-4 border rounded-lg bg-white">
          <h1 className="text-2xl font-bold">r/{communityData.name}</h1>
          <p className="text-sm text-gray-600">{communityData.members} members</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Join</button>
        </div>

        {/* Posts list */}
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg bg-white">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.votes} votes • {post.comments} comments</p>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-64">
        <div className="p-4 border rounded-lg bg-white">
          <h2 className="font-semibold text-lg mb-2">About Community</h2>
          <p>{communityData.description}</p>
        </div>
      </div>
    </div>
  );
}
