import { ReactNode } from "react";

export type Page = {
  path?: string,
  display: string,
  render: ()=> ReactNode
}

export type DailyEvent = {
    id:string;
    date: string;
    time: string;
    name: string;
  }