const bigTimeOutput = document.getElementById("time");
const fajrTid = document.getElementById("fajr-tid");
const duhurTid = document.getElementById("duhur-tid");
const asrTid = document.getElementById("asr-tid");
const maghribTid = document.getElementById("maghrib-tid");
const ishaTid = document.getElementById("isha-tid");

const fajrJamat = document.getElementById("fajr-jamat-tid");
const soloppgang = document.getElementById("soloppgang-tid");
const duhurJamat = document.getElementById("duhur-jamat-tid");
const asrJamat = document.getElementById("Asr-jamat-tid");
const maghribJamat = document.getElementById("maghrib-jamat-tid");
const ishaJamat = document.getElementById("isha-jamat-tid");
const jummaJamat = document.getElementById("Jummah-jamat-tid");

const nextPrayer = document.querySelector(".next-prayer");
const countdown = document.getElementById("countDowntime");

const bønnetider = {
  1: {
    Fajr: "03:26",
    Soloppgang: "05:07",
    Duhur: "13:30",
    Asr: "17:25",
    Maghrib: "21:20",
    Isha: "22:37",
  },
  2: {
    Fajr: "03:26",
    Soloppgang: "05:04",
    Duhur: "13:30",
    Asr: "17:26",
    Maghrib: "21:22",
    Isha: "22:38",
  },
  3: {
    Fajr: "03:25",
    Soloppgang: "05:01",
    Duhur: "14:00",
    Asr: "17:27",
    Maghrib: "21:25",
    Isha: "22:40",
  },
  4: {
    Fajr: "03:25",
    Soloppgang: "04:58",
    Duhur: "13:30",
    Asr: "17:28",
    Maghrib: "21:27",
    Isha: "22:42",
  },
  5: {
    Fajr: "03:24",
    Soloppgang: "04:55",
    Duhur: "13:30",
    Asr: "17:29",
    Maghrib: "21:30",
    Isha: "22:44",
  },
  6: {
    Fajr: "03:24",
    Soloppgang: "04:53",
    Duhur: "13:30",
    Asr: "17:30",
    Maghrib: "21:33",
    Isha: "22:46",
  },
  7: {
    Fajr: "03:23",
    Soloppgang: "04:50",
    Duhur: "13:30",
    Asr: "17:31",
    Maghrib: "21:35",
    Isha: "22:48",
  },
  8: {
    Fajr: "03:23",
    Soloppgang: "04:47",
    Duhur: "13:30",
    Asr: "17:32",
    Maghrib: "21:38",
    Isha: "22:51",
  },
  9: {
    Fajr: "03:22",
    Soloppgang: "04:45",
    Duhur: "13:30",
    Asr: "17:33",
    Maghrib: "21:40",
    Isha: "22:53",
  },
  10: {
    Fajr: "03:22",
    Soloppgang: "04:42",
    Duhur: "14:00",
    Asr: "17:34",
    Maghrib: "21:43",
    Isha: "22:56",
  },
  11: {
    Fajr: "03:21",
    Soloppgang: "04:39",
    Duhur: "13:30",
    Asr: "17:35",
    Maghrib: "21:45",
    Isha: "22:58",
  },
  12: {
    Fajr: "03:19",
    Soloppgang: "04:37",
    Duhur: "13:30",
    Asr: "17:36",
    Maghrib: "21:48",
    Isha: "23:00",
  },
  13: {
    Fajr: "03:16",
    Soloppgang: "04:34",
    Duhur: "13:30",
    Asr: "17:37",
    Maghrib: "21:51",
    Isha: "23:03",
  },
  14: {
    Fajr: "03:14",
    Soloppgang: "04:32",
    Duhur: "13:30",
    Asr: "17:38",
    Maghrib: "21:53",
    Isha: "23:05",
  },
  15: {
    Fajr: "03:12",
    Soloppgang: "04:29",
    Duhur: "13:30",
    Asr: "17:39",
    Maghrib: "21:56",
    Isha: "23:08",
  },
  16: {
    Fajr: "03:09",
    Soloppgang: "04:27",
    Duhur: "13:30",
    Asr: "17:40",
    Maghrib: "21:58",
    Isha: "23:10",
  },
  17: {
    Fajr: "03:07",
    Soloppgang: "04:24",
    Duhur: "14:00",
    Asr: "17:41",
    Maghrib: "22:00",
    Isha: "23:12",
  },
  18: {
    Fajr: "03:05",
    Soloppgang: "04:22",
    Duhur: "13:30",
    Asr: "17:42",
    Maghrib: "22:03",
    Isha: "23:14",
  },
  19: {
    Fajr: "03:03",
    Soloppgang: "04:20",
    Duhur: "13:30",
    Asr: "17:43",
    Maghrib: "22:05",
    Isha: "23:17",
  },
  20: {
    Fajr: "03:00",
    Soloppgang: "04:18",
    Duhur: "13:30",
    Asr: "17:43",
    Maghrib: "22:08",
    Isha: "23:19",
  },
  21: {
    Fajr: "02:58",
    Soloppgang: "04:15",
    Duhur: "13:30",
    Asr: "17:44",
    Maghrib: "22:10",
    Isha: "23:21",
  },
  22: {
    Fajr: "02:57",
    Soloppgang: "04:13",
    Duhur: "13:30",
    Asr: "17:45",
    Maghrib: "22:12",
    Isha: "23:23",
  },
  23: {
    Fajr: "02:55",
    Soloppgang: "04:11",
    Duhur: "13:30",
    Asr: "17:46",
    Maghrib: "22:15",
    Isha: "23:26",
  },
  24: {
    Fajr: "02:53",
    Soloppgang: "04:09",
    Duhur: "14:00",
    Asr: "17:47",
    Maghrib: "22:17",
    Isha: "23:28",
  },
  25: {
    Fajr: "02:51",
    Soloppgang: "04:07",
    Duhur: "13:30",
    Asr: "17:48",
    Maghrib: "22:19",
    Isha: "23:30",
  },
  26: {
    Fajr: "02:49",
    Soloppgang: "04:05",
    Duhur: "13:30",
    Asr: "17:48",
    Maghrib: "22:21",
    Isha: "23:32",
  },
  27: {
    Fajr: "02:48",
    Soloppgang: "04:03",
    Duhur: "13:30",
    Asr: "17:49",
    Maghrib: "22:24",
    Isha: "23:34",
  },
  28: {
    Fajr: "02:46",
    Soloppgang: "04:01",
    Duhur: "13:30",
    Asr: "17:50",
    Maghrib: "22:26",
    Isha: "23:36",
  },
  29: {
    Fajr: "02:44",
    Soloppgang: "03:59",
    Duhur: "13:30",
    Asr: "17:50",
    Maghrib: "22:28",
    Isha: "23:38",
  },
  30: {
    Fajr: "02:43",
    Soloppgang: "03:57",
    Duhur: "13:30",
    Asr: "17:51",
    Maghrib: "22:30",
    Isha: "23:40",
  },
  31: {
    Fajr: "02:41",
    Soloppgang: "03:56",
    Duhur: "14:00",
    Asr: "17:52",
    Maghrib: "22:32",
    Isha: "23:41",
  },
};

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.getDate(); // endre for å vise eksempel dag

  // legg til null foran enkeltstående tall
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeText = `${hours} : ${minutes} : ${seconds}`;

  // Klokka nå
  bigTimeOutput.textContent = timeText;

  // oppdater klokke Tabbell
  updateParyerTime(day, "Fajr");
  updateParyerTime(day, "Duhur");
  updateParyerTime(day, "Asr");
  updateParyerTime(day, "Maghrib");
  updateParyerTime(day, "Isha");
  updateParyerTime(day, "Soloppgang");
}

