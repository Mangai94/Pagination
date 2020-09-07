
var outerDiv = document.createElement('div');
outerDiv.style.height = '100px';
outerDiv.style.lineHeight = '100px';
outerDiv.style.marginLeft = 'auto';
outerDiv.style.marginRight = 'auto';
outerDiv.style.padding = '20px';
outerDiv.style.boxSizing = 'border-box';
outerDiv.style.backgroundColor = '#fafafa';
outerDiv.style.borderRadius = '4px';

document.body.appendChild(outerDiv);

var first = CreatePaginationElement('First');
var previous = CreatePaginationElement('Previous');
var num1 = CreatePaginationElement('1');
var num2 = CreatePaginationElement('2');
var num3 = CreatePaginationElement('3');
var num4 = CreatePaginationElement('4');
var num5 = CreatePaginationElement('5');
var num6 = CreatePaginationElement('6');
var num7 = CreatePaginationElement('7');
var num8 = CreatePaginationElement('8');
var num9 = CreatePaginationElement('9');
var num10 = CreatePaginationElement('10');
var next = CreatePaginationElement('Next');
var last = CreatePaginationElement('Last');

outerDiv.append(first, previous, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, next, last);

function CreatePaginationElement(text)
{
    let element = document.createElement('div');
    element.innerText = text;
    element.style.display = 'inline-block';
    element.style.padding = '10px';
    element.style.height = '18px'
    element.style.lineHeight = '18px'
    element.style.minWidth = '22px'
    element.style.border = '1px solid lightgray';
    element.style.cursor = 'pointer';
    element.style.color = '#8566d6';
    element.style.backgroundColor = 'white';
    element.addEventListener('click', function(e)
    {
        this.style.backgroundColor = '#337abc';
        this.style.color ='white';
    })

    return element;
}