the quick call back main folder will call functions from the surrounding files and create an object as follows

bookCallBack Folder : function will produce 3 strings representing the current day of the week if the current day is Sunday it will skip strings 1 day forward

adjustedTimes Folder : This will produce a shortened array of times that can be used to populate the initial page loaded option. When the page initially loads the default option will load with today selected and the remaining times available for today.

times Folder : A list of all times can be created here as strings in an array and passed to the external javascript file from the footer partial.

Hours past Nine folder: will create a number representing how many hours it is currently past 9am