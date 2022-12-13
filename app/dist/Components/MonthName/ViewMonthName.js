'use strict';
import View from "../../common/ViewModel.js";
export default class MonthNameView extends View {
    _month;
    _id;
    _parentId;
    _tag;
    constructor(_month, _id, _parentId, _tag) {
        super(_id, _parentId, _tag, 'calendar__monthName');
        this._month = _month;
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
    }
    template() {
        return `${this._month.name} - ${this._month.year}`;
    }
    positionName(calendar) {
        const rowFirstDay = this.getRowOfFirstDay(calendar);
        this.HTMLElement.style.gridRow = `${rowFirstDay} / span 4`;
    }
    getRowOfFirstDay(calendar) {
        const referenceDate = calendar.monthsDisplayed[0].firstDay;
        const daysSinceStart = this._month.firstDay.dateValue - referenceDate.dateValue;
        const openCalendarPositions = 1 + referenceDate.weekDay;
        const gridPositionsSinceStart = daysSinceStart + openCalendarPositions;
        return Math.ceil(gridPositionsSinceStart / 7);
    }
}
//# sourceMappingURL=ViewMonthName.js.map