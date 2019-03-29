// submit items by entering text and hitting return or add item 
// capture submitted text and prevent default behavior of js (posting to database)
// add captured text as a new li (with buttons)

// check button will toggle class (add strike) of li on click 

// delete button will permanently delete the li

$(function addToList() {
    $('#js-shopping-list-form')
    .submit(function(event) {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();

        $('.shopping-list').append(`
    <li> 
        <span class="shopping-item shopping-item__checked">${newItem.val()}</span> 
        <div class="shopping-item-controls"> 
          <button class="shopping-item-toggle"> 
            <span class="button-label">check</span> 
          </button> 
          <button class="shopping-item-delete"> 
            <span class="button-label">delete</span> 
          </button> 
        </div> 
    </li>
        `);
    })
})

// this function will check and uncheck items on the list
// when the check button is pressed

$(function checkButton() { 
    $('.shopping-list') // selects ul elements (used for event delegation)
    .on('click', '.shopping-item-toggle', function(event) { // tells app to listen for clicks within selected element  
                    // filtered by the check button's class & runs the provided callback function whenever the event occurs
        $(this) // "this" refers to event.currentTarget which selects the element currently targeted by the event
        .closest('li') // traverses up the DOM through ancestors to get the first matching li element 
        .find('span.shopping-item') // traverses down the dom to the child: span.shopping-item  of li
        .toggleClass('shopping-item__checked'); // adds or removes the provided class when the check button is clicked
    })
})

// this function will permanently delete items on list 
// when delete button is pressed

$(function deleteButton() {
    $('.shopping-list') 
    .on('click', '.shopping-item-delete', function(event) { 
        $(this)
        .closest('li')
        .remove(); // permanently removes the element and all its content 
    })
})