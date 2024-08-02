function updateTime() {
    const now = new Date()

    const newYorkTime = new Date(now.toLocaleString('en-US', {timeZone:'America/New_York'}))
    document.querySelector('#new-york .time').textContent = newYorkTime.toLocaleTimeString();

    const londonTime = new Date(now.toLocaleString('en-GB', {timeZone:'Europe/London'}))
    document.querySelector('#london .time').textContent = londonTime.toLocaleTimeString();

    const tokyoTime = new Date(now.toLocaleString('ja-JP', {timeZone:'Asia/Tokyo'}))
    document.querySelector('#tokyo .time').textContent = tokyoTime.toLocaleTimeString();

    const torontoTime = new Date(now.toLocaleString('en-US', {timeZone: 'America/Toronto'}));
    document.querySelector('#toronto .time').textContent = torontoTime.toLocaleTimeString();



}

setInterval(updateTime,1000)  //calls the funtion every 1000ms which is 
updateTime() //initializes the function call for the first time