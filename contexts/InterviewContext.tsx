"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_HISTORY, MOCK_AI_RESPONSE } from "@/lib/mockData";

export type HistoryEntry = {
  id: number;
  role: string;
  company: string;
  status: string;
  score: number;
  date: string;
};

export type AnalysisResult = typeof MOCK_AI_RESPONSE;

const STORAGE_KEY = "interview-insight-history";

export const getStoredHistory = (): HistoryEntry[] => {
  if (typeof window === "undefined") return INITIAL_HISTORY;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return INITIAL_HISTORY;
};

type InterviewContextType = {
  history: HistoryEntry[];
  addEntry: (entry: Omit<HistoryEntry, "id">) => void;
  setResult: (result: AnalysisResult) => void;
  currentResult: AnalysisResult | null;
};

const InterviewContext = createContext<InterviewContextType | null>(null);

export function InterviewProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_HISTORY);
  const [currentResult, setCurrentResultState] = useState<AnalysisResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setHistory(getStoredHistory());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }
  }, [history, mounted]);

  const addEntry = (entry: Omit<HistoryEntry, "id">) => {
    const newEntry: HistoryEntry = {
      ...entry,
      id: Math.max(...history.map((h) => h.id), 0) + 1,
    };
    setHistory((prev) => [newEntry, ...prev]);
    setCurrentResultState(MOCK_AI_RESPONSE);
  };

  const setResult = (result: AnalysisResult) => {
    setCurrentResultState(result);
  };

  if (!mounted) return null;

  return (
    <InterviewContext.Provider value={{ history, addEntry, currentResult, setResult }}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  const ctx = useContext(InterviewContext);
  if (!ctx) throw new Error("useInterview must be used within InterviewProvider");
  return ctx;
}
