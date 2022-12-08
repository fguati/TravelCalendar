'use strict';
import { Months } from "../../common/enum/months.js";
export default class CalendarDay {
    _date;
    constructor(_date) {
        this._date = _date;
        this._date = new Date(_date);
    }
    get date() {
        return this._date;
    }
    get dateString() {
        return `${this.day}_${this.month + 1}_${this.year}`;
    }
    set day(newDay) {
        this._date.setDate(newDay);
    }
    get day() {
        return this._date.getDate();
    }
    get weekDay() {
        return this._date.getDay();
    }
    set month(newMonth) {
        this._date.setMonth(newMonth);
    }
    get month() {
        return this._date.getMonth();
    }
    get monthName() {
        let monthName = Months[this.month].toLowerCase();
        const firstLetter = monthName[0].toUpperCase();
        monthName = firstLetter + monthName.substring(1);
        return monthName;
    }
    get year() {
        return this._date.getFullYear();
    }
    get dateValue() {
        const milisecondsValue = this._date.getTime();
        const value = Math.floor(milisecondsValue / (1000 * 60 * 60 * 24));
        return value;
    }
}
//# sourceMappingURL=modelCalendarDay.js.map