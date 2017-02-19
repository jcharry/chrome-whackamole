/*
 * background.js
 * Copyright (C) 2017 jamiecharry <jamiecharry@Jamies-Air-2.home>
 *
 * Distributed under terms of the MIT license.
 */

chrome.browserAction.onClicked.addListener(e => {
    console.log(e);
    let scoreWindowId;
    chrome.windows.create({
        top: 0,
        left: 800,
        width: 100,
        height: 100,
        type: 'popup'
    }, win => {
        scoreWindowId = win.tabs[0].id;
    });

    let moleId;
    chrome.windows.create({
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        focused: true,
        type: 'popup',
        url: 'http://www.rosepestcontrol.com/filebin/images/pest_images/full/common_mole.jpg'
    }, win => {
        moleId = win.tabs[0].id;
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        console.log('fired"')
        if (tabId === moleId && changeInfo.status === 'complete') {
            chrome.tabs.executeScript(tabId, {
                file: 'mole.js'
            });
        }
    });


    function animate() {
        window.requestAnimationFrame(animate);
    };


    // animate();

});
