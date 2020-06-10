
$( "ul" ).on( "click", "li", function() {
  $( this ).toggleClass("checked") ;
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + text + "</li>" );
	}

})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
