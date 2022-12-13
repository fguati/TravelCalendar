'use strict';
import Calendar from "./Components/Calendar/modelCalendar.js";
import ViewCalendar from "./Components/Calendar/ViewCalendar.js";
import CalendarDay from "./Components/CalendarDay/modelCalendarDay.js";
let diaTeste = new CalendarDay(new Date());
let calendarTeste = new Calendar(diaTeste);
let viewTeste = new ViewCalendar(calendarTeste, diaTeste, 'calendario', 'teste', 'div', 'calendar');
viewTeste.render();
//# sourceMappingURL=teste.js.map