import { Box, Button, Modal, Snackbar, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Event from '@mui/icons-material/Event';
import { AddEventForm, AddTitle, modalStyle } from "./Events.style";
import { API, db } from "../server/firebase";
import { DailyEvent } from "../types";
import short from 'short-uuid';



export const SetEventModal = ({open, defaultDate, event, dailyEvents, onClose}:{open:boolean, defaultDate: string, event?: DailyEvent, dailyEvents: Array<DailyEvent>, onClose: (event?: DailyEvent)=>void})=>{

    const [date, setDate] = useState(event?.date ?? defaultDate ?? '');
    const [time, setTime] = useState(event?.time ?? '');
    const [name, setName] = useState(event?.name ?? '');

    const [duplicateEvent, setDuplicateEvent] = useState('');

    const addEvent = async ()=>{
        const id =  event?.id ?? short.generate()
        const newEvent = {date, time, name, id};
        
        const duplicateEvent = dailyEvents.find(event=>event.time===time && event.date===date && event.id !==id);
        if(duplicateEvent){
            setDuplicateEvent(duplicateEvent.name);
           return;
        }
        
        if(event){
            await API.editEvent(db, newEvent); 
        }else{
            await API.addEvent(db, newEvent);
        }
       
        setTime('');
        setName('');
        onClose(newEvent);
    }

    useEffect(()=>{
        setDate(event?.date ?? defaultDate ?? '');
        setTime(event?.time ?? '');
        setName(event?.name ?? '');
    },[event])

    useEffect(()=>{
        setDate(defaultDate);
    },[defaultDate])

    return <Modal
    open={open}
    onClose={()=>onClose()}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={modalStyle}>
        <AddTitle>{event ? 'Edit' : 'Add'} Event at {date}</AddTitle>

            <AddEventForm>
            <TextField id="outlined-basic" label="DD/MM/YYYY" variant="outlined" value={date} onChange={(e)=>setDate(e.target.value)}/>
            
            <TextField id="outlined-basic" label="HH:MM" variant="outlined" value={time} onChange={(e)=>setTime(e.target.value)}/>
            
            <TextField id="outlined-basic" label="Event" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
            </AddEventForm>

            <Button variant="outlined" startIcon={<Event />} onClick={addEvent} disabled={!time || !name}>
            Set Event
            </Button>

            <Snackbar
        open={!!duplicateEvent}
        autoHideDuration={3000}
        onClose={()=>setDuplicateEvent('')}
        message={`This day already has "${duplicateEvent}" at ${time}`}
      />
    </Box>

</Modal>
}
