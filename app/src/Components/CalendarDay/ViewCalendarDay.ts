'use strict'

import ViewModel from "../../common/ViewModel.js";
import CalendarDay from "./modelCalendarDay.js";

export default class CalendarDayView extends ViewModel {
    calendarDay: CalendarDay;

    constructor(calendarDay: CalendarDay, protected _id: string, protected _parentId: string, protected _tag:string){
        super(_id, _parentId, _tag, 'calendarDay')
        this.calendarDay = calendarDay
        this.HTMLElement.style.gridColumn = String (this.calendarDay.weekDay + 2)
    }

    protected template(): string {
        return (`<p class='calendarDay__dayNumber'>${this.calendarDay.day}</p>`)
    }
}