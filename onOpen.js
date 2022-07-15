/**
 * The event handler triggered when opening the spreadsheet.
 * @param {Event} e The onOpen event.
 */

function onOpen(e) {
    SpreadsheetApp.getUi().createMenu('Promises').addItem('RUN', 'showSidebar').addToUi();
}