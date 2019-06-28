// /**
//  * Created by aminadhanani on 8/23/16.
//  */
var click_button = ['', ''];
var index = 0;
var number = 0;
var operator = 0;
var equalSign = '=';


 $(document).ready(function(){

    $('button').click(function(){

        var val = $(this).html();

        if($.isNumeric(parseInt(val)) || val === '.') {
            click_button[index] += val;
            $("#display").html(click_button[index]);
        } else
            if(val !== '=') {
                operator = val;
                index = 1;
                $("#display").html();
            } else {
                var answer = 0;
                switch (operator) {
                    case '+':
                        answer = parseFloat(click_button[0]) + parseFloat(click_button[1]);
                        break;
                    case '-':
                        answer = parseFloat(click_button[0]) - parseFloat(click_button[1]);
                        break;
                    case 'x':
                        answer = parseFloat(click_button[0]) * parseFloat(click_button[1]);
                        break;
                    case '/':
                        answer = parseFloat(click_button[0]) / parseFloat(click_button[1]);
                        break;
                }
                $("#display").html(answer.toFixed(2));
            }
    });

     $("#clear").click(function () {
         $("#display").html('');
     })
     
 }); 