angular.module('myApp',[]).directive('dragResize',function(){
	return{
		restrict: 'AEC',
		replace:true,
		controller: function($scope,$document){
			//document.addEventListener("DOMContentLoaded", function() {

  var
    container = $document[0].getElementById('example1'),
    hot;
  
  hot = new Handsontable(container, {
    data: Handsontable.helper.createSpreadsheetData(200, 10),
    rowHeaders: true,
    colHeaders: true,
    colWidths: [55, 80, 80, 80, 80, 80, 80],
	
    rowHeights: [],
    manualColumnResize: true,
    manualRowResize: true,
	dropdownMenu:true,
	filters: true,
	contextMenu:true,
	//manualColumnMove: true,
    //manualRowMove: true
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
	//$timeout(dragResize,0);
//});
		}
			
	};
});





