'use strict';
import { Months } from "../common/enum/months.js";
export default class CalendarDay {
    _date;
    constructor(_date) {
        this._date = _date;
    }
    get day() {
        return this._date.getDate();
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
}
//# sourceMappingURL=modelCalendarDay.js.map