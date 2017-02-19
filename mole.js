window.onclick = e => {
    console.log(e);
    window.moveTo(Math.random() * screen.width, Math.random() * screen.height);

    // TODO: Pass message back to background window
    // that window was clicked
};
