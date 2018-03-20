/**
 * ClipCopier v1.0
 * 
 * Copyright 2018 Pekka Ruuska
 * Released under the MIT license
 * 
 * Copy text from element to clipboard.
 *
 * @author Pekka Ruuska
 * @author Twitter: PekkaRuuska
 *
 */

function copyToClipboard(selectors, separator){

    var selectorArr = selectors.split(','),
        text = '',
        body = document.querySelector('body'),
        range,
        selector,
        elements,
        separatorType = typeof separator,
        separatorItem;

    for (i = 0; i < selectorArr.length; i++) { 
        selector = selectorArr[i].replace(/^\s+|\s+$/gm, '');
        elements = document.querySelectorAll(selector);

        for (e = 0; e < elements.length; e++) {
            if (separatorType != 'string' || text === ''){
                separatorItem = '';
            }
            else {
                separatorItem = separator;                
            }

            text = text + separatorItem + elements[e].innerHTML.replace(/^\s+|\s+$/gm, '');
        }
    }

    if (text != '') {

        if (!navigator.clipboard) {
            var hidden = document.querySelector('#clipcopier');

            if(!hidden) {
                hidden = document.createElement('input');
                hidden.setAttribute('id', 'clipcopier');
                hidden.setAttribute('type', 'text');
                hidden.setAttribute('style', 'position: absolute; left: -10000px; top: -10000px;');
                body.appendChild(hidden);
            }

            hidden.value = text;
            hidden.select();

            try {
                document.execCommand('copy');
            }
            catch (err){
                console.log('Could not copy.');
                console.log(err);
            }

            body.removeChild(hidden);

        }
        else {
            navigator.clipboard.writeText(text);
        }
    }
}