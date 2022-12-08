'use strict'

import { Months } from "../../common/enum/months.js"

export default class CalendarDay {
    constructor(private _date: Date){
        this._date = new Date(_date)
    }
    
    get date(): Date {
        return this._date
    }

    get dateString(): string {
        return `${this.day}_${this.month + 1}_${this.year}`
    }

    set day(newDay: number) {
        this._date.setDate(newDay);
    }

    get day(): number {
        return this._date.getDate();
    }

    get weekDay(): number {
        return this._date.getDay();
    }

    set month(newMonth:number) {
        this._date.setMonth(newMonth);
    }

    get month(): number {
        return this._date.getMonth();
    }

    get monthName(): String {
        let monthName = Months[this.month].toLowerCase();
        const firstLetter = monthName[0].toUpperCase();
        monthName = firstLetter + monthName.substring(1)
        
        return monthName
    }

    get year(): number {
        return this._date.getFullYear()
    }

    get dateValue(): number {
        const milisecondsValue = this._date.getTime();
        const value = Math.floor(milisecondsValue / (1000 * 60 * 60 * 24));
        return value;
    }

}

