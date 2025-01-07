function getTime() {
    const time = new Date()
    console.log(time);

    let hour = time.getHours()
    console.log(hour);

    let min = time.getMinutes()
    console.log(min);

    let sec = time.getSeconds()
    console.log(sec);
    

    result.innerHTML = `${hour} : ${min} : ${sec} : ${hour >= 12 ? `PM` : 'AM'}`
    setTimeout(()=> {
        getTime()
    })

}
getTime()