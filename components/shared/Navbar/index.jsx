"use client";

// components/shared/Navbar/index.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Home, MessageSquare, Bell, Plus, ChevronDown, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock user (replace with real auth later)
const mockUser = {
  username: "nouuu",
  avatar: null,
  karma: 1234,
};

/**
 * UserMenu Component
 * 
 * Dropdown menu for authenticated users showing profile options.
 */
function UserMenu({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2 pr-2 hover:bg-muted/10 transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex flex-col items-start text-xs">
            <span className="font-medium">{user.username}</span>
            <span className="text-muted-foreground">{user.karma} karma</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/u/${user.username}`}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * Navbar Component
 * 
 * Main navigation bar with:
 * - Logo and branding
 * - Home dropdown menu
 * - Search bar
 * - Action buttons (messages, notifications, create post)
 * - User menu or login button
 * 
 * Sticky header that stays at top on scroll.
 */
export default function Navbar({ user = mockUser }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 sm:px-6 gap-4 sm:gap-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="font-bold text-xl hidden sm:block">reddit</span>
          </Link>
        </div>

        {/* Home Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-2 font-medium hover:bg-muted/10 transition-colors hidden md:flex"
            >
              <Home className="w-5 h-5" />
              Home
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/r/popular">Popular</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/r/all">All</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search Reddit"
              className="pl-10 py-2 rounded-lg border border-muted/40 bg-muted/10 focus:ring-2 focus:ring-blue-500"
              aria-label="Search posts"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted/10 transition-colors hidden sm:flex"
            aria-label="Messages"
            asChild
          >
            <Link href="/messages">
              <MessageSquare className="w-6 h-6" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted/10 transition-colors hidden sm:flex"
            aria-label="Notifications"
            asChild
          >
            <Link href="/notifications">
              <Bell className="w-6 h-6" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted/10 transition-colors"
            aria-label="Create Post"
            asChild
          >
            <Link href="/submit">
              <Plus className="w-6 h-6" />
            </Link>
          </Button>

          {/* User Menu or Log In */}
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link href="/login">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Log In</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}


