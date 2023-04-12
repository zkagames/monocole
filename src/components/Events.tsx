import { DatePicker } from "@mui/x-date-pickers"
import { Page } from "../style/style"
import dayjs from "dayjs";
import { useState } from "react";
import { EventsTable } from "./EventsTable";
import { DATE_FORMAT } from "../utils/consts";
import { EvenetsDay } from "./Events.style";
import { usePickerValue } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue";

export const Events =()=>{
    const [date, setDate] = useState(dayjs(new Date()));

   return <Page>
       
        <EvenetsDay>
            Daily events for
            <br/>
            <br/>
   
            <DatePicker 
            format={DATE_FORMAT}
            value={date} 
            onChange={
                value=>{
                    if(value){
                    setDate(value)}
                }}
            />

       </EvenetsDay>

    <EventsTable date={date.format(DATE_FORMAT)}/>
    </Page>
}