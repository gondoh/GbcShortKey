;(function($){
	$(function(){
		var $contentElm  = $("#ContentsBody");
		var toolbar = null;
		
		// 保存
		var $form = $contentElm.find("form:first");
		// 全部で動くと危ないのでadd / editのみ動作
		if ($form.length && /(\/add$|\/edit\/)/.test(location.href)) {
			toolbar += "Command + Enter<保存> \\n";
			$(window).keydown( function ( event ){
				if( event.metaKey === true && event.which === 13 ){
					$form.submit();
					return false;
				}
			});
		}
		
		// 新規作成
		// それっぽいのを見つける
		var soreppoiUrlMatches = $contentElm.html().match(/href=(".*?\/add(\/.*?|)")|('.*?\/add(\/.*?|#.*?|)')/ig);
		var soreppoiUrl = null;
		// 一番最後の
		if (soreppoiUrlMatches) {
			toolbar += "Command + C<新規>";
			soreppoiUrlMatches = soreppoiUrlMatches[soreppoiUrlMatches.length-1].match(/href=("(.*)"|'(.*)')/);
			// 3番目
			soreppoiUrl = soreppoiUrlMatches[2];
			$(window).keydown( function ( event ){
				if( event.metaKey === true && event.which === 67 ){
					location.href = soreppoiUrl;
					return false;
				}
			});
		}
		
		// ツールバーにショートカットを表示する
		if (toolbar) {
			$("#ToolMenu ul").append("<li><a onclick='alert(\"" + toolbar + "\");' style='color:#FAA;'>GbcShotKey有効</a></li>");
		}
	});
})(jQuery);