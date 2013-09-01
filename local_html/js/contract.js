function ContractCtrl($scope) {
  /**
  * Default Values for the contract object.
  */
  $scope.contract = {
                      name: 'Edmund Quintero',
                      instructor: 'DI von Briesen',
                      course: {
                        term: 'Fall-2013',
                        prefix: 'WEB-215',
                        name:'Advanced Markup and Scripting'
                      }
                    };
  
}

$(function(){
  /**
  * Click event listener in the global scope for the edit button.
  */
  $('#editForm').on('click', function(){
    if($('#contentForm').is(':visible')){
      $('#contentForm').slideUp();
    }else{
      $('#contentForm').slideDown();
    }
  });

});