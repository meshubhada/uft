
systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click



