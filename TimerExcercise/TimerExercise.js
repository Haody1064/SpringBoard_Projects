function countDown(cnt){
    while (cnt > 0) {
        console.log(cnt);
        cnt--;
    }
    if ( cnt <= 0 ) {
        console.log("DONE!");
    }
}

function randomGame(){
    let num = 0;
    let cnt = 0;

    //it pauses program, function from https://www.sitepoint.com/delay-sleep-pause-wait/
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    while ( num <= .75){
        num = Math.random();
        cnt++
        sleep(1000);
    }
    console.log("It took " + cnt + " tries it took before we found a number greater than .75");
    
}