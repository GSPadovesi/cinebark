import type { MovieContextValue } from "@/types";
import { createContext } from "react";

export const MovieContext = createContext<MovieContextValue | null>(null)
