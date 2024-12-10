const searchInputWrapper = document.querySelector(".Search-Input-Wrapper");
    const searchInput = document.querySelector(".Search-Input");
    const searchIcon = document.querySelector(".Search-Icon i");
    const closeIcon = document.querySelector(".Search-Icon i");

    searchIcon.addEventListener("click", () => {
        searchIcon.parentElement.classList.add("Change");
        searchInputWrapper.classList.add("Change");

        setTimeout(() => {
            searchIcon.focus();
        }, 1000);

    })


    closeIcon.addEventListener("click", () => {
        searchIcon.parentElement.classList.remove("Change");
        searchInputWrapper.classList.remove("Change");

    });