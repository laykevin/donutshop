import { useContext, useState, createContext } from "react";
import { IMenuContext } from ".";

export const MenuContext = createContext<IMenuContext | null>(null);
