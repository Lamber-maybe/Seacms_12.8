 

function SelOK()
{
   var okstr = '';
   var tmpvalue = '';
   var totalbox = 12;
   var selid = location.search.replace('?','');
   for(var i=1;i<=totalbox;i++)
   {
      if(document.getElementById('font'+i).checked)
	  {
	     tmpvalue = document.getElementById('font'+i).value;
		 tmpvalue = tmpvalue.replace(/&lt;/,'<');
		 tmpvalue = tmpvalue.replace(/&gt;/,'>');
		 okstr += (okstr=='' ? "{seacms:trim replace=''}"+tmpvalue+"{/seacms:trim}" : "\r\n{seacms:trim replace=''}"+tmpvalue+"{/seacms:trim}");
	  }
   }
   if(okstr!='')
   {
	 var nobj = window.opener.document.getElementById(selid);
	 if(nobj != null) nobj.value = (nobj.value=='' ? okstr : "\r\n"+okstr);
   }
   window.opener = true;
   window.close();
}

  
if(parent.$('admincpnav')) parent.$('admincpnav').innerHTML='后台首页&nbsp;&raquo;&nbsp;采集&nbsp;&raquo;&nbsp;自定义采集 ';
 