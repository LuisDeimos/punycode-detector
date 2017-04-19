
function extractHostname(url) {
    var hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];

    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
}


window.onloadstart = function() {
  
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    
    var tabDomain = extractRootDomain(tabs[0].url);
    var unicode = punycode.toUnicode(tabDomain);
    
    if (tabDomain !== unicode) {
      alert('Dominio codificado en Punycode!!  En tab: ['+tabDomain+'], Unicode: ['+unicode+']');
    } else {
      // nothing 
      //alert('All ok');
    }
    
  });
  
};