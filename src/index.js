//Import Here to import only once
import { initializeApp } from '../node_modules/firebase/app';
import { vesselFunctions } from './vessel.js';
import { routeFunctions } from './route.js';
import { scheduleFunctions } from './schedule.js';
import { bookingFunctions } from './booking.js';
import { scannerFunctions } from './account.js';
import { travelFareFunctions } from './travelFare.js';
import { subscriptionFunctions } from './subscription.js';
import { displayFunctions } from './display.js';
import { subscriptionRegisterFunction } from './subscription-register.js';
import { loginVerification } from './login-config.js';
import { dashboardFunctions } from './admin-dashboard.js';
import { adminSubscriptionFunctions } from './admin-subscription.js';
import { accountsFunctions } from './admin-accounts';
import { accountsUserCountFunctions } from './admin-accountCountUser';
import { adminNotificationFunctions } from './admin-notification';
import { adminProfleFunctions } from './admin-profiles';
import { agencyProfleFunctions } from './agency-profile';
import { logout } from './logout';
import { session } from './session';
import { fetchPHPData } from './fetchFromPHP';

const firebaseConfig = {
  apiKey: "AIzaSyAUWz7jfrt46iBvAnZ-AESn8kNmqtbTlmw",
  authDomain: "callarboat-19b3b.firebaseapp.com",
  databaseURL: "https://callarboat-19b3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "callarboat-19b3b",
  storageBucket: "callarboat-19b3b.appspot.com",
  messagingSenderId: "68894973461",
  appId: "1:68894973461:web:008be388c45659cb7d781c",
  measurementId: "G-F86YXR2HNM"
}

// init firebase app
const app = initializeApp(firebaseConfig);
export { app };


document.addEventListener('DOMContentLoaded', function () {
  loginVerification(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  fetchPHPData();
});

document.addEventListener('DOMContentLoaded', function () {
  session(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  subscriptionRegisterFunction(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  adminProfleFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  agencyProfleFunctions(); // Call your function within the DOMContentLoaded event
});


document.addEventListener('DOMContentLoaded', function () {
  adminSubscriptionFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  dashboardFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  accountsFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  accountsUserCountFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  adminNotificationFunctions(); // Call your function within the DOMContentLoaded event
});

document.addEventListener('DOMContentLoaded', function () {
  logout(); // Call your function within the DOMContentLoaded event
});


const moduleSelected = document.getElementById('moduleSelected');
const moduleSelectedValue = moduleSelected.value;

console.log("moduleSelectedValue", moduleSelectedValue);

if (moduleSelectedValue == "vessel") {
  vesselFunctions();
}

if (moduleSelectedValue == "route") {
  routeFunctions();
}

if (moduleSelectedValue == "schedule") {
  scheduleFunctions();
}

if (moduleSelectedValue == "booking") {
  bookingFunctions();
}

if (moduleSelectedValue == "scanner") {
  scannerFunctions();
}

if (moduleSelectedValue == "travelFare") {
  travelFareFunctions();
}

if (moduleSelectedValue == "subscription") {
  subscriptionFunctions();
}

if (moduleSelectedValue == "display") {
  displayFunctions();
}


// if (moduleSelectedValue == "subscription-register") {
//   subscriptionRegisterFunction();
// }
// if (moduleSelectedValue == "login-config") {
//   loginVerification();
// }
// if (moduleSelectedValue == "admin-dashboard") {
//   dashboardFunctions();
// }
