"use client";

// components/shared/Dropdown/index.jsx
// Wrapper around shadcn DropdownMenu for consistency
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/**
 * Dropdown Component
 * 
 * Wrapper around shadcn/ui DropdownMenu components.
 * Provides consistent dropdown styling across the app.
 * 
 * Usage:
 * <Dropdown>
 *   <Dropdown.Trigger>Open</Dropdown.Trigger>
 *   <Dropdown.Content>
 *     <Dropdown.Item>Item 1</Dropdown.Item>
 *     <Dropdown.Item>Item 2</Dropdown.Item>
 *   </Dropdown.Content>
 * </Dropdown>
 */
function Dropdown({ children, ...props }) {
  return <DropdownMenu {...props}>{children}</DropdownMenu>;
}

Dropdown.Trigger = DropdownMenuTrigger;
Dropdown.Content = DropdownMenuContent;
Dropdown.Item = DropdownMenuItem;
Dropdown.Label = DropdownMenuLabel;
Dropdown.Separator = DropdownMenuSeparator;
Dropdown.Group = DropdownMenuGroup;
Dropdown.Shortcut = DropdownMenuShortcut;

export default Dropdown;


