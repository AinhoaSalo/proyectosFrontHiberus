function mostrar() {
    //navigator
    document.write('Navegador: ' + navigator.userAgent + '<br/>') 
    document.write('Navegador: ' + navigator.appCodeName + '<br/>') 
    document.write('Navegador: ' + navigator.appVersion + '<br/>')
    document.write('Cookie habilitadas?: ', navigator.cookieEnabled, '<br/>')
    document.write('Idioma: ', navigator.language, '<br/>')
    document.write('Idioma del navegador: ', navigator.languages, '<br/>')
    
    //screen
    document.write('Resolucion: ', screen.width, 'x', screen.height, '<br/>')
    
    //url
    document.write('URL: ', location.pathname, '<br/>')
    document.write('Host: ', location.host, '<br/>')
    document.write('HostName: ', location.hostname, '<br/>')
    document.write('Port: ', location.port, '<br/>')
    document.write('Protocolo: ', location.protocol, '<br/>')
    //location.reload();
    //location.replace(http://www.google.es)

    //history
    document.write('Longitud de historial: ', history.length, '<br/>')
    //history.forward()
    //history.back()
}

