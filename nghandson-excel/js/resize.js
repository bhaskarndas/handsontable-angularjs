document.addEventListener("DOMContentLoaded", function() {

  var
    container = document.getElementById('example1'),
    hot;
  
  hot = new Handsontable(container, {
    data: Handsontable.helper.createSpreadsheetData(200, 10),
    rowHeaders: true,
    colHeaders: true,
    colWidths: [55, 80, 80, 80, 80, 80, 80],
    rowHeights: [50, 40, 100],
    manualColumnResize: true,
    manualRowResize: true
  });
  
  function bindDumpButton() {
      if (typeof Handsontable === "undefined") {
        return;
      }
  
      Handsontable.Dom.addEvent(document.body, 'click', function (e) {
  
        var element = e.target || e.srcElement;
  
        if (element.nodeName == "BUTTON" && element.name == 'dump') {
          var name = element.getAttribute('data-dump');
          var instance = element.getAttribute('data-instance');
          var hot = window[instance];
          console.log('data of ' + name, hot.getData());
        }
      });
    }
  bindDumpButton();

});