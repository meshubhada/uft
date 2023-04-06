mrowcount=datatable.GetSheet("Action1").GetRowCount

For i = 1 To mrowcount Step 1
	datatable.SetCurrentRow(i)
	If datatable("ModuleExe","Action1")="Y" Then
		Modid=datatable("ModuleID","Action1")
		msgbox Modid
		
		tcrowcount=datatable.GetSheet("Action2").GetRowCount
		For j = 1 To tcrowcount Step 1
			
			datatable.SetCurrentRow(j)
			
			If Modid=Datatable("ModuleID","Action2") and Datatable("TestCaseExe","Action2")="Y"  Then
			

			testcaseid=datatable("TestCaseId","Action2")
			
			msgbox testcaseid
			
			
			tsrowcount=datatable.GetSheet("Action3").GetRowCount
			
			For k = 1 To tsrowcount Step 1
				datatable.SetCurrentRow(k)
				
				If testcaseid=datatable("TestCaseId","Action3") Then
					
					keyword=datatable("Keyword","Action3")
					
					msgbox keyword
					
					Select Case keyword
						
							Case "lh"
							Call launch()
							
							Case "ln"
							Call login("john","hp")
							
							Call "ce"
							Call close()
							
							'Case "nr"
							'Call neworder()
							
							'Case "lnd"
							
							'drowcount=datatable.GetSheet("Action4").GetRowCount
							'For l = 1 To drowcount Step 1
								
							'datatable.SetCurrentRow(l)
							'agentName=datatable.("username","Action4")	
							'password=datatable.("password","Action4")	
							'Call launch()
							'Call login(username,password)
							'Call close()	
							'Next
							
					End Select
					
				End If
			Next
			
			End If
		Next
	End If
Next
