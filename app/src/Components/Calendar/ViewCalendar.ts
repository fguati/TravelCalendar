'use strict'

import View from "../../common/ViewModel.js";
import CalendarDay from "../CalendarDay/modelCalendarDay.js";
import CalendarDayView from "../CalendarDay/ViewCalendarDay.js";
import Calendar from "./modelCalendar.js";

export default class ViewCalendar extends View {
    protected _calendar: Calendar;
    protected _currentDate: CalendarDay;

    constructor(_calendar: Calendar, _currentDate: CalendarDay, protected _id: string, protected _parentId: string, protected _tag:string){
        super(_id, _parentId, _tag);
        this._calendar = _calendar;
        this._currentDate = _currentDate;
        this.HTMLElement.classList.add('calendar')
    }

    protected template(): string {
        return ''
    }

    public render(): void {
        const daysToRender = this._calendar.listOfCalendarDays;

        daysToRender.forEach(day => {
            const dayId = 'day' + day.dateString
            const dayViewToRender = new CalendarDayView(day, dayId, this._id, 'div');
        
            dayViewToRender.render();
            const dayHTML = dayViewToRender.HTMLElement;
            dayHTML.style.gridColumn = String (day.weekDay + 1)
        })

    }

    
}