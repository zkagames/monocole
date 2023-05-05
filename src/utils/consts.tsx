import { AllEventsTable } from "../components/AllEventsTable"
import { Events } from "../components/Events"

export const PAGES = [{
    display: 'Daily Events',
    render: ()=> <Events/>
},{
    path: 'all',
    display: 'All Events',
    render: ()=> <AllEventsTable/>
}]

export const DATE_FORMAT = "DD/MM/YYYY"