/**
 * @description Create a new spreadsheet
 * @param {String} folderId
 * @param {String} name
 */
function createSpreadsheet( folderId, name ) {
    const newSs = SpreadsheetApp.create(`${name} | ${new Date().toISOString()}`);
    DriveApp.getFileById(newSs.getId()).moveTo(DriveApp.getFolderById(folderId));
    newSs.insertSheet().getRange(1, 1).setValue('Hello World !');    
}
/**
 * @description Display the sidebar in Google Sheets UI 
 */
function showSidebar() {
    const ui = SpreadsheetApp.getUi();
    const page = 'sidebar';
    const title = `Promises`;
    const html = HtmlService.createTemplateFromFile(page);
    ui.showSidebar(
        html.evaluate().setTitle(title)
    );
}
/**
 * @description Gets content from a HTML file
 * @returns {String}
 */
function include(fileName){
    return HtmlService.createHtmlOutputFromFile(fileName).getContent()
}