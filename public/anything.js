console.log ("Hala Madrid");

//rma - 15

rl = require('readline')
rli = rl.createInterface({
    input: process.stdin,
})
rli.on('line', give_station)

function give_station (num){
    switch (Number(num)) {
        case 15: 
            console.log('rma' , ' - 15')
            break
            default:
                console.log('Unknown station')
                break

    }
}