
show_messages=function(){
	
	$.get("https://feg-bonn.com/nextcloud_extensions/dashboard.messanger.showmessages.php",{user:$("#user").val()})
	.done(function(value){
		
		$("#messages").html(value);
		$(".remove-message").on("click",function(){
			remove_message($(this).attr("data-message-id"),$(this).attr("data-user-id"));
		});
		$(".toggle").on("click",function(){
			if($(this).hasClass("collapsed")){
				setStatus("read",$(this).attr("data-message-id"),$(this).attr("data-user-id"));
			}
			else {
				setStatus ("collapse",$(this).attr("data-message-id"),$(this).attr("data-user-id"));
			}
		});
		
	});
	
	
	$.get("https://feg-bonn.com/nextcloud_extensions/dashboard.messanger.showtrash.php",{user:$("#user").val()})
	.done(function(value){
			$("#trash").html(value);
			$(".moveback-message").on("click",function(){
			moveback_message($(this).attr("data-message-id"),$(this).attr("data-user-id"));
		});	
	});
	
//setTimeout(show_messages, 30000)	;
}

setStatus=function(data,message_id,user_id){
	$.post("dashboard.messanger.command.php",{command:"collapse",message_id:message_id,user_id:user_id,status:data})
		.done(function(data){
	
		});
}
remove_message=function(message_id,user_id){
	$.post("dashboard.messanger.command.php",{command:"remove",message_id:message_id,user_id:user_id})
		.done(function(data){
			show_messages();
		});
}

moveback_message=function(message_id,user_id){

	$.post("dashboard.messanger.command.php",{command:"moveback",message_id:message_id,user_id:user_id})
		.done(function(data){
			
			show_messages();
		});
}

$(document).ready(function(){
	show_messages();

	


	
}); //Document Ready