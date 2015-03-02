    <script>
      $(document).ready(function(){
        $.ajax({ 
            type: 'GET', 
            url: 'http://portaltest.indestinate.com/ibeacon/appAction/test/1',  
            dataType: 'jsonp',
            jsonp:'jsoncallback',
            success: function (data) {
                $.each(data, function(index, element) {
                    $( "#populate" ).append(element.ingredient_id);
                    $( "#populate1" ).append(element.ingredient_name);
                    $( "#populate2" ).append(element.ingredient_price);
                });
            },
            error: function(data){
                alert('somethings not right');
            }
        });
      });
    </script>


    <script>
      $(document).ready(function(){
        $.ajax({ 
            type: 'GET', 
            url: 'http://portaltest.indestinate.com/ibeacon/appAction/testlist/1',  
            dataType: 'jsonp',
            jsonp:'jsoncallback',
            success: function (data) {
                $.each(data, function(index, element) {
                    $( "#populate" ).append(element.ingredient_id);
                    $( "#populate1" ).append(element.ingredient_name);
                    $( "#populate2" ).append(element.ingredient_price);
                });
            },
            error: function(data){
                alert('somethings not right');
            }
        });
      });
    </script>