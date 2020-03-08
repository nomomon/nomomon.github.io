const root = document.documentElement;
document.getElementsByClassName('themeButton')[0].addEventListener('click', changeTheme);
var theme = "light"; changeTheme();
function changeTheme() {
    switch (theme) {
        case "dark":
        root.style.setProperty("--text-primary", "#b6b6b6");
        root.style.setProperty("--text-secondary", "#C9DAEA");
        root.style.setProperty("--text-main", "white");
        root.style.setProperty("--bg-primary", "#23232e");
        root.style.setProperty("--bg-secondary", "#141418");
        root.style.setProperty("--bg-body", "#1D1D23");
        root.style.setProperty("--fa-primary-color","#03F7EB");
        root.style.setProperty("--fa-secondary-color","#00B295");
        document.getElementsByClassName('themeButton')[0].querySelector("span").innerText = "Light";
        document.getElementsByClassName('fa-moon')[0].className = "fad fa-sun";
        theme="light";
        break;
        case "light":
        root.style.setProperty("--text-primary", "#1C1C1C");
        root.style.setProperty("--text-secondary", "#D62828");
        root.style.setProperty("--text-main", "black");
        root.style.setProperty("--bg-primary", "#DADDD8");
        root.style.setProperty("--bg-secondary", "#DADDD8");
        root.style.setProperty("--fa-primary-color","#F77F00");
        root.style.setProperty("--fa-secondary-color","#FCBF49");
        root.style.setProperty("--bg-body", "#EEF0F2");
        document.getElementsByClassName('themeButton')[0].querySelector("span").innerText = "Dark";
        document.getElementsByClassName('fa-sun')[0].className = "fad fa-moon";
        theme="dark";
        break;
    }
}