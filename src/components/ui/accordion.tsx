"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: string;
};

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary"
        aria-expanded={open}
      >
        {question}
        <svg
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  items: AccordionItemProps[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
