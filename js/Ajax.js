function Ajax(url, settings) {
    if (typeof url === 'object') {
        settings = url;
        url = settings.url;
    }
    
    settings = settings || {};
    settings.method = settings.method || 'GET';
    
    if (settings.async == null) {
        settings.async = true;
    }
    
    var xhr = new XMLHttpRequest;
    xhr.onload = settings.onload;
    xhr.onerror = settings.onerror;
    xhr.open(settings.method, url, settings.async);
    return xhr.send(settings.data);
}
