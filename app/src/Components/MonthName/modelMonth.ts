'use strict'

import captilize from "../../common/helperFunctions/captilize.js";
import CalendarDay from "../CalendarDay/modelCalendarDay.js";

export default class Month {
    public firstDay: CalendarDay;
    
    constructor(public number: number, public year: number, public name: string) {
        this.name = captilize(name)
        const firstDayDate = new Date(year, number, 1)
        this.firstDay = new CalendarDay(firstDayDate)
        
    }
}