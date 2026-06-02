import type { RoomContextValue } from "@/types";
import { createContext } from "react";

export const RoomContext = createContext<RoomContextValue | null>(null)
