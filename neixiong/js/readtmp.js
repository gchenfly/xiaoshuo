if(ReadCookies("tempcase")==null || ReadCookies("tempcase")=="")
{
	setCookies("tempcase",bookid+","+readid,365);
}
else
{
	var echocase="";
	var tc=ReadCookies("tempcase").split("\|");
	for(var i=0;i<tc.length;i++)
	{
		var ttc=tc[i].split(",");
		var nohave=true;
		if(ttc[0]==bookid)
		{
			if(ttc[1]!=readid)
			{
				tc[i]=bookid+","+readid;
			}
			nohave=false;
			break;
		}
	}
	if(nohave)
	{
		if(tc.length<50)
		{
			tc.push(bookid+","+readid);
		}
		else
		{
			tc.shift();
			tc.push(bookid+","+readid);
		}
	}
	setCookies("tempcase",tc.join('|'),365);
}

function setCookies(cookieName,cookieValue, expireDays)
{
	var date=new Date(); 
	date.setTime(date.getTime()+expireDays*24*3600*1000);
	document.cookie = cookieName +"="+ escape (cookieValue) + ";expires=" + date.toGMTString()+ ";path=/;";
}

function ReadCookies(cookieName)
{
	var theCookie=''+document.cookie;
	var ind=theCookie.indexOf(cookieName);
	if (ind==-1 || cookieName=='') return ''; 
	var ind1=theCookie.indexOf(';',ind);
	if (ind1==-1) ind1=theCookie.length;
	return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
}
function delcase(id)
{
	if(confirm('确实要将这书本籍移除书架么？')) 
	{
            var tc=ReadCookies("tempcase").replace("|"+id,"");
            tc=tc.replace(id,"");
            //tc.splice(id,1);
            setCookies("tempcase",tc,365);
            window.location.reload(); 
	}
}