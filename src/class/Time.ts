/// <reference path='../_all.ts' />

module CountUpTimerClass {

  export class Time {
    constructor(
      public id: number,
      public splitTimes: string[],
      public H: number,
      public M: number,
      public S: number,
      public times: string,
      public isNextDay: boolean,
      public createdAt: string
      ) {
      var setStr = this.numberToString;

      this.id = this.createId();
      this.H = this.setTimesNumber(this.splitTimes, 0);
      this.M = this.setTimesNumber(this.splitTimes, 1);
      this.S = this.setTimesNumber(this.splitTimes, 2);
      this.times = setStr(this.H) + ':' + setStr(this.M) + ':' + setStr(this.S);
      this.isNextDay = this.nextDayCheck();
    }

    static fromData(data: any): Time {
      return new Time(
        null,
        data,
        0,
        0,
        0,
        '00:00:00',
        false,
        String(new Date())
      );
    }

    private createId(): number {
      var date = new Date();
      return parseInt(String(date.getFullYear()) + String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds()), 10);
    }

    private setTimesNumber(splitTimes: string[], index: number): number {
      return parseInt(splitTimes[index], 10);
    }

    private numberToString(time: number): string {
      var strTime: string = String(time);
      if(time < 10) {
        strTime = '0' + strTime;
      }
      return strTime;
    }

    private nextDayCheck(): boolean {
      return Boolean(this.H == 0 && this.M == 0 && this.S == 0);
    }

    public setTimes() {
      var setStr = this.numberToString;
      this.times = setStr(this.H) + ':' + setStr(this.M) + ':' + setStr(this.S);
    }

  }
}