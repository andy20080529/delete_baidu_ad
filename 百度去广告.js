// ==UserScript==
// @name         百度去广告
// @namespace    fxxxysh
// @version      1.0.2
// @author       fxxxysh
// @description  去掉百度的广告
// @include      http*://www.baidu.com/*
// ==/UserScript==

var pos="#content_left{width:1080px;margin:0 auto;}";
var ad_id_up=["3001","3002","3003","3004","3005"];
var ad_id_up_data=[];
var ad_id_middle=["6001","6002"];//6002貌似多此一举
var ad_id_middle_data=[];
var ad_id_down=["5001","5002"];//5002貌似多此一举
var ad_id_down_data=[];
var ad_id_right=["zsyx_im0"];
var ad_id_right_data=[];
var ad_len=[5,2,2,1];
var ret;
function up(op=true)
{
	var len=ad_len[0];
	switch(op)
	{
		case true:
			while(len!=0)
			{
				len=len-1;
				var ret=document.getElementById(ad_id_up[len]);
				if(ret != undefined&&ret != null)
				{
					ad_id_up_data[len]=ret;
					document.getElementById(ad_id_up[len]).innerHTML="";
				}
			}
			break;
		case false:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_up_data[len]);
				if(ret != undefined&&ret != null)
				{
					document.getElementById(ad_id_up[len]).innerHTML=ad_id_up_data[len];
				}
			}
			break;
	}
}
function down(op=true)
{
	var len=ad_len[1];
	switch(op)
	{
		case true:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_down[len]);
				if(ret != undefined&&ret != null)
				{
					ad_id_down_data[len]=ret;
					document.getElementById(ad_id_down[len]).innerHTML="";
				}
			}
			break;
		case false:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_down_data[len]);
				if(ret != undefined&&ret != null)
				{
					document.getElementById(ad_id_down[len]).innerHTML=ad_id_down_data[len];
				}
			}
			break;
	}
}
function middle(op=true)
{
	var len=ad_len[2];
	switch(op)
	{
		case true:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_middle[len]);
				if(ret != undefined&&ret != null)
				{
					ad_id_middle_data[len]=ret;
					document.getElementById(ad_id_middle[len]).innerHTML="";
				}
			}
			break;
		case false:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_middle_data[len]);
				if(ret != undefined&&ret != null)
				{
					document.getElementById(ad_id_middle[len]).innerHTML=ad_id_middle_data[len];
				}
			}
			break;
	}
}
function right(op=true)
{
	var len=ad_len[2];
	switch(op)
	{
		case true:
			while(len!=0)
			{
				len=len-1;
				var ret=document.getElementById(ad_id_right[len]);
				if(ret != undefined&&ret != null)
				{
					ad_id_right_data[len]=ret;
					document.getElementById(ad_id_right[len]).innerHTML="";
				}
			}
			break;
		case false:
			while(len!=0)
			{
				len=len-1;
				ret=document.getElementById(ad_id_right_data[len]);
				if(ret != undefined&&ret != null)
				{
					document.getElementById(ad_id_right[len]).innerHTML=ad_id_right_data[len];
				}
			}
			break;
	}
}
up(true);
down(true);
middle(true);
right(true);
