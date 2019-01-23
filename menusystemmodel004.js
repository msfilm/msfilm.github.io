function menusystemmodel004Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,0,122,32,0,0,null,0,null,new LMBranchEx("0","http://www.instagram.com/msfilm.tj",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"MSfilm"),null,null,projectroot+"/menusystemmodel004/menusystemitem0.gif",projectroot+"/menusystemmodel004/menusystemitem0_over.gif",null);
	var MenuSystemModel004_MNU1 = new LMMenu("MenuSystemModel004_MNU1",x+330,y+30,122,32,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel004_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,90,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel004/menusystemitem1.gif",projectroot+"/menusystemmodel004/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",90,0,120,30,0,0,null,0,null,new LMBranch("0",projectroot+"index.html"),null,null,projectroot+"/menusystemmodel004/menusystemitem2.gif",projectroot+"/menusystemmodel004/menusystemitem2_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem5",210,0,120,30,0,0,null,0,null,new LMBranch("0",projectroot+"video.html"),null,null,projectroot+"/menusystemmodel004/menusystemitem3.gif",projectroot+"/menusystemmodel004/menusystemitem3_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",330,0,120,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel004/menusystemitem4.gif",projectroot+"/menusystemmodel004/menusystemitem4_over.gif",MenuSystemModel004_MNU1);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem7",450,0,120,30,0,0,null,0,null,new LMBranch("0",projectroot+"contact.html"),null,null,projectroot+"/menusystemmodel004/menusystemitem5.gif",projectroot+"/menusystemmodel004/menusystemitem5_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem8",570,0,90,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel004/menusystemitem6.gif",projectroot+"/menusystemmodel004/menusystemitem6_over.gif",null);
	var MenuSystemModel004_MNU2 = new LMMenu(mnuname,x+0,y+0,660,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel004_MNU2;

	RegisterMainMenu(MenuSystemModel004_MNU2);

	ReIndexMenu(MenuSystemModel004_MNU2, index);

}
