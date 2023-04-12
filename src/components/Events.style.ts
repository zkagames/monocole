import { TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
import { HEADER_COLOR } from "../style/style";

export const TableHeadStyled= styled(TableHead)`
    background:rgb(215 244 255);
`

export const EvenetsDay = styled.div`
    disaply:flex;
    font-weight:bold;
    margin-bottom: 32px;
`

export const AddEventForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    margin:16px 0px;
`

export const AddTitle=styled.div`font-weight:bold;
    color:${HEADER_COLOR}
`

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "rgb(245, 250, 255)",
    },
  }));


  export const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 4,
    pt: 2,
    px: 4,
    pb: 3,
    fontFamily:'verdana'
  };
