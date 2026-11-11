"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AppContextType {
  interestedEvents: string[];
  followedStudents: string[];
  toggleEventInterest: (event: string) => void;
  toggleFollowStudent: (student: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [interestedEvents, setInterestedEvents] = useState<string[]>([]);
  const [followedStudents, setFollowedStudents] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data when the application starts
  useEffect(() => {
    try {
      const savedEvents = localStorage.getItem("interestedEvents");
      const savedStudents = localStorage.getItem("followedStudents");

      if (savedEvents) {
        setInterestedEvents(JSON.parse(savedEvents));
      }

      if (savedStudents) {
        setFollowedStudents(JSON.parse(savedStudents));
      }
    } catch {
      console.error("Unable to load saved data.");
    }

    setIsLoaded(true);
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "interestedEvents",
        JSON.stringify(interestedEvents)
      );

      localStorage.setItem(
        "followedStudents",
        JSON.stringify(followedStudents)
      );
    }
  }, [interestedEvents, followedStudents, isLoaded]);

  function toggleEventInterest(event: string) {
    setInterestedEvents((previous) =>
      previous.includes(event)
        ? previous.filter((item) => item !== event)
        : [...previous, event]
    );
  }

  function toggleFollowStudent(student: string) {
    setFollowedStudents((previous) =>
      previous.includes(student)
        ? previous.filter((item) => item !== student)
        : [...previous, student]
    );
  }

  return (
    <AppContext.Provider
      value={{
        interestedEvents,
        followedStudents,
        toggleEventInterest,
        toggleFollowStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}