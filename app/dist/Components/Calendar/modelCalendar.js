'use strict';
import CalendarDay from "../CalendarDay/modelCalendarDay.js";
import { Months } from "../../common/enum/months.js";
import Month from "../MonthName/modelMonth.js";
export default class Calendar {
    _currentDate;
    _lastMonth;
    _lastMonthsYear;
    _nextMonth;
    _nextMonthsYear;
    listOfCalendarDays;
    constructor(_currentDate) {
        this._currentDate = _currentDate;
        this._currentDate = _currentDate;
        let referenceDate = new CalendarDay(this._currentDate.date);
        referenceDate.month -= 1;
        this._lastMonth = referenceDate.month;
        this._lastMonthsYear = referenceDate.year;
        referenceDate.month += 2;
        this._nextMonth = referenceDate.month;
        this._nextMonthsYear = referenceDate.year;
        this.listOfCalendarDays = this.populateDates();
    }
    get lastMonth() {
        return new Month(this._lastMonth, this._lastMonthsYear, Months[this._lastMonth]);
    }
    get currentMonth() {
        return new Month(this._currentDate.month, this._currentDate.year, this._currentDate.monthName);
    }
    get nextMonth() {
        return new Month(this._nextMonth, this._nextMonthsYear, Months[this._nextMonth]);
    }
    get monthsDisplayed() {
        return [this.lastMonth, this.currentMonth, this.nextMonth];
    }
    populateDates() {
        let list_of_dates = [];
        const firstDateCalendar = new Date(this._lastMonthsYear, this._lastMonth, 1);
        const lastDateCalendar = new Date(this._nextMonthsYear, this._nextMonth + 1, 0);
        let dayBeingAdded = new CalendarDay(firstDateCalendar);
        const lastCalendarDay = new CalendarDay(lastDateCalendar);
        while (dayBeingAdded.dateValue <= lastCalendarDay.dateValue) {
            const copyOfDay = new CalendarDay(dayBeingAdded.date);
            list_of_dates.push(copyOfDay);
            dayBeingAdded.day = dayBeingAdded.day + 1;
        }
        return list_of_dates;
    }
}
//# sourceMappingURL=modelCalendar.js.map