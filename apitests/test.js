import { google } from 'googleapis';
import * as dotenv from 'dotenv';
dotenv.config();

function getDaysArray() {
  const arr = [];

  for (
    const date = new Date('5, 16, 2022');
    date <= new Date();
    date.setDate(date.getDate() + 1)
  ) {
    arr.push(new Date(date));
  }
  return arr;
}

const daysArray = getDaysArray();

async function runAsync() {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  //const days = (new Date().getFullYear() - 2022) * 366 + (new Date().getMonth() + 1) * 31

  const range = `Running!A2:A${daysArray.length}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });


  // Poistetaan useammat merkinnät samalta päivältä. Reverse, koska data tulee uusin ensin ja tarvitaan vanhin ensin
  const arrayOfUniqueRuns = [...new Set(response.data.values.reverse().map(arr => arr[0]))];


  // Muunnetaan tekstimuotoiset päivämäärät Date objekteiksi
  const arrayOfRunDates = arrayOfUniqueRuns.map((value) => new Date(value));

  console.log(`${arrayOfRunDates.length} / ${daysArray.length}`);

  let runIterator = 0;
  const arrayOfDaysWithRuns = daysArray.map((date) => {
    // console.log('----');
    // console.log(date);
    // console.log(arrayOfRunDates[runIterator]);
    // console.log(date.getTime() === arrayOfRunDates[runIterator].getTime());
    if (date.getTime() === arrayOfRunDates[runIterator].getTime()) {
      runIterator++;
    }
    return [
      date,
      date.getTime() === arrayOfRunDates[runIterator - 1].getTime(),
    ];
  });
  return arrayOfDaysWithRuns;
}
runAsync();
