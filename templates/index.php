<?php

	style ('schoolcloud','bootstrap.min');
	style ('schoolcloud','messanger');
	style ('schoolcloud','all.min');
	script ('schoolcloud','bootstrap.min');
	script ('schoolcloud','messanger');
	
	//style ('schoolcloud','dashboard');
	
	echo "<input type='hidden' id='user' name='user' value='michael.barth'>";?>
	
<div class="container-fluid" >
	<div class="row">
		<div class="col-md-4">
		<div class="card" style="padding-left:15px;">
		  <div class="card-body">
		    <h5 class="card-title">Mitteilungen</h5>
		    
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				  <li class="nav-item">
				    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#messageTab" role="tab" aria-controls="home" aria-selected="true">Nachrichten</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#trashTab" role="tab" aria-controls="profile" aria-selected="false">Verborgene<br>Nachrichten</a>
				  </li>
			</ul>
			<div class="tab-content" id="myTabContent">
			  <div class="tab-pane fade show active" id="messageTab" role="tabpanel" aria-labelledby="home-tab">
				  <div id="messages">Mitteilungen</div>
			  </div>
			  <div class="tab-pane fade" id="trashTab" role="tabpanel" aria-labelledby="profile-tab">
				  <div id="trash"></div>
			  </div>
			</div><!--tab-content-->
		  </div><!--card-body-->
		</div><!--card-->
	
		</div><!-col-md-4-->
	</div><!--row -->  
</div><!--container-fuid-->




