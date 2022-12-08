'use strict';
import ViewModel from "../../common/ViewModel.js";
export default class CalendarDayView extends ViewModel {
    _id;
    _parentId;
    _tag;
    calendarDay;
    constructor(calendarDay, _id, _parentId, _tag) {
        super(_id, _parentId, _tag);
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
        this.calendarDay = calendarDay;
    }
    template() {
        return (`<div class="calendarDay">
                <p class="calendarDay__dayNumber">${this.calendarDay.day}</p>
            </div>`);
    }
}
//# sourceMappingURL=ViewCalendarDay.js.map