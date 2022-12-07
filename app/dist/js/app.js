'use strict';
import CalendarDay from "./CalendarDay/modelCalendarDay.js";
import ViewCalendarDay from './CalendarDay/ViewCalendarDay.js';
let diaTeste = new CalendarDay(new Date());
let viewTeste = new ViewCalendarDay('calendarTeste', 'teste', 'main');
viewTeste.render();
console.log(diaTeste.year);
//# sourceMappingURL=app.js.map