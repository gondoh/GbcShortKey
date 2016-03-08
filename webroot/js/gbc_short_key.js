;(function($){
	$(function(){
		var $contentElm  = $("#ContentsBody");
		var toolbar = "";
		
		// 保存
		var $form = $contentElm.find("form:first");
		// 全部で動くと危ないのでadd / editのみ動作
		if ($form.length && /(\/add($|#.*?)|\/edit\/)/.test(location.href)) {
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
		var soreppoiUrlMatches = $contentElm.html().match(/href=(".*?\/add(\/.*?|#.*?|)")|('.*?\/add(\/.*?|#.*?|)')/ig);
		var soreppoiUrl = null;
		// 一番最後の
		if (soreppoiUrlMatches) {
			toolbar += "Ctrl + N<新規>";
			// 3番目
			soreppoiUrlMatches = soreppoiUrlMatches[soreppoiUrlMatches.length-1].match(/href=("(.*?)"|'(.*?)')/);
			soreppoiUrl = soreppoiUrlMatches[2];
			
			// もっと適したものの検索
			// Row1を探してみる
			$(".list-table tr th a").each(function(){
				if (/\/add/.test(this.href)) {
					soreppoiUrl = this.href;
				}
			});
			
			
			
			$(window).keydown( function ( event ){
				if( event.ctrlKey === true && event.which === 78 ){
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