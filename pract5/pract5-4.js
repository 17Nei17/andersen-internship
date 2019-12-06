/* 4. Составить описание класса для представления времени. 
Предусмотреть возможности установки времени и изменения его отдельных полей (час, минута, секунда) с проверкой допустимости вводимых значений. 
В случае недопустимых значений полей выбрасываются исключения.
 Создать методы изменения времени на заданное количество часов, минут и секунд. */
class Time {
  constructor(hour, minutes, secunds) {
    this.hour = hour;
    this.minutes = minutes;
    this.secunds = secunds;
  }

  setTime(hour, minutes, secunds) {
    try {
      if (hour < 0 || hour > 23) {
        throw new SyntaxError('Не верное количество часов!');
      } else {
        this.hour = hour;
      }
      if (minutes < 0 || minutes > 59) {
        throw new SyntaxError('Не верное количество минут!');
      } else {
        this.minutes = minutes;
      }
      if (secunds < 0 || secunds > 59) {
        throw new SyntaxError('Не верное количество секунд!');
      } else {
        this.secunds = secunds;
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  getTime() {
    console.log(this.hour, this.minutes, this.secunds);
  }

  addHour(hour) {
    if (this.hour + hour >= 24) {
      this.hour = this.hour + hour - 24;
    } else this.hour = this.hour + hour;
  }

  addMinute(minutes) {
    if (this.minutes + minutes >= 60) {
      this.minutes = this.minutes + minutes - 60;
      this.hour = this.hour + 1;
    } else this.minutes = this.minutes + minutes;
  }

  addSecunds(secunds) {
    if (this.secunds + secunds >= 60) {
      this.secunds = this.secunds + secunds - 60;
      this.minutes = this.minutes + 1;
    } else this.secunds = this.secunds + secunds;
  }

  reduceMinute(minutes) {
    if (this.minutes + minutes < 0) {
      this.minutes = this.minutes + minutes + 60;
      this.hour = this.hour - 1;
    } else this.minutes = this.minutes - minutes;
  }

  reduceHour(hour) {
    if (this.hour - hour <= 0) {
      this.hour = this.hour - hour + 24;
    } else this.hour = this.hour - hour;
  }
}
const newSet = new Time();
newSet.setTime(10, 12, 33);
newSet.getTime();
// newSet.addHour(5);
// newSet.addMinute(50);
newSet.reduceMinute(5);
newSet.addSecunds(60);
// newSet.reduceHour(11);
newSet.getTime();
