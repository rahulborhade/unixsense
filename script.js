const products = [
    "Portable Gas Detectors",
    "Fixed Gas Detection Systems",
    "Environmental Monitoring",
    "Industrial Safety Instruments",
    "Gas Detection Systems",
    "Calibration Equipment",
    "Safety Instruements"
];

const services = [
    "Calibration Services",
    "Installation Services",
    "Commissioning",
    "Preventive Maintenance",
    "AMC Services",
    "Technical Support"
];

const category = document.getElementById("category");
const requirement = document.getElementById("requirement");

// Load dropdown options
function loadOptions(list, selected = "") {

    requirement.innerHTML = "";

    list.forEach(item => {

        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        if (item === selected) {
            option.selected = true;
        }

        requirement.appendChild(option);

    });

}

// Default load
loadOptions(products);

// Change category manually
category.addEventListener("change", () => {

    if (category.value === "Products") {

        loadOptions(products);

    } else {

        loadOptions(services);

    }

});

// Open modal with auto-selected requirement
function openQuote(type, selectedItem) {

    document.getElementById("quoteModal").classList.add("active");

    category.value = type;

    if (type === "Products") {

        loadOptions(products, selectedItem);

    } else {

        loadOptions(services, selectedItem);

    }

}

// Close modal
function closeQuote() {

    document.getElementById("quoteModal").classList.remove("active");

}