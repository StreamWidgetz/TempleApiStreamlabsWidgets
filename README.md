# Competition Widget (teams) for Temple API

Open the folder of a widget to get detailed information on each of the widgets

This document will describe how to setup a widget/overlay in general, the other README's will give you the specifics of configuring the widgets.

## Create an overlay for streamelements

For each widget that you want to use, you'll have to create a new overlay at streamelements.
We can then use the links to those overlays in a webbrowser source in streamlabs.

So for each widget you'll have to start out with:

- Go to [streamelements overlays](https://streamelements.com/dashboard/overlays) and sign in with your twitch/other account
- Click on the 'New overlay' button in the top-right corner
- Give the overlay a name in the top left
- Click on the 'Add widget' button on the left
- Select the 'Custom widget' under the 'Static / Custom' category


## Update the widget 

Your initial setup is now done, you've created a new custom widget.

But you'll have to add the correct data/scripts so let's do that.
We're going to have to copy the text that you can get by opening any of the files (e.g. widget.html, widget.js, widget.css, widget.fields.json and widget.data.json)

- On the left, open the editor (if you don't see the option to open the editor, reselect the widget)
- Copy the markup text from the widget.html into the html tab (make sure the code provided is the only code in this tab)
- Copy the code from widget.js into the js tab
- Copy the code from widget.css into the css tab
- Copy the json from widget.fields.json into the fields tab
- Copy the json from widget.data.json into the data tab
- Click on the done button

## Testing the overlay
If you're running the proxy already, you should be able to see the overlay on the streamelements website now.

## Use the streamelements overlay in your streamlabs scene
Now you're done creating the overlay we need to get the url for this overlay by clicking on the 'paperclip icon' located at the top-right.

P.S. You might have to configure the widget before the correct data shows up (so read the readme of the widget)

And lastly, add a webbrowser to your scene in streamlabs and use the overlay url you just copied as the url of the webbrowser and you should be good to go!