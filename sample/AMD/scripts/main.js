require.config({
		baseUrl: "scripts",
　　　　paths: {
　　　　　　"jquery": "jquery",
　　　　　　"jquery-ui": "jquery-ui-1.11.4/jquery-ui.min",
　　　　}
　　});

require(['jquery','jquery-ui'], function ($){
　　　　$( "#datepicker" ).datepicker();
　　});