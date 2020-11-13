document.getElementById("btnborrar").onclick = borrarCache;

function borrarCache(){  
    
    chrome.browsingData.remove({
        "origins": "https://conectacms.ucontactcloud.com"
        }, {
        "cacheStorage": true,
        "cookies": true,
        "fileSystems": true,
        "indexedDB": true,
        "localStorage": true,
        "serviceWorkers": true,
        "webSQL": true
      }, callback);
 
    alert("Borrar Cache");
}

