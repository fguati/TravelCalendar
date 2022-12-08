'use strict'

import CalendarDay from "../CalendarDay/modelCalendarDay.js";

export default class Calendar {
    protected _lastMonth: number;
    protected _lastMonthsYear: number;

    protected _nextMonth: number;
    protected _nextMonthsYear: number;

    listOfCalendarDays: CalendarDay[];
    
    constructor(protected _currentDate: CalendarDay){
        _currentDate.month -= 1;
        this._lastMonth = _currentDate.month;
        this._lastMonthsYear = _currentDate.year;

        _currentDate.month += 1;
        this._currentDate = _currentDate


        _currentDate.month += 1;
        this._nextMonth = _currentDate.month;
        this._nextMonthsYear = _currentDate.year;

        this.listOfCalendarDays = this.populateDates()
    }

    private populateDates(): CalendarDay[]{
        let list_of_dates: CalendarDay[] = [];
        const firstDateCalendar = new Date(this._lastMonthsYear, this._lastMonth, 1)
        const lastDateCalendar = new Date(this._nextMonthsYear, this._nextMonth + 1, 0)

        let dayBeingAdded = new CalendarDay(firstDateCalendar);
        const lastCalendarDay = new CalendarDay(lastDateCalendar);

        while(dayBeingAdded.dateValue <= lastCalendarDay.dateValue){
            const copyOfDay = new CalendarDay(dayBeingAdded.date)
            list_of_dates.push(copyOfDay)
            
            dayBeingAdded.day = dayBeingAdded.day + 1;
        }
        
        return list_of_dates;
    }


}

        