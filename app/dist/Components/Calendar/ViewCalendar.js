'use strict';
import View from "../../common/ViewModel.js";
import CalendarDayView from "../CalendarDay/ViewCalendarDay.js";
export default class ViewCalendar extends View {
    _id;
    _parentId;
    _tag;
    _calendar;
    _currentDate;
    constructor(_calendar, _currentDate, _id, _parentId, _tag) {
        super(_id, _parentId, _tag);
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
        this._calendar = _calendar;
        this._currentDate = _currentDate;
        this.HTMLElement.classList.add('calendar');
    }
    template() {
        return '';
    }
    render() {
        const daysToRender = this._calendar.listOfCalendarDays;
        daysToRender.forEach(day => {
            const dayId = 'day' + day.dateString;
            const dayViewToRender = new CalendarDayView(day, dayId, this._id, 'div');
            dayViewToRender.render();
            const dayHTML = dayViewToRender.HTMLElement;
            dayHTML.style.gridColumn = String(day.weekDay + 1);
        });
    }
}
//# sourceMappingURL=ViewCalendar.js.map