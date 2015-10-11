// PROBLEMS
// 1. The height is still manual defined in the picture view tag editor
// Need to put it in the css file
// 2. Need to put click functionality for bottom thumbnails

	
// Variable to keep track of present image
var count=0;
	
$(document).ready(function()
{
	
	
	// Declaring an array of objects for all the images
	var i;
	var number_images=7;

	
	// Declaring an array to keep track of all the images
	// This helps in appending more images
	var gallery_images=new Array();
	
	for (i=0;i<number_images;i++)
	{
		// Declaring each element in the array to be an object so we can assign properties to it
		gallery_images[i]=new Object();
	}
	
	// Starting counter for image so we can assign one by one, and expand to more images
	i=0;
	
	gallery_images[i].source="gallery/darpa_small.jpg";
	gallery_images[i].caption="A module of the DARPA Temp platform";
	i=i+1;
	
	gallery_images[i].source="gallery/darwin.JPG";
	gallery_images[i].caption="The DARWIN humanoid robot which we use for Robocup (and a lot of misc stuff)";
	i=i+1;
		
	gallery_images[i].source="gallery/meam510_small.jpg";
	gallery_images[i].caption="MEAM 510 class of 2011";
	i=i+1;
	
	gallery_images[i].source="gallery/phantom.jpg";
	gallery_images[i].caption="Phantom haptic manipulator which I used for teleoperation of the Puma 260";
	i=i+1;
	
	gallery_images[i].source="gallery/robo1.jpg";
	gallery_images[i].caption="Our main striker bot for robockey";
	i=i+1;
	
	gallery_images[i].source="gallery/robo2.jpg";
	gallery_images[i].caption="The big strong defender bot";
	i=i+1;
	
	gallery_images[i].source="gallery/robo3.jpg";
	gallery_images[i].caption="Keeper bot which didn't do much :D";
	i=i+1;


	// Add every image into a single row
	var gallery_image_row = "<tr height= '100%' >";
	
	for (i=0;i<number_images;i++)
	{	
		gallery_image_row+=" <td height='100%'> <img onclick='display_image_click(this,"+i+",\""+gallery_images[i].caption+"\")' width='100px' height='90px' id= gallery_image_'" + i + "' src=' " + gallery_images[i].source + " '> </td>";
	}	
	gallery_image_row+="</tr>";
	
	document.getElementById("gallery_list").innerHTML=gallery_image_row;
	
	// Changes the image in the "picture_view" id tag
	$("#picture_view").html("<img src= ' " + gallery_images[count].source + " ' height='500px'/>");
	$("#picture_caption").html("<p>" + gallery_images[count].caption + " </p>");
	

	// Function to change background of arrow keys on movement of mouse over it
	$("#move_picture_left").mouseover(function()
	{
		$("#move_picture_left").css("background-color","#FFCC11");
		//$("#move_picture_left").css("background-image","-moz-linear-gradient(90deg, #FC7232, #FFCC11)","background-image","-webkit-gradient(linear, center top, center bottom, from(#FC7232), to(#FFCC11)");
	});
	
	$("#move_picture_left").mouseout(function()
	{
		$("#move_picture_left").css("background-color","#FFFFFF");
	});
	
	$("#move_picture_right").mouseover(function()
	{
		$("#move_picture_right").css("background-color","#FFCC11");
	});
	
	$("#move_picture_right").mouseout(function()
	{
		$("#move_picture_right").css("background-color","#FFFFFF");
	});
	
	// Function to switch images with each click
	$("#move_picture_left").click(function()
	{
		count=count-1;
		if (count<0)
		{
			count=number_images;
		}
		else if (count>number_images)
		{
			count=0;
		}
		$("#picture_view").html("<img src= ' " + gallery_images[count].source + " ' height='500px'/>");	
		$("#picture_caption").html("<p>" + gallery_images[count].caption + " </p>");

	});

	$("#move_picture_right").click(function()
	{

		count=count+1
;		
		if (count<0)
		{
			count=number_images;
		}
		else if (count>number_images)
		{
			count=0;
		}
		$("#picture_view").html("<img src= ' " + gallery_images[count].source + " ' height='500px'/>");	
		$("#picture_caption").html("<p>" + gallery_images[count].caption + " </p>");
	});
	
	
});

// Function which checks which image is clicked in the bottom pane, and displays in the main area
function display_image_click(img_tag,i,caption)
{	
	count=parseInt(i);
	$("#picture_view").html("<img src= ' " + img_tag.src + " ' height='500px'/>");
	$("#picture_caption").html("<p>" + caption + " </p>");
}