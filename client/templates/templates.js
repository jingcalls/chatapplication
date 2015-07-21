Template.chatapplication.helpers
({
	chatmessages:  function()
		{
			return Chatmessages.find({}, {sort: {createdAt: -1}, limit: 10})	
		}
});

Template.chatapplication.events
({ 
	"click .btn-delete": function (event)
		{
			Chatmessages.remove(this._id);
			return false; 
		},
	"keyup .txtMessage": function (event)
		{
			if(event.keyCode == 13) 
			{
				Chatmessages.insert
					({
						name: $(".txtName").val(),
						text: $(".txtMessage").val(),
						createdAt: new Date()
					});
			}
			return false;
		}

});