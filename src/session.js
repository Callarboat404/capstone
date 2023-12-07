export function session() {
    function displaySessionData() {
        // Retrieve the JSON string from localStorage
        const adminSessionData = localStorage.getItem('adminSessionData');
        if (adminSessionData !== null) {
            // Parse the JSON string back to an array of objects
            const data = JSON.parse(adminSessionData);

            // You can now access properties of the objects in the array
            for (const adminData of data) {
                // document.getElementById('profileImage').src = agencyData.profileImage;
                console.log(adminData.profileImage);
                document.getElementById('avatarID').src = adminData.profileImage;
                document.getElementById('profileImage').src = adminData.profileImage;
                document.getElementById('inputName').value = adminData.adminName;
                document.getElementById('inputEmail').value = adminData.adminEmail;
                document.getElementById('inputPassword').value = adminData.adminPassword;
                localStorage.setItem('currentPassword', adminData.adminPassword);
                localStorage.setItem('adminUserID', adminData.userId);
                console.log(adminData.adminPassword);
            }
        } else {
            // Handle the case where no data is stored
            console.log('No data found in localStorage');
        }
    }
    displaySessionData();

    //Agency Session
    function displayAgencySessionData() {
        // Retrieve the JSON string from localStorage
        const agencySessionData = localStorage.getItem('agencySessionData');
        if (agencySessionData !== null) {
            // Parse the JSON string back to an array of objects
            const data = JSON.parse(agencySessionData);

            // You can now access properties of the objects in the array
            for (const agencyData of data) {
                // document.getElementById('profileImage').src = agencyData.profileImage;
                document.getElementById('agencyAvatarID').src = agencyData.profileImage;
                document.getElementById('agencyProfileImage').src = agencyData.profileImage;
                document.getElementById('inputName').value = agencyData.companyName;
                document.getElementById('inputEmail').value = agencyData.agency_email;
                document.getElementById('inputPassword').value = agencyData.agencyPassword;
                localStorage.setItem('agencyCurrentPassword', agencyData.agencyPassword);
                localStorage.setItem('agencyUserID', agencyData.userId);
            }
        } else {
            // Handle the case where no data is stored
            console.log('No data found in localStorage');
        }
    }
    displayAgencySessionData();
}