/**
 * generates a dom element of type specified
 * @param ele = element to be created (div, p, span, button, input, etc...)
 * @param classname = class(s) to be assigned
 * @param id = id to be assigned 
 * @param style = style string to be attached to element
 * @param attr = setAttribute
 * @returns element object
 */
function newElement(ele, classname, id, style, attr1, attr2) {
    var element = document.createElement(ele);
    if (classname) element.className = classname;
    if (id) element.id = id;
    if (style) element.style.cssText = style;
    if (attr1 && attr2) element.setAttribute(attr1, attr2);
    return element;
}

// example 1:
var main = newElement('div', 'box no-border clearfix', 'main', 'min-height: 800px;');

// equals:
var main = document.createElement('div');
main.className = 'box no-border clearfix';
main.id = 'main';
main.style.cssText = 'min-height: 800px;';

// example 2:
var username = newElement('input', '', 'username', '', 'type', 'text');

// equals:
var username = document.createElement('input');
username.id = 'username';
username.setAttribute('type', 'text');
