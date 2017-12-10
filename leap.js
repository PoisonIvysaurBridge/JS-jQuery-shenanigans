var groups=document.doublecombo.p_topic_group.options.length
		var group=new Array(groups)
		for (i=0; i<groups; i++)
		group[i]=new Array()
group[7][0]=new Option("LEAP 2K17: Class-Size Secret Hitler - Slots Left: 18","C208") 
group[7][1]=new Option("LEAP 2K17: Human Rights Forum - Slots Left: 40","C142") 
group[7][2]=new Option("LEAP 2K17: Manifesto Writing  - Slots Left: 35","X012") 
group[7][3]=new Option("LEAP 2K17: Mock Trial  - Slots Left: 10","C136") 
group[7][4]=new Option("LEAP 2K17: The Mystery Room - Slots Left: 25","X008") 
group[7][5]=new Option("LEAP 2K17: Youth Activism Workshop - Slots Left: 75","X009") 
group[7][6]=new Option("LEAP 2k17: Rights Pit: Find Your Rights! - Slots Left: 15","X010") 
group[7][7]=new Option("LEAP2K17: Pop Culture and Politics  - Slots Left: 45","C141") 
		var temp=document.doublecombo.p_topic_code
		function redirect(x){
		for (m=temp.options.length-1;m>0;m--)
		temp.options[m]=null
		for (i=0;i<group[x].length;i++){
		temp.options[i]=new Option(group[x][i].text,group[x][i].value)
		}
		temp.options[0].selected=true
		}

		redirect(7)