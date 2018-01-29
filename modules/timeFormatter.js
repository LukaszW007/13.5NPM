function timeFormat(time) {
    var getTime = time;
    switch (getTime) {
        case getTime >= 3600:
            var hour = getTime/3600;
            var minutes = (getTime/60-60);
            var seconds = (minutes-minutes.toFixed())*60;
            var theTime = hour.toFixed()+"h "+minutes.toFixed()+"min "+seconds.toFixed()+"sec"
            return theTime;
            break;
        case getTime < 3600:
            var minutes = (getTime/60);
            var seconds = ((minutes-minutes.toFixed())*60).toFixed();
            var theTime = minutes.toFixed()+"min "+seconds+"sec"
            return theTime;
            break;
    }

}
exports.formattedTime=timeFormat();