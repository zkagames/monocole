import React, { useCallback, useEffect, useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableRow,Paper, Button} from "@mui/material";
import { API, db } from "../server/firebase";
import { EvenetsDay, StyledTableRow, TableHeadStyled } from "./Events.style";
import { DailyEvent } from "../types";
import { Page } from "../style/style";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export  const AllEventsTable = ()=> {
 
  const [allEvents, setAllEvents] = useState<Array<DailyEvent>>([]);

  const getEvents = useCallback(async ()=>{
    const events = await API.getAllEvents(db)
    setAllEvents(events);
  },[]);
  
  useEffect(()=>{
    getEvents();
  },[]);

  const exportAllEvents = useCallback(()=>{
    const csvContent = "data:text/csv;charset=utf-8\n," 
    + ['date','time','name'].join(",")+"\n"
    + allEvents.map(e => `${e.date},${e.time},${e.name}`).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "all-events.csv");
    document.body.appendChild(link); 
    link.click();

  },[allEvents])



  if(!allEvents.length){
    return  <Page><b>No Events set. Go to "Daily Events</b></Page>
  }
 
  return (
 
   <Page>
   <EvenetsDay>
    <Button variant="outlined" startIcon={<SaveAltIcon />} onClick={()=>exportAllEvents()}>
      Export All events
    </Button>
      <br/>
      <br/>
  
    <TableContainer component={Paper}>
      <Table>
        <TableHeadStyled>
          <TableRow>
            <TableCell width={150}>Date</TableCell>
            <TableCell width={120}>Time</TableCell>
            <TableCell>Event</TableCell>
          </TableRow>
        </TableHeadStyled>
        <TableBody>
          {allEvents.map((event) => (
            <StyledTableRow key={event.id}> 
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.name}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   </EvenetsDay>
   </Page>

 );
}