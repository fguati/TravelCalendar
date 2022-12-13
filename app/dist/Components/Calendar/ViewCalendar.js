'use strict';
import View from "../../common/ViewModel.js";
import CalendarDayView from "../CalendarDay/ViewCalendarDay.js";
import MonthNameView from "../MonthName/ViewMonthName.js";
export default class ViewCalendar extends View {
    _id;
    _parentId;
    _tag;
    _class;
    _calendar;
    _currentDate;
    constructor(_calendar, _currentDate, _id, _parentId, _tag, _class) {
        super(_id, _parentId, _tag, 'calendar');
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
        this._class = _class;
        this._calendar = _calendar;
        this._currentDate = _currentDate;
    }
    template() {
        return '';
    }
    render() {
        const daysToRender = this._calendar.listOfCalendarDays;
        daysToRender.forEach(day => { this.renderDay(day); });
        const monthNamesToRender = this._calendar.monthsDisplayed;
        monthNamesToRender.forEach((month, index) => this.renderMonthName(month, index));
    }
    renderDay(day) {
        const dayId = 'day' + day.dateString;
        const dayViewToRender = new CalendarDayView(day, dayId, this._id, 'div');
        dayViewToRender.render();
    }
    renderMonthName(month, index) {
        const monthView = new MonthNameView(month, month.name, this._id, 'p');
        monthView.render();
        monthView.positionName(this._calendar);
    }
}
//# sourceMappingURL=ViewCalendar.js.map