updateClock();
setInterval(updateClock, 1000);

function updateParyerTime(day, name) {
  switch (name) {
    case "Fajr":
      fajrTid.textContent = bønnetider[day].Fajr;
      break;
    case "Duhur":
      duhurTid.textContent = bønnetider[day].Duhur;
      break;
    case "Asr":
      asrTid.textContent = bønnetider[day].Asr;
      break;
    case "Maghrib":
      maghribTid.textContent = bønnetider[day].Maghrib;
      break;
    case "Isha":
      ishaTid.textContent = bønnetider[day].Isha;
      break;
    case "Soloppgang":
      soloppgang.textContent = bønnetider[day].Soloppgang;
      break;
  }
}

// oppdater jamat tabbell
function updateJamatTime() {
  const timeValues = document.querySelectorAll(".time-value");

  let jamat = [];

  timeValues.forEach((time) => {
    const timeText = time.textContent;

    const currentTime = new Date();
    const timeComponents = timeText.split(":");
    const currentHour = parseInt(timeComponents[0]);
    const currentMinutes = parseInt(timeComponents[1]);

    currentTime.setHours(currentHour);
    currentTime.setMinutes(currentMinutes);

    // Add 10 minutes
    currentTime.setMinutes(currentTime.getMinutes() + 10);

    // Check if the new minute value is beyond 59
    if (currentTime.getMinutes() >= 60) {
      // If yes, increment the hour and set the minutes accordingly
      currentTime.setHours(currentTime.getHours() + 1);
      currentTime.setMinutes(currentTime.getMinutes() % 60);
    }

    // Format the result
    const updatedTime = `${currentTime.getHours()}:${currentTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    jamat.push(updatedTime);
  });

  getNextPrayerTime(jamat);

  fajrJamat.textContent = "+15min";
  duhurJamat.textContent = jamat[2];
  asrJamat.textContent = jamat[3];
  // maghribJamat.textContent = ''
  ishaJamat.textContent = "+5min";
  jummaJamat.textContent = "14:00";
}

updateJamatTime();

////////////////////////////////////////////////////////////////////////////

function getNextPrayerTime(prayerTimes) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTimeStamp = currentHour * 60 + currentMinutes;

  let nextPrayerIndex = -1;
  let timeDiff;

  for (let i = 0; i < prayerTimes.length; i++) {
    const [prayerHours, prayerMinutes] = prayerTimes[i].split(":");
    const prayerTimestamp =
      parseInt(prayerHours) * 60 + parseInt(prayerMinutes);

    if (prayerTimestamp > currentTimeStamp) {
      timeDiff = prayerTimestamp - currentTimeStamp;
      nextPrayerIndex = i;
      break;
    }
  }

  if (nextPrayerIndex !== -1) {
    const nextPrayerTime = prayerTimes[nextPrayerIndex];

    countdown.textContent = `Neste bønn er kl. ${nextPrayerTime}`;
  } else {
    countdown.textContent = "Kom tilbake imorgen, in sha Allah 😃";
  }
}

//* PLING DOT */

function highlighter() {
  /*
  const times = document.querySelectorAll(".time-value");

  times.forEach((t, i) => {
    const now = new Date();

    const timeStr = t.innerText;

    let [hour, minute] = timeStr.split(":");
    console.log(now.setHours(hour, minute));

    if (now.setHours(hour, minute) > Date.now()) {
      console.log(`yes cloken er over ${timeStr} ${i}`);

      t.classList.add(
        "animate__animated",
        "animate__flash",
        "animate__infinite"
      );

      //  t.classList.toggle("animate__animated animate__flash animate__infinite");
    }
  }); */

  const times = document.querySelectorAll(".time-value");
  const now = new Date();

  let nextPrayerTime = Infinity; // Set it to a very large number initially

  times.forEach((t, i) => {
    const timeStr = t.innerText;
    const [hour, minute] = timeStr.split(":");
    const prayerTime = new Date(now);
    prayerTime.setHours(hour);
    prayerTime.setMinutes(minute);

    // If the prayer time is in the future and is earlier than the previously identified next prayer time
    if (prayerTime > now && prayerTime < nextPrayerTime) {
      nextPrayerTime = prayerTime; // Update the next prayer time
    }
  });

  times.forEach((t, i) => {
    const timeStr = t.innerText;
    const [hour, minute] = timeStr.split(":");
    const prayerTime = new Date(now);
    prayerTime.setHours(hour);
    prayerTime.setMinutes(minute);

    if (prayerTime.getTime() === nextPrayerTime.getTime()) {
      console.log(`yes cloken er over ${timeStr} ${i}`);

      t.classList.add(
        "animate__animated",
        "animate__bounce",
        "animate__infinite"
      );

      t.style.border = "5px solid";
    }
  });
}

highlighter();

// animate__animated animate__flash animate__infinite
