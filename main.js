
var rowsCount;
(function intialLoad()
{
    rowsCount = window.prompt('Enter the number of rows to be displayed per page?');
})();

noOfPagination = Math.floor(100/rowsCount);
console.log(noOfPagination);

// get JSON data;
var myJSONData;

function getJSONData(filepath, callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", filepath, true);
    rawFile.onreadystatechange = function ()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            callback(this.response);
        }
    }

    rawFile.send();
}

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

var dataDiv = document.createElement('div');
dataDiv.style.minHeight = '300px';
dataDiv.style.marginTop = '30px';
dataDiv.style.marginLeft = 'auto';
dataDiv.style.marginRight = 'auto';
dataDiv.style.padding = '20px';
dataDiv.style.boxSizing = 'border-box';
dataDiv.style.backgroundColor = '#fafafa';
dataDiv.style.borderRadius = '4px';
dataDiv.style.boxShadow = '1px 2px 3px 1px #c7c7c7';

document.body.appendChild(dataDiv);

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
        SetOthersInactive(element);
    })

    return element;
}

function SetOthersInactive(element)
{
    let childs = outerDiv.querySelectorAll('div');
    for(let child of childs)
    {
        if(child.innerText != element.innerText)
        {
            child.style.backgroundColor ='white';
            child.style.color ='#8566d6';
        }
    }

    getData(element);
}

function getData(element)
{
    let end = element.innerText * rowsCount;
    let start = end - rowsCount + 1;
    console.log("start", start);
    console.log("end", end);
    let filteredArray = myJSONData.slice(start, end);
    console.log('filtered array', filteredArray);
    dataDiv.innerText = JSON.stringify(filteredArray);
}

getJSONData('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',function(data)
{
    myJSONData = JSON.parse(data);
    console.log(myJSONData);
    var first = CreatePaginationElement('First');
    var previous = CreatePaginationElement('Previous');
    outerDiv.append(first, previous);

    var variable = 'num';
    for(let i = 1; i <= noOfPagination; i++)
    {
        window[variable+i] = CreatePaginationElement(i);
        outerDiv.append(window[variable+i]) 
    }

    var next = CreatePaginationElement('Next');
    var last = CreatePaginationElement('Last');
    outerDiv.append(next, last);
});
 

