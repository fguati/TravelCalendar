'use strict'

import View from "../../common/ViewModel.js";
import Month from "./modelMonth.js";
import CalendarDay from "../CalendarDay/modelCalendarDay.js";
import Calendar from "../Calendar/modelCalendar.js";

export default class MonthNameView extends View {
    
    constructor(protected _month: Month, protected _id: string, protected _parentId: string, protected _tag:string){
        super(_id, _parentId, _tag, 'calendar__monthName')

    }
    
    protected template(): string {
        return `${this._month.name} - ${this._month.year}`
    }

    positionName(calendar: Calendar): void {
        const rowFirstDay = this.getRowOfFirstDay(calendar);
        this.HTMLElement.style.gridRow = `${rowFirstDay} / span 4`;
    }

    private getRowOfFirstDay(calendar: Calendar): number {
        const referenceDate: CalendarDay = calendar.monthsDisplayed[0].firstDay;
        const daysSinceStart: number = this._month.firstDay.dateValue - referenceDate.dateValue;
        const openCalendarPositions:number = 1 + referenceDate.weekDay;
        const gridPositionsSinceStart: number = daysSinceStart + openCalendarPositions;

        return Math.ceil(gridPositionsSinceStart / 7)
    }
}