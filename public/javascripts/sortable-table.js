// Things to do:

// classList support - is this ok? :  classList is supported in pretty much everything after IE8,
// use that rather than a regex to modify the arrow classes

// Insert the up down arrow icons via Javascript so that they do not show when js is turned off

// Insert the headers on mobile so that they do not show when js is turned off

// How do you sort the Your Defra account table so that the children are kept with parent when sorting by account? But not when sorting by other headers, ensuring the table still looks ok?!




/*** Fully working sortable table ***/


var sortOrder;

// Initialization of all sortable tables in the page

/**
 * Initialization
 * Configure all sortable tables on the page
 */
var sortableTables = document.getElementsByClassName('sortable');
[].forEach.call(sortableTables, function(table) {

    // Add a default ARIA unsorted state, and attach the sort
    // handler to any sortable columns in this table.
    var cellIndex   = 0;   // track numeric cell index to simplify sort logic
    var headerCells = table.getElementsByClassName('sortable-column');
    [].forEach.call(headerCells, function(th) {
        th.setAttribute('aria-sort', 'none');
        th.dataset.index = cellIndex++;
        th.addEventListener('click', sortCol);
        th.setAttribute('role', 'button');
        th.setAttribute('tabindex', '0');
        th.addEventListener('keydown', function(e) {
            if (e.which === 13 || e.which === 32) {
                this.click();
            }
        });


    });

});


 /**
  * getParentTable - helper to find the parent table element from any child node
  *
  * @param  {HTMLElement} node any child node in a table
  * @return {HTMLElement}      parent table or undef
  */
function getParentTable(node) {
    while (node) {
        node = node.parentNode;
        if (node.tagName.toLowerCase() === 'table') {
            return node;
        }
    }
    return undefined;
}


/**
 * sortCol - Sort event handler. Attached to all sortable column headers
 *
 * @param  {Event} e The event triggering the sort action
 */
function sortCol(e) {
    // sortCol event gets triggered from the th or the nested span,
    // identify the TH col, and assign some element lookups
    var thisCol = e.target.tagName === 'TH' ? e.target : e.target.parentNode;
    var table   = getParentTable(thisCol);
    var tbody   = table.getElementsByTagName('tbody').item(0);
    var rows    = tbody.getElementsByTagName('tr');
    var cols    = table.getElementsByClassName('sortable-column');

    var sortType  = thisCol.getAttribute('data-sortby');
    var thisIndex = thisCol.getAttribute('data-index');

    // update the sort icon and return the new sort state
    sortOrder = updateIcon(thisCol);

    // loop through each row and build our `items` array
    // which will become an array of objects:
    // {
    //  tr: (the HTMLElement reference to the given row),
    //  val: (the String value of the corresponding td)
    // }
    var items = [];
    [].forEach.call(rows, function (row) {
        var content = row.getElementsByTagName('td').item(thisIndex);
        items.push({ tr: row, val: content.innerText });
    });

    // sort the array of values, using an appropriate sorter
    if (!sortType || sortType === 'numeric') {
        items.sort(numericSort);
    } else if (sortType === 'date') {
        items.sort(dateSort);
    } else if (sortType === 'text') {
        items.sort(textSort);
    } else if (sortType === 'money') {
        items.sort(moneySort);
    }

    // Create a new table body, appending each row in the new, sorted order
    var newTbody = document.createElement('tbody');
    [].forEach.call(items, function (item) {
        newTbody.appendChild(item.tr);
    });

    // Swap out the existing table body with our reconstructed sorted body
    table.replaceChild(newTbody, tbody);

    // Update the live region for a couple of seconds
    var updatedMessage   = ' (Sorted by ' + thisCol.innerText + ': ' + sortOrder + ')';
    var liveRegion       = document.getElementById('live');
    liveRegion.innerText = updatedMessage;
    setTimeout(function() { liveRegion.innerText = ''; }, 2000);
}


/**
* updateIcon - Updates the arrow icon based on new sort status
* @param  {HTMLElement} th    The table heading element reference
* @return {String}      state The new sort state ("ascending" or "descending")
*/
function updateIcon(th) {
    var state    = 'ascending';
    var icon     = th.getElementsByTagName('i').item(0);
    var ourIndex = th.getAttribute('data-index');

    // classList is supported in pretty much everything after IE8,
    // use that rather than a regex to modify the arrow classes
    if (icon.classList.contains('no-sort')) { // No sort -> Ascending
        icon.classList.remove('no-sort');
        icon.classList.add('A-to-Z');
    } else if (icon.classList.contains('A-to-Z')) { //  Ascending -> Descending
        icon.classList.remove('A-to-Z');
        icon.classList.add('Z-to-A');
        state = 'descending';
    } else { //
        icon.classList.remove('Z-to-A');
        icon.classList.add('A-to-Z');
        state = 'ascending';
    }

    th.setAttribute('aria-sort', state);

    // update all other rows with the neutral sort icon
    var allTh = th.parentNode.getElementsByTagName('th');
    [].forEach.call(allTh, function (thisTh, thisIndex) {
        // skip our sorted column
        if (thisIndex == ourIndex) {
            return;
        }

        // reset the state for an unsorted column
        thisTh.setAttribute('aria-sort', 'no-sort');
        var thisIcon = thisTh.getElementsByTagName('i').item(0);
        thisIcon.classList.remove('Z-to-A');
        thisIcon.classList.remove('A-to-Z');
        thisIcon.classList.add('no-sort');
    });
    return state;
}


/**
* Executes a numeric sort (direct comparisons)
*/
function numericSort(a, b) {
    return (sortOrder === 'ascending')
        ? a.val - b.val
        : b.val - a.val;
}

/**
* Takes two formatted date/time values
* (see `formatDate`) and compares them
*/
function dateSort(a, b) {
    return (sortOrder === 'ascending')
        ? formatDate(a.val) - formatDate(b.val)
        : formatDate(b.val) - formatDate(a.val);
}

function textSort(a, b) {
    if (sortOrder === 'ascending') {
        if (a.val.toLowerCase() < b.val.toLowerCase()) {
            return -1;
        }
        if (a.val.toLowerCase() > b.val.toLowerCase()) {
            return 1;
        }

        return 0;
    } else {
        if (a.val.toLowerCase() < b.val.toLowerCase()) {
            return 1;
        }
        if (a.val.toLowerCase() > b.val.toLowerCase()) {
            return -1;
        }

        return 0;
    }
}

function moneySort(a, b) {
    var strippedA = a.val.replace(/,/g , '');
    var strippedB = b.val.replace(/,/g , '');

    if (sortOrder === 'ascending') {
        if (strippedA < strippedB) {
            return -1;
        }
        if (strippedA > strippedB) {
            return 1;
        }

        return 0;
    } else {
        if (strippedA < strippedB) {
            return 1;
        }
        if (strippedA > strippedB) {
            return -1;
        }

        return 0;
    }
}


/**
* Formats a date string ("01/01/01") as
* a numeric value using `Date.getTime`
*/
function formatDate(dateString) {
    var formattedDate = new Date(dateString);
    return formattedDate.getTime();
}
