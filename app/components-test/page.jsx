"use client";

// app/components-test/page.jsx
// Comprehensive test page for all shared components
import { useState } from "react";
import Navbar from "@/components/shared/Navbar/index.jsx";
import Sidebar from "@/components/shared/Sidebar/index.jsx";
import PostCard from "@/components/shared/PostCard/index.jsx";
import PostSkeleton from "@/components/shared/PostSkeleton/index.jsx";
import VoteButtons from "@/components/shared/VoteButtons/index.jsx";
import UserAvatar from "@/components/shared/UserAvatar/index.jsx";
import TimeAgo from "@/components/shared/TimeAgo/index.jsx";
import CommunityInfo from "@/components/shared/CommunityInfo/index.jsx";
import LoadingSpinner from "@/components/shared/LoadingSpinner/index.jsx";
import UpvoteButton from "@/components/shared/UpvoteButton/index.jsx";
import DownvoteButton from "@/components/shared/DownvoteButton/index.jsx";
import Badge from "@/components/shared/Badge/index.jsx";
import ErrorMessage from "@/components/shared/ErrorMessage/index.jsx";
import ReportButton from "@/components/shared/ReportButton/index.jsx";
import ShareDropdown from "@/components/shared/ShareDropdown/index.jsx";
import Toast from "@/components/shared/Toast/index.jsx";
import Input from "@/components/shared/Input/index.jsx";
import Textarea from "@/components/shared/Textarea/index.jsx";
import Dropdown from "@/components/shared/Dropdown/index.jsx";
import CommentCard from "@/components/comment/CommentCard.jsx";
import CommentThread from "@/components/comment/CommentThread.jsx";
import ProfileHeader from "@/components/profile/ProfileHeader.jsx";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ComponentsTestPage() {
  const [showSkeletons, setShowSkeletons] = useState(false);
  const [voteCounts, setVoteCounts] = useState({
    post1: 1234,
    post2: 567,
    post3: 89,
  });
  const [voteStates, setVoteStates] = useState({
    post1: null,
    post2: "up",
    post3: "down",
  });
  const [toasts, setToasts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [upvoteActive, setUpvoteActive] = useState(false);
  const [downvoteActive, setDownvoteActive] = useState(false);

  const handleVote = (postId, vote) => {
    setVoteStates((prev) => ({
      ...prev,
      [postId]: vote,
    }));
    console.log(`Post ${postId} voted:`, vote);
  };

  const showToast = (message, variant = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, variant }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleReport = (reason) => {
    showToast(`Reported: ${reason}`, "info");
    console.log("Report reason:", reason);
  };

  // Mock data for posts
  const mockPosts = [
    {
      id: "post1",
      title: "Just launched my first Next.js app! Here's what I learned",
      content:
        "After months of learning React and Next.js, I finally deployed my first production app. The App Router is amazing, and I'm loving the developer experience. Here are the key takeaways:\n\n1. Server Components are game-changers\n2. The new routing system is intuitive\n3. TypeScript integration is seamless",
      author: { username: "devguru", avatar: null },
      community: { name: "webdev", members: "1.8m", href: "/r/webdev" },
      votes: voteCounts.post1,
      voteState: voteStates.post1,
      comments: 42,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      href: "/r/webdev/post1",
    },
    {
      id: "post2",
      title: "Beautiful sunset from my hike today",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      author: { username: "naturelover", avatar: null },
      community: { name: "photography", members: "950k", href: "/r/photography" },
      votes: voteCounts.post2,
      voteState: voteStates.post2,
      comments: 18,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      href: "/r/photography/post2",
    },
    {
      id: "post3",
      title: "Check out this amazing article about React Server Components",
      linkUrl: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023",
      linkPreview: {
        title: "React Labs: What We've Been Working On",
        description:
          "An update on our research into Server Components, Asset Loading, Optimistic UI, and more.",
        image: "https://react.dev/images/og-react.png",
        domain: "react.dev",
      },
      author: { username: "reactfan", avatar: null },
      community: { name: "reactjs", members: "980k", href: "/r/reactjs" },
      votes: voteCounts.post3,
      voteState: voteStates.post3,
      comments: 127,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      href: "/r/reactjs/post3",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="max-w-screen-2xl mx-auto flex gap-6 px-4 pb-20 lg:pb-4">
        {/* Main Content */}
        <main className="flex-1 py-6 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Component Test Page</h1>
            <p className="text-muted-foreground">
              Interactive demos of all shared components
            </p>
          </div>

          {/* VoteButtons Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">VoteButtons</h2>
            <Card className="p-6">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Default (no vote)</p>
                  <VoteButtons
                    initialVotes={42}
                    initialVoteState={null}
                    onVote={(vote) => console.log("Vote:", vote)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Upvoted</p>
                  <VoteButtons
                    initialVotes={123}
                    initialVoteState="up"
                    onVote={(vote) => console.log("Vote:", vote)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Downvoted</p>
                  <VoteButtons
                    initialVotes={-5}
                    initialVoteState="down"
                    onVote={(vote) => console.log("Vote:", vote)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Compact</p>
                  <VoteButtons
                    initialVotes={99}
                    initialVoteState={null}
                    compact={true}
                    onVote={(vote) => console.log("Vote:", vote)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Disabled</p>
                  <VoteButtons
                    initialVotes={0}
                    initialVoteState={null}
                    disabled={true}
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* UserAvatar Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">UserAvatar</h2>
            <Card className="p-6">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="space-y-2 text-center">
                  <UserAvatar username="johndoe" size="sm" />
                  <p className="text-xs text-muted-foreground">Small</p>
                </div>
                <div className="space-y-2 text-center">
                  <UserAvatar username="jane smith" size="md" />
                  <p className="text-xs text-muted-foreground">Medium</p>
                </div>
                <div className="space-y-2 text-center">
                  <UserAvatar username="alex" size="lg" />
                  <p className="text-xs text-muted-foreground">Large</p>
                </div>
                <div className="space-y-2 text-center">
                  <UserAvatar
                    username="testuser"
                    avatar="https://i.pravatar.cc/150?img=1"
                    size="md"
                  />
                  <p className="text-xs text-muted-foreground">With Image</p>
                </div>
              </div>
            </Card>
          </section>

          {/* TimeAgo Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">TimeAgo</h2>
            <Card className="p-6">
              <div className="space-y-3">
                <div>
                  <TimeAgo timestamp={new Date(Date.now() - 30 * 1000)} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    (30 seconds ago)
                  </span>
                </div>
                <div>
                  <TimeAgo timestamp={new Date(Date.now() - 45 * 60 * 1000)} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    (45 minutes ago)
                  </span>
                </div>
                <div>
                  <TimeAgo timestamp={new Date(Date.now() - 3 * 60 * 60 * 1000)} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    (3 hours ago)
                  </span>
                </div>
                <div>
                  <TimeAgo timestamp={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    (5 days ago)
                  </span>
                </div>
                <div>
                  <TimeAgo timestamp={new Date("2024-01-15")} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    (Jan 15, 2024)
                  </span>
                </div>
              </div>
            </Card>
          </section>

          {/* CommunityInfo Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CommunityInfo</h2>
            <Card className="p-6">
              <div className="space-y-3">
                <CommunityInfo
                  name="webdev"
                  members="1.8m"
                  href="/r/webdev"
                />
                <CommunityInfo
                  name="reactjs"
                  members={980000}
                  href="/r/reactjs"
                />
                <CommunityInfo
                  name="programming"
                  members={2100000}
                  href="/r/programming"
                />
              </div>
            </Card>
          </section>

          {/* LoadingSpinner Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">LoadingSpinner</h2>
            <Card className="p-6">
              <div className="flex items-center gap-8">
                <div className="space-y-2 text-center">
                  <LoadingSpinner size="sm" />
                  <p className="text-xs text-muted-foreground">Small</p>
                </div>
                <div className="space-y-2 text-center">
                  <LoadingSpinner size="md" />
                  <p className="text-xs text-muted-foreground">Medium</p>
                </div>
                <div className="space-y-2 text-center">
                  <LoadingSpinner size="lg" />
                  <p className="text-xs text-muted-foreground">Large</p>
                </div>
              </div>
            </Card>
          </section>

          {/* PostSkeleton Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">PostSkeleton</h2>
              <Button
                variant="outline"
                onClick={() => setShowSkeletons(!showSkeletons)}
              >
                {showSkeletons ? "Hide" : "Show"} Skeletons
              </Button>
            </div>
            {showSkeletons && (
              <div className="space-y-4">
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </div>
            )}
          </section>

          {/* PostCard Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">PostCard</h2>
            <p className="text-muted-foreground">
              Interactive post cards with voting functionality
            </p>
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                  onVote={(vote) => handleVote(post.id, vote)}
                />
              ))}
            </div>
          </section>

          {/* UpvoteButton & DownvoteButton Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">UpvoteButton & DownvoteButton</h2>
            <Card className="p-6">
              <div className="flex items-center gap-8 flex-wrap">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Upvote (inactive)</p>
                  <UpvoteButton
                    isActive={upvoteActive}
                    onClick={() => setUpvoteActive(!upvoteActive)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Upvote (active)</p>
                  <UpvoteButton isActive={true} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Downvote (inactive)</p>
                  <DownvoteButton
                    isActive={downvoteActive}
                    onClick={() => setDownvoteActive(!downvoteActive)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Downvote (active)</p>
                  <DownvoteButton isActive={true} />
                </div>
              </div>
            </Card>
          </section>

          {/* Badge Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Badge</h2>
            <Card className="p-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </Card>
          </section>

          {/* ErrorMessage Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">ErrorMessage</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <ErrorMessage message="This is a default error message" variant="default" />
                <ErrorMessage message="This is a destructive error" variant="destructive" />
                <ErrorMessage message="This is a warning message" variant="warning" />
              </div>
            </Card>
          </section>

          {/* Input & Textarea Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Input & Textarea</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Input</label>
                  <Input
                    placeholder="Enter text here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Value: {inputValue || "(empty)"}
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Textarea</label>
                  <Textarea
                    placeholder="Enter longer text here..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    Characters: {textareaValue.length}
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* ReportButton Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">ReportButton</h2>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <ReportButton onReport={handleReport} />
                <p className="text-sm text-muted-foreground">
                  Click to see report options
                </p>
              </div>
            </Card>
          </section>

          {/* ShareDropdown Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">ShareDropdown</h2>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <ShareDropdown
                  url="https://example.com/post/123"
                  title="Check out this amazing post!"
                />
                <p className="text-sm text-muted-foreground">
                  Click to see share options
                </p>
              </div>
            </Card>
          </section>

          {/* Toast Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Toast</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => showToast("Success message!", "success")}>
                    Show Success
                  </Button>
                  <Button onClick={() => showToast("Error occurred!", "error")}>
                    Show Error
                  </Button>
                  <Button onClick={() => showToast("Info message", "info")}>
                    Show Info
                  </Button>
                  <Button onClick={() => showToast("Warning message", "warning")}>
                    Show Warning
                  </Button>
                </div>
                <div className="space-y-2">
                  {toasts.map((toast) => (
                    <Toast
                      key={toast.id}
                      message={toast.message}
                      variant={toast.variant}
                      duration={3000}
                      onClose={() => removeToast(toast.id)}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </section>
          

          {/* Dropdown Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Dropdown</h2>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <Dropdown>
                  <Dropdown.Trigger asChild>
                    <Button>Open Dropdown</Button>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <Dropdown.Label>My Account</Dropdown.Label>
                    <Dropdown.Separator />
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Separator />
                    <Dropdown.Item>Log Out</Dropdown.Item>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </Card>
          </section>

          {/* CommentCard Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CommentCard</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <CommentCard
                  id="comment1"
                  author={{ username: "devguru", avatar: null }}
                  content="This is a great post! Thanks for sharing your experience with Next.js."
                  votes={42}
                  voteState="up"
                  createdAt={new Date(Date.now() - 1 * 60 * 60 * 1000)}
                  onVote={(vote) => console.log("Comment voted:", vote)}
                  onReply={(id) => console.log("Reply to:", id)}
                />
                <CommentCard
                  id="comment2"
                  author={{ username: "reactfan", avatar: null }}
                  content="I completely agree! The App Router is a game-changer."
                  votes={15}
                  voteState={null}
                  createdAt={new Date(Date.now() - 2 * 60 * 60 * 1000)}
                  replies={[
                    {
                      id: "reply1",
                      author: { username: "devguru", avatar: null },
                      content: "Thanks for the feedback!",
                      votes: 5,
                      voteState: null,
                      createdAt: new Date(Date.now() - 30 * 60 * 1000),
                    },
                  ]}
                  onVote={(vote) => console.log("Comment voted:", vote)}
                  onReply={(id) => console.log("Reply to:", id)}
                />
              </div>
            </Card>
          </section>

          {/* CommentThread Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CommentThread</h2>
            <Card className="p-6">
              <CommentThread
                comments={[
                  {
                    id: "c1",
                    author: { username: "user1", avatar: null },
                    content: "First comment in the thread",
                    votes: 10,
                    voteState: "up",
                    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
                    replies: [
                      {
                        id: "r1",
                        author: { username: "user2", avatar: null },
                        content: "Reply to first comment",
                        votes: 3,
                        voteState: null,
                        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
                      },
                    ],
                  },
                  {
                    id: "c2",
                    author: { username: "user3", avatar: null },
                    content: "Second comment",
                    votes: 5,
                    voteState: null,
                    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
                  },
                ]}
                onVote={(vote) => console.log("Vote:", vote)}
                onReply={(commentId, text) => {
                  console.log("Reply to", commentId, ":", text);
                  showToast("Reply submitted!", "success");
                }}
                sortBy="best"
                onSortChange={(sort) => console.log("Sort changed:", sort)}
              />
            </Card>
          </section>

          {/* ProfileHeader Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">ProfileHeader</h2>
            <div className="space-y-4">
              <ProfileHeader
                username="devguru"
                avatar={null}
                postKarma={1234}
                commentKarma={567}
                accountAge={new Date("2022-01-15")}
                postCount={42}
                commentCount={128}
                isOwnProfile={false}
                isFollowing={false}
                onFollow={() => showToast("Followed user!", "success")}
                onMessage={() => showToast("Message sent!", "info")}
              />
              <ProfileHeader
                username="nouuu"
                avatar={null}
                postKarma={5678}
                commentKarma={2345}
                accountAge={new Date("2021-06-20")}
                postCount={156}
                commentCount={432}
                isOwnProfile={true}
              />
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>

     
    </div>
  );
}

