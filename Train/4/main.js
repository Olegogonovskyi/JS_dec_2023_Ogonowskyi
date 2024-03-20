
let date = new Date().getTime();
let datetwo = date;
new Promise((resolve, reject) => {
    setTimeout(function () {
        let p = date-datetwo;
        console.log(`one|| date: ${date} - datetwoo: ${datetwo} = ${p}`);
        date-datetwo >= 20000 ? reject ('wtf') : resolve(date +=10000);
}, 1000)})
.then(date => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let p = date-datetwo
            console.log(`two|| date: ${date} - datetwoo: ${datetwo} = ${p}`);
            date-datetwo >= 20000 ? reject ('wtf') : resolve(date +=10000);
        }, 1000)
    })
})
.then(date => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let p = date-datetwo
            console.log(`three|| date: ${date} - datetwoo: ${datetwo} = ${p}`);
            date-datetwo >= 20000 ? reject ('wtf') : resolve(date +=10000);
        }, 1000)
    })
})
    .then(date => {
        new Promise((resolve, reject) => {
            setTimeout(function () {
                let p = date-datetwo
                console.log(`four|| date: ${date} - datetwoo: ${datetwo} = ${p}`);
                date- datetwo >= 20000 ? reject ('wtf') : resolve(date +=10000);
            }, 1000)
        })
    }).catch(reason => {console.log(reason)})
