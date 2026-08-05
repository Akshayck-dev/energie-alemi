import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className }: FAQProps) {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-0"
      collapsible
      className={cn("w-full flex flex-col gap-4", className)}
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="bg-white dark:bg-[#0a1628] rounded-xl shadow-md shadow-slate-200/50 overflow-hidden border border-slate-100 data-[state=open]:border-[#0047AB]/20 transition-colors"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 min-h-[56px] font-medium transition-all group">
              <span className="font-heading text-left text-lg text-slate-900 dark:text-white group-hover:text-[#0047AB] transition-colors">
                {item.question}
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-[#051024] flex items-center justify-center shrink-0 group-hover:bg-[#f0f4ff] transition-colors">
                <ChevronDown
                  className="h-5 w-5 text-slate-500 dark:text-white/60 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 group-data-[state=open]:text-[#0047AB]"
                  aria-hidden
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-slate-600 dark:text-white/80 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-6 pb-5 pt-0 text-base leading-relaxed">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
