let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
switch (new Date().getDay()) {
    case 0:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/freedom.css';
        head.appendChild(link);
        break;
    case 1:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/contract.css';
        head.appendChild(link);
        break;
    case 2:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/eternity.css';
        head.appendChild(link);
        break;
    case 3:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/wisdom.css';
        head.appendChild(link);
        break;
    case 4:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/justice.css';
        head.appendChild(link);
        break
    case 5:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/war.css';
        head.appendChild(link);
        break;
    case 6:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/love.css';
        head.appendChild(link);
        break;
    default:
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/default.css';
        head.appendChild(link);
}