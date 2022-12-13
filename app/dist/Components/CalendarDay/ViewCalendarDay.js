'use strict';
import ViewModel from "../../common/ViewModel.js";
export default class CalendarDayView extends ViewModel {
    _id;
    _parentId;
    _tag;
    calendarDay;
    constructor(calendarDay, _id, _parentId, _tag) {
        super(_id, _parentId, _tag, 'calendarDay');
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
        this.calendarDay = calendarDay;
        this.HTMLElement.style.gridColumn = String(this.calendarDay.weekDay + 2);
    }
    template() {
        return (`<p class='calendarDay__dayNumber'>${this.calendarDay.day}</p>`);
    }
}
//# sourceMappingURL=ViewCalendarDay.js.map