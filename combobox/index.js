var fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Pineapple", "Watermelon", "Kiwi", "Peach"];

function populateOptions() {
    var listbox1 = document.getElementById("listbox1");

    listbox1.innerHTML = "";

    fruits.forEach(function (fruit) {
        var option = document.createElement("div");
        option.className = "option";
        option.innerText = fruit;

        option.addEventListener("click", function () {
            document.getElementById("combo1-value").innerText = fruit;
            listbox1.style.display = "none"; 
        });

        listbox1.appendChild(option);
    });
    document.getElementById("combo1-value").innerText = fruits[0];
}

document.getElementById("combo1").addEventListener("click", function () {
    var listbox1 = document.getElementById("listbox1");
    listbox1.style.display = listbox1.style.display === "block" ? "none" : "block";
});

populateOptions();

window.addEventListener("click", function (event) {
    if (!document.getElementById("combo1").contains(event.target)) {
        document.getElementById("listbox1").style.display = "none";
    }
});


function populateEditableOptions() {
    var listbox2 = document.getElementById("listbox2");

    listbox2.innerHTML = "";

    fruits.forEach(function (item) {
        var option = document.createElement("div");
        option.className = "option";
        option.innerText = item;

        option.addEventListener("click", function () {
            document.getElementById("combo2").value = item;
            listbox2.style.display = "none"; 
        });

        listbox2.appendChild(option);
    });
    document.getElementById("combo2").value = fruits[0];
}

document.getElementById("combo2").addEventListener("click", function () {
    var listbox2 = document.getElementById("listbox2");
    listbox2.style.display = listbox2.style.display === "block" ? "none" : "block";
});

populateEditableOptions();

window.addEventListener("click", function (event) {
    if (!document.getElementById("combo2").contains(event.target)) {
        document.getElementById("listbox2").style.display = "none";
    }
});


function populateMultiSelectOptions() {
    var listbox3 = document.getElementById("listbox3");

    listbox3.innerHTML = "";

    fruits.forEach(function (option) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;

        checkbox.addEventListener("change", function () {
            updateSelectedOptions();
        });

        var label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));

        var listItem = document.createElement("ol");
        listItem.appendChild(label);

        listItem.addEventListener("click", function (event) {
            if (event.target.tagName !== "INPUT") {
                checkbox.checked = false;
                updateSelectedOptions();
            }
        });

        listbox3.appendChild(listItem);
    });
}

function updateSelectedOptions() {
    var selectedOptions = [];
    var checkboxes = document.querySelectorAll("#listbox3 input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedOptions.push(checkbox.value);
        }
    });

    var selectedList = document.getElementById("combo3-selected");
    selectedList.innerHTML = ""; 

    selectedOptions.forEach(function (selectedOption) {
        var listItem = document.createElement("li");
        listItem.innerText = selectedOption;
        selectedList.appendChild(listItem);
        selectedList.innerText = selectedOptions.join(", ");
    });

    document.getElementById("combo3-remove").style.display = selectedOptions.length > 0 ? "inline" : "none";
}

document.getElementById("combo3").addEventListener("click", function () {
    var listbox3 = document.getElementById("listbox3");
    listbox3.style.display = listbox3.style.display === "block" ? "none" : "block";
});

populateMultiSelectOptions();

window.addEventListener("click", function (event) {
    if (!document.getElementById("combo3").contains(event.target)) {
        document.getElementById("listbox3").style.display = "none";
    }
});

document.getElementById("combo3-selected").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        var selectedText = event.target.innerText;
        var checkboxes = document.querySelectorAll("#listbox3 input[type='checkbox']");
        checkboxes.forEach(function (checkbox) {
            if (checkbox.value === selectedText) {
                checkbox.checked = false;
            }
        });
        updateSelectedOptions();
    }
});
