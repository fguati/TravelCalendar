'use strict';
import captilize from "../../common/helperFunctions/captilize.js";
import CalendarDay from "../CalendarDay/modelCalendarDay.js";
export default class Month {
    number;
    year;
    name;
    firstDay;
    constructor(number, year, name) {
        this.number = number;
        this.year = year;
        this.name = name;
        this.name = captilize(name);
        const firstDayDate = new Date(year, number, 1);
        this.firstDay = new CalendarDay(firstDayDate);
    }
}
//# sourceMappingURL=modelMonth.js.map