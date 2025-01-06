import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Skill {
  type: string;
  list: string[];
}

interface AccordionItemProps {
  type: string;
  list: string[];
  // expandedCategory: string;
  // setExpandedCategory: (category: string) => void;
}

interface AccordionProps {
  items: Skill[];
  // expandedCategory: string;
  // setExpandedCategory: (category: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ type, list }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // const isExpanded = expandedCategory === type;

  const handleSkillsClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <li className="mt-3 pt-3 border-t-2">
      <div className="border-t border-gray-100 pt-4 first:border-0 first:pt-0">
        <button className="flex items-center justify-between w-full" onClick={handleSkillsClick}>
          {type}
          {isExpanded ? <ChevronUp/> : <ChevronDown/>}
        </button>
        <div className={`overflow-hidden ml-2 transition-all duration-200 ${isExpanded ? 'max-h-96 mt-3' : 'max-h-0'}`}>
          <ul className="space-y-2 pl-4">
            {list.map((item, index) => (
              <li className="w-full flex gap-2 items-center" key={index}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gray)]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <ul className="w-full space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          type={item.type}
          list={item.list}
          // expandedCategory={expandedCategory}
          // setExpandedCategory={setExpandedCategory}
        />
      ))}
    </ul>
  )

}

export default Accordion;