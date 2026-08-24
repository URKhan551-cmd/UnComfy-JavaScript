
let newDate = "2026-08-23";
function format(str) { 
    const date = new Date(newDate + "T00:00:00");  

    // console.log(date)   // 2026-08-22T20:00:00.000Z
    console.log("date ko tostring kiya:", date.toDateString());

    const today = new Date();
    console.log("today format: ", today) // 2026-08-23T16:05:57.537Z

    const tomorrow = new Date(today); 
    console.log("tommorow", tomorrow);   // 2026-08-23T16:08:18.105Z
   return date;
}
const final = format(newDate);
console.log(final)


// const today = new Date();
// console.log("today", today);
// const tommorow = new Date(today);
// console.log("before : ", tommorow);   // 2026-08-23T16:11:55.428Z
// tommorow.setDate(today.getDate() + 1);
// console.log("after: ", tommorow);   // 2026-08-24T16:11:55.428Z

// console.log("todate ma jane k bad", today.toDateString()); // Sun Aug 23 2026
// console.log("tomorrow todatestring", tommorow.toDateString());  // Mon Aug 24 2026

//  console.log("ye func se ane wale date ka ", date.toDateString())

// toDateString() always return an English formatted string,
// toLocalDateString() adapt human cultures it ensures that date looks correct around the world.
// automatically managed.
// toLocalDateString(locals, optional);
// locals (string or Array) 'en-US' 'fr-FR' 'zh-CN'

const ajjDin = new Date("2026, 8, 24");
console.log("for Us english format", ajjDin.toLocaleDateString("en-US")); // for Us english format 8/24/2026
console.log("De format ", ajjDin.toLocaleDateString("de-DE"));    // De format  24.8.2026
console.log("Arabic islamic format", ajjDin.toLocaleDateString("ar-EG")); // Arabic islamic format ٢٤‏/٨‏/٢٠٢٦



