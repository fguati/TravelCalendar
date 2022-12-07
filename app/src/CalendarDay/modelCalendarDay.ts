'use strict'

import { Months } from "../common/enum/months.js"

export default class CalendarDay {
    constructor(
        private _date: Date
    ){}

    get day(): Number {
        return this._date.getDate()
    }

    get month(): number {
        return this._date.getMonth()
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
}

