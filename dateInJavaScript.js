
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
// locals (string or Array) 'en-US' 'fr-FR' 'zh-CN' "en-AE"
// option => {an Object}
// this object has to customize the parts of date to be displayed likee
// weekday: 'narrow', 'short', 'long'
// year: 'numeric', "2-digit"
//month: "numeric", "short", "2-digit", "narrow", "long"
// day: "numeric", "2-digit"
// calender : "gregory", "islamic", "hebrew", "buddhist"

const ajjDin = new Date("2026, 8, 24");
console.log("for Us english format", ajjDin.toLocaleDateString("en-US")); // for Us english format 8/24/2026
console.log("De format ", ajjDin.toLocaleDateString("de-DE"));    // De format  24.8.2026
console.log("Arabic islamic format", ajjDin.toLocaleDateString("ar-EG")); // Arabic islamic format ٢٤‏/٨‏/٢٠٢٦

// we can pass an array of Locals ['en-US', "fr-FR"]; if the first didnot work the second will come after 
// sometimes it will get the system default local .


const option = {
                weekday: 'long', 
                year: "numeric",
                month: "long",
                day: "numeric"
               }
console.log(date.toLocalDateString("en-US", option));   
// ajj din    Monday, August 24, 2026
// whenever we call toLcalDateString internally js engine forward thses arguments to the new Intl.DateFormat(locales, options)
// new Intl.DateFormat constructor 
new Intl.DateFormat(locals, options).format(date);

// STEP 2:  local negotiation 
// provided locale with engine supporta locale. if not supported look after the backup onees.

// Step 3:  fetching ICU data from the browsers like V8 in chrome/node/spidermonkey in firefox.
// it has database where defined rles for INTERNATIONAL COMPONENTS UNICODE
// this database contain all defined rules about locals and many more TRANSLATION TOKENS FORMATING OF STRUCTURE
// 

// STTEP 4:  TIME ZONE ALIGNMENT 
  // this method extract the UTC time from Date object which store internaly as a single UNIX timestamp in milisecond.
// it shift it to  local timezone of the runtime environment befoee rendering the componenets.

