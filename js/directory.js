const businessList = document.querySelector(".businesses");

const URL = "js/directories.json";

fetch(URL) 
    .then((response) => response.json())
    .then((businessInfo)  => {
        console.log(businessInfo);

        for (i = 0; i< businessInfo.businesses.length; i ++ ) {

            console.log(businessInfo.businesses[i].name);
            
            let businessName = document.createElement("h2");
            businessName.textContent = businessInfo.businesses[i].name;

            let businessAddress = document.createElement("p");
            businessAddress.textContent = businessInfo.businesses[i].address;

            let businessPhone = document.createElement("p");
            businessPhone.textContent = businessInfo.businesses[i].phone;

            let businessSection = document.createElement("section");
            businessSection.appendChild(businessName);
            businessSection.appendChild(businessAddress);
            businessSection.appendChild(businessPhone);

            // add image
            let businessImage = document.createElement("img");
            businessImage.src = businessInfo.businesses[i].img;
            businessImage.alt = businessInfo.businesses[i].name;

            // add button
            let businessBtn = document.createElement("button");
            businessBtn.textContent = "Visit";
            // add a functionality for the user to visit the webpage of the company
            businessBtn.setAttribute("onclick", "location.href='" + businessInfo.businesses[i].url + "'")

            let business = document.createElement("div");
            business.classList.add("element")

            business.appendChild(businessImage);
            business.appendChild(businessSection);
            business.appendChild(businessBtn);

            // this will automatically add the div to our html page
            document.querySelector(".businesses").appendChild(business);
        } // end for
    } )


