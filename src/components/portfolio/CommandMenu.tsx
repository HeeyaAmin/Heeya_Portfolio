"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";

type CommandItem = {
  label: string;
  href?: string;
  action?: () => void;
  shortcut?: string[];
  section?: string;
};

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";

      if (isCmdK) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const items: CommandItem[] = [
    {
      label: "Home",
      href: "/",
      shortcut: ["G", "H"],
      section: "Go to",
    },
    {
      label: "About",
      href: "/about",
      shortcut: ["G", "A"],
      section: "Go to",
    },
    {
      label: "Projects",
      href: "/projects",
      shortcut: ["G", "P"],
      section: "Go to",
    },
    {
      label: "Work",
      href: "/experience",
      shortcut: ["G", "W"],
      section: "Go to",
    },
    {
      label: "Skills",
      href: "/skills",
      shortcut: ["G", "S"],
      section: "Go to",
    },
    {
      label: "Contact",
      href: "/contact",
      shortcut: ["G", "C"],
      section: "Go to",
    },
    {
      label: "Resume",
      action: () => window.open("/Heeya_Resume_.pdf", "_blank"),
      shortcut: ["R"],
      section: "General",
    },
    {
      label: "GitHub",
      action: () => window.open("https://github.com/HeeyaAmin", "_blank"),
      shortcut: ["G"],
      section: "Links",
    },
    {
      label: "LinkedIn",
      action: () =>
        window.open("https://www.linkedin.com/in/heeya-amin/", "_blank"),
      shortcut: ["L"],
      section: "Links",
    },
    {
      label: "Send Email",
      action: () => (window.location.href = "mailto:heeyamin@iu.edu"),
      shortcut: ["E"],
      section: "General",
    },
  ];

  const grouped = items.reduce<Record<string, CommandItem[]>>((acc, item) => {
    const key = item.section || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[14vh] backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <Command
        className="relative z-[101] w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl"
        loop
      >
        <div className="border-b border-zinc-800 px-4">
          <Command.Input
            placeholder="Type a command or search..."
            className="h-14 w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <Command.List className="max-h-[420px] overflow-y-auto p-2">
          <Command.Empty className="px-4 py-8 text-sm text-zinc-500">
            No results found.
          </Command.Empty>

          {Object.entries(grouped).map(([group, groupItems]) => (
            <Command.Group
              key={group}
              heading={group}
              className="overflow-hidden px-2 py-2 text-xs uppercase tracking-[0.18em] text-zinc-500"
            >
              {groupItems.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() =>
                    runCommand(() => {
                      if (item.href) router.push(item.href);
                      else if (item.action) item.action();
                    })
                  }
                  className="mt-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-sm text-zinc-300 outline-none aria-selected:bg-zinc-900 aria-selected:text-white"
                >
                  <span>{item.label}</span>

                  {item.shortcut ? (
                    <div className="flex items-center gap-1">
                      {item.shortcut.map((key) => (
                        <span
                          key={key}
                          className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[11px] text-zinc-500"
                        >
                          {key}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}