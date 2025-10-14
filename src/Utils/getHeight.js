const windowWidth = window.innerWidth;
let height;
if (windowWidth < 600) {
    height = "calc(100vh - 110px)";
} else {
    height = "calc(100vh - 60px)";
}

export { height };