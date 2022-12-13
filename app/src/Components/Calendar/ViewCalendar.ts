'use strict'

import View from "../../common/ViewModel.js";
import CalendarDay from "../CalendarDay/modelCalendarDay.js";
import CalendarDayView from "../CalendarDay/ViewCalendarDay.js";
import Month from "../MonthName/modelMonth.js";
import MonthNameView from "../MonthName/ViewMonthName.js";
import Calendar from "./modelCalendar.js";

export default class ViewCalendar extends View {
    protected _calendar: Calendar;
    protected _currentDate: CalendarDay;

    constructor(_calendar: Calendar, _currentDate: CalendarDay, protected _id: string, protected _parentId: string, protected _tag:string, protected _class: string){
        super(_id, _parentId, _tag, 'calendar');
        this._calendar = _calendar;
        this._currentDate = _currentDate;
    }
    
    protected template(): string {
        return ''
    }
    
    public render(): void {
        // render all days that are meant to be displayed on the calendar
        const daysToRender = this._calendar.listOfCalendarDays;
        daysToRender.forEach(day => {this.renderDay(day)})
        
        // render the names of the months
        const monthNamesToRender = this._calendar.monthsDisplayed
        monthNamesToRender.forEach((month, index) => this.renderMonthName(month, index))
        
    }
    
    // private helper methods
    private renderDay(day: CalendarDay): void {
        const dayId = 'day' + day.dateString
        const dayViewToRender = new CalendarDayView(day, dayId, this._id, 'div');
        dayViewToRender.render();

    }

    private renderMonthName(month: Month, index: number): void {
        const monthView = new MonthNameView(month, month.name, this._id, 'p');
        monthView.render();
        monthView.positionName(this._calendar);
    }

}