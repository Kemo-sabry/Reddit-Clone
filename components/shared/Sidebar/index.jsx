"use client";

// components/shared/Sidebar/index.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const popularCommunities = [
  { name: "programming", members: "2.1m", color: "from-red-500 to-pink-500" },
  { name: "webdev", members: "1.8m", color: "from-blue-500 to-cyan-500" },
  { name: "reactjs", members: "980k", color: "from-cyan-500 to-blue-600" },
  { name: "nextjs", members: "450k", color: "from-gray-700 to-black" },
  { name: "typescript", members: "620k", color: "from-blue-600 to-blue-800" },
  { name: "javascript", members: "3.2m", color: "from-yellow-400 to-yellow-600" },
];

/**
 * Sidebar Component
 * 
 * Right sidebar with:
 * - Home card with create post button
 * - Popular communities list
 * - Footer links
 * 
 * Hidden on mobile (shown via MobileMenu), visible on lg+ screens.
 */
export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-80 pt-6 pr-4 space-y-4">
      {/* Top Section - Home & Create Post */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-12" />
        <div className="p-4 -mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Home className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold">Home</p>
              <p className="text-xs text-muted-foreground">Your personal Reddit frontpage</p>
            </div>
          </div>
          <Link href="/submit" aria-label="Create a new post">
            <Button className="w-full" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Create Post
            </Button>
          </Link>
        </div>
      </Card>

      {/* Popular Communities */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold">Popular Communities</h3>
        </div>

        <div className="space-y-3">
          {popularCommunities.map((c) => (
            <Link
              key={c.name}
              href={`/r/${c.name}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition group"
              aria-label={`Visit r/${c.name} community`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-9 h-9 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-sm",
                    c.color
                  )}
                >
                  {c.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-sm group-hover:underline">r/{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.members} members</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/r/popular" aria-label="View all popular communities">
          <Button variant="ghost" className="w-full mt-4 text-sm">
            View All
          </Button>
        </Link>
      </Card>

      {/* Bottom Links */}
      <div className="text-xs text-muted-foreground space-y-2 px-2">
        <Link href="/about" className="block hover:underline" aria-label="About">
          About
        </Link>
        <Link href="/careers" className="block hover:underline" aria-label="Careers">
          Careers
        </Link>
        <Link href="/press" className="block hover:underline" aria-label="Press">
          Press
        </Link>
        <Link href="/advertise" className="block hover:underline" aria-label="Advertise">
          Advertise
        </Link>
        <Link href="/help" className="block hover:underline" aria-label="Help">
          Help
        </Link>
      </div>
    </aside>
  );
}


