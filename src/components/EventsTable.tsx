import React, { useCallback, useEffect, useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableRow,Paper, Button} from "@mui/material";
import { API, db } from "../server/firebase";
import {sortBy, uniqBy} from 'lodash'
import { StyledTableRow, TableHeadStyled } from "./Events.style";
import Event from '@mui/icons-material/Event';
import EventBusy from '@mui/icons-material/EventBusy';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { SetEventModal } from "./SetEventModal";
import { DailyEvent } from "../types";

export  const EventsTable = ({date}:{date:string})=> {
 
  const [dailyEvents, setDailyEvents] = useState<Array<DailyEvent>>([]);
  const [editedEvent, setEditedEvent] = useState<DailyEvent | undefined>();
  const [addEventOpen, setAddEventOpen] = useState(false);

  const getEvents = useCallback(async ()=>{
    const events = await API.getEvents(db, date)
    setDailyEvents(events);
  },[date])

  const deleteEvent = async (row:DailyEvent)=>{
    await API.deleteEvent(db, row);
    setDailyEvents(dailyEvents.filter(event=>event.id!==row.id))
  }

  const addEvent = (newEvent?:DailyEvent)=>{

    if(newEvent){  
      if(newEvent.date !==date){
        setDailyEvents(
          dailyEvents.filter(event=>event.id!==newEvent.id)
        )
      }else{
      setDailyEvents(
        sortBy( uniqBy([newEvent, ...dailyEvents ], 'id'),'time')
      )
      }
     }

    setAddEventOpen(false);
    setEditedEvent(undefined);
  }
  

  const openAddEvent = (newEvent?: DailyEvent)=>{
    setEditedEvent(newEvent);
    setAddEventOpen(true);
  }

  useEffect(()=>{
    getEvents();
  },[date])

  return (
 
   <>
    <Button variant="outlined" startIcon={<Event />} onClick={()=>openAddEvent()}>
    Add
    </Button>
    <br/>
    <br/>

   {!!dailyEvents.length && <TableContainer component={Paper}>
     <Table>
       <TableHeadStyled>
         <TableRow>
           <TableCell width={120}>Time</TableCell>
           <TableCell>Event</TableCell>
           <TableCell width={220}> </TableCell>
         </TableRow>
       </TableHeadStyled>
       <TableBody>
         {dailyEvents.map((event) => (
           <StyledTableRow key={event.id}> 
             <TableCell>{event.time}</TableCell>
             <TableCell>{event.name}</TableCell>
             <TableCell>
             <Button variant="outlined" startIcon={<EventNoteIcon />} onClick={()=>openAddEvent(event)}>
                Edit
              </Button>
              &nbsp; &nbsp;
              <Button variant="outlined" startIcon={<EventBusy />} onClick={()=>deleteEvent(event)}>
                Delete
              </Button>
            </TableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>}

   <SetEventModal open={addEventOpen} defaultDate={date} event={editedEvent} dailyEvents={dailyEvents} onClose={(newEvent)=>{addEvent(newEvent)}}/>
   </>

 );
}