"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaCheck } from "react-icons/fa6";
import clsx from "clsx";

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  icon,
  placeholder = "Pilih...",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative w-full",
        isOpen ? "z-50" : "z-10",
        className
      )}
    >
      {label && (
        <label className="block text-xs font-medium text-[#10162C]/75 mb-1.5 tracking-wide">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={clsx(
          "w-full px-4 py-3 rounded-2xl bg-white border text-left flex items-center justify-between gap-3 transition-all cursor-pointer",
          isOpen
            ? "border-[#00A79C] ring-3 ring-[#00A79C]/15 shadow-md"
            : "border-[#B2B5B3]/60 hover:border-[#00A79C]/70 shadow-2xs"
        )}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {icon && (
            <span className="text-[#00A79C] text-base shrink-0">{icon}</span>
          )}
          <div className="truncate">
            <span className="block text-sm font-medium text-[#10162C] truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.sublabel && (
              <span className="block text-[11px] font-light text-[#10162C]/60 truncate">
                {selectedOption.sublabel}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedOption?.badge && (
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[rgba(0,167,156,0.12)] text-[#00A79C]">
              {selectedOption.badge}
            </span>
          )}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 rounded-full bg-[#E0E4E9]/60 text-[#154C96] flex items-center justify-center text-[11px]"
          >
            <FaChevronDown />
          </motion.span>
        </div>
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            role="listbox"
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-white rounded-2xl shadow-2xl border border-[#E0E4E9] p-2 max-h-72 overflow-y-auto space-y-1"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between gap-3 transition-colors cursor-pointer",
                    isSelected
                      ? "bg-[rgba(0,167,156,0.14)] text-[#154C96]"
                      : "hover:bg-[#E0E4E9]/50 text-[#10162C]"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {opt.icon && (
                      <span
                        className={clsx(
                          "text-sm shrink-0",
                          isSelected ? "text-[#00A79C]" : "text-[#154C96]/70"
                        )}
                      >
                        {opt.icon}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p
                        className={clsx(
                          "text-sm truncate",
                          isSelected ? "font-semibold" : "font-normal"
                        )}
                      >
                        {opt.label}
                      </p>
                      {opt.sublabel && (
                        <p className="text-[11px] font-light text-[#10162C]/60 truncate">
                          {opt.sublabel}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {opt.badge && (
                      <span
                        className={clsx(
                          "px-2 py-0.5 rounded-full text-[10px] font-medium",
                          isSelected
                            ? "bg-[#00A79C] text-white"
                            : "bg-[#E0E4E9]/80 text-[#154C96]"
                        )}
                      >
                        {opt.badge}
                      </span>
                    )}
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#00A79C] text-white flex items-center justify-center text-[10px]">
                        <FaCheck />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

