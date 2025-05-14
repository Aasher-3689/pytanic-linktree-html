function clickTab(tab) {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tabassatContent = document.getElementById("tabassat-content");
    const aasherContent = document.getElementById("aasher-content");

    if (tab===2) {
        tab1.classList.add("inactive-tab");
        tab1.classList.remove("active-tab");
        tab2.classList.add("active-tab");
        tab2.classList.remove("inactive-tab");
        aasherContent.style.display = "flex";
        tabassatContent.style.display = "none";
        tab1.disabled = false;
        tab2.disabled = true;
    } else {
        tab1.classList.add("active-tab");
        tab1.classList.remove("inactive-tab");
        tab2.classList.add("inactive-tab");
        tab2.classList.remove("active-tab")
        aasherContent.style.display = "none";
        tabassatContent.style.display = "flex";
        tab2.disabled = false;
        tab1.disabled = true;
    }
}