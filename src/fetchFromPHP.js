import { app } from './index';
import { getFirestore, collection, getDocs, addDoc } from '../node_modules/firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "../node_modules/firebase/storage";
export function fetchPHPData() {
    const { v4: uuidv4 } = require('uuid');
    const bcrypt = require('bcryptjs');

    // Initialize Firestore
    const db = getFirestore(app);
    const storage = getStorage(app);
    let dataToSave = [];

    // const userData = {
    //     companyName: 'fast',
    //     subscriptionPlan: 'mon',
    //     startDate: 'jan-2',
    //     endDate: 'adaf',
    //     email: 'callarboat@gmail.com',
    //     daysLeft: 30,
    //     password: "hello12345",
    //     userStatus: "active",
    //     downloadURL: "shdfkhskfauksa"
    // }
    // localStorage.removeItem('userData');
    // localStorage.removeItem('Bill');

    // Serializing and saving the object in local storage
    // localStorage.setItem('userData', JSON.stringify(userData));

    // Your hashPassword function 
    async function hashPassword(password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            return hashedPassword;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw error; // You might want to handle or log the error appropriately
        }
    }

    //Function for error message for modal
    function errorMessage(errorDiv, errortag, errorMessage, color) {
        // Display error message in the designated error-message element
        const errorMessageElement = document.getElementById(errortag);
        errorMessageElement.textContent = errorMessage;
        // Remove any existing background color classes
        errorMessageElement.classList.remove('bg-danger', 'bg-success', 'bg-info', 'bg-warning', 'bg-primary');

        // Add Bootstrap's primary background color class
        errorMessageElement.classList.add(color);

        // Show both the error-message and errormsg elements
        const errorDivElement = document.getElementById(errorDiv);
        errorDivElement.style.display = 'block'; // Show the error message div

        // Hide error message after 3 seconds
        setTimeout(function () {
            errorDivElement.style.display = 'none';
        }, 3000);
    }

    // wait();
    function showToast() {
        var toastEl = document.getElementById('myToast');
        var toast = new bootstrap.Toast(toastEl); // Initialize the toast

        toast.show(); // Show the toast

        // Hide the toast after 5 seconds (5000 milliseconds)
        setTimeout(function () {
            toast.hide();
        }, 5000);
    }


    function getQueryStringParams(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // function displaySessionData() {
    // Retrieve the JSON string from localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData !== null) {
        showToast();
        const agencyData = JSON.parse(storedUserData);
        console.log(agencyData);
        dataToSave.push(agencyData.companyName);
        dataToSave.push(agencyData.subscriptionPlan);
        dataToSave.push(agencyData.startDate);
        dataToSave.push(agencyData.endDate);
        dataToSave.push(agencyData.email);
        dataToSave.push(agencyData.daysLeft);
        dataToSave.push(agencyData.password);
        dataToSave.push(agencyData.userStatus);
        dataToSave.push(agencyData.downloadURL);
    }

    // }

    var storedFormDataString = localStorage.getItem('Bill');
    let subscriptionFee;
    // Check if the data exists
    if (storedFormDataString) {
        // Parse the JSON string back to an object
        var storedFormData = JSON.parse(storedFormDataString);
        subscriptionFee = storedFormData.subscriptionFee;
    }

    // displaySessionData();
    let payment_details = [];

    // Function to display data
    function displayData() {
        var ukayraId = getQueryStringParams('ukayra_id');
        var paymongoId = getQueryStringParams('paymongo_id');
        var method = getQueryStringParams('gcash');
        var payment_status = getQueryStringParams('payment_status');

        // console.log("UkayId: " + ukayraId + "PayId: " + paymongoId + "method: " + method + "message: " + message);
        payment_details = [ukayraId, paymongoId, method, payment_status, subscriptionFee];
    }

    // Call the function to display data when the page loads
    displayData();

    const subPayment = collection(db, 'SubscriptionPayment');
    const travelAgency = collection(db, 'Travel_agencies');
    const subscribers = collection(db, 'Subscribers');
    //Function that will save data from add admin form
    async function saveData(dataToSave) {
        try {
            // const agencyId = uuidv4(); 
            console.log(dataToSave[6]);
            const hashedUserPassword = await hashPassword(dataToSave[6]);
            if (hashedUserPassword) {
                const agencyId = uuidv4();
                // Store User data of the companies to 'Travel_agencies' collection const Travel_agencies = 
                await addDoc(travelAgency, {
                    companyName: dataToSave[0],
                    subscriptionPlan: dataToSave[1],
                    subscription_startDate: dataToSave[2],
                    subscription_endDate: dataToSave[3],
                    agency_email: dataToSave[4],
                    agency_password: hashedUserPassword,
                    agency_profile: dataToSave[8],
                    agency_id: agencyId
                });
                console.log("travel");

                // const subscriberId = uuidv4();
                // Store user subscription data in Firestore 'Subscribers' collection const Subscribers = 
                await addDoc(subscribers, {
                    companyName: dataToSave[0],
                    subscriptionPlan: dataToSave[1],
                    subscription_startDate: dataToSave[2],
                    subscription_endDate: dataToSave[3],
                    subscription_daysLeft: dataToSave[6],
                    subscription_status: dataToSave[7],
                    agency_profile: dataToSave[8],
                    agency_id: agencyId
                });
                console.log("Subscribers");

                //Store the billing info
                await addDoc(subPayment, {
                    payment_id: payment_details[1],
                    transaction_id: payment_details[0],
                    payment_method: 'gcash',
                    subscriptionFee: payment_details[3],
                    payment_status: payment_details[4]
                });

                console.log("Billing");
            }

            // Clear the form
            document.getElementById('registerSubscription').reset();

            //After Save Empty the storage
            localStorage.removeItem('userData');
            localStorage.removeItem('Bill');

            // Display a success message
            createAlert('Successfully Added!');
            console.log("Alert displayed");
            // $("#otpVerification").modal("hide");
            window.location.href = "index.html";
            // location.reload(true);
        } catch (error) {
            // const errorMessage = error.message || 'Failed to add';
            errorMessage('error-msg', 'err_msg', "errorMessage", 'bg-danger');
        }
    }

    saveData(dataToSave);
    // Create the alert message for successfully created
    function createAlert(message) {
        const alertDiv = document.querySelector('.alert-container');
        alertDiv.querySelector('.alert').textContent = message;
        alertDiv.style.display = 'block';
        setTimeout(function () {
            alertDiv.style.display = 'none';
        }, 3000);
    }

};