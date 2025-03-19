class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){
        if (!time || !callback){
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (time in this.alarmCollection){
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: true
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((item)=>item.time!==time);
    }
    getCurrentFormattedTime(){
        let now = new Date();
        return now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false });
    }

    start(){
        if(this.intervalId){
            return;
        }
        this.intervalId = setInterval(
            ()=>{this.alarmCollection.forEach((item)=>{
                if(item.time===this.getCurrentFormattedTime() && item.canCall){
                    item.canCall = false;
                    item.callback();
                }
            })}, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((item)=>{
            item.canCall = true;
        });
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}




try{
    let alarms = new AlarmClock();
    //alarms.addClock()

    console.log(alarms.getCurrentFormattedTime());
}catch(error)
{
    console.log(error);
}
