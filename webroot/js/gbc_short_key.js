;(function($){
	$(function(){
		var $contentElm  = $("#ContentsBody");
		
		// 保存
		var $form = $contentElm.find("form:first");
		if ($form.length) {
			$(window).keydown( function ( event ){
				if( event.metaKey === true && event.which === 13 ){
					$form.submit();
					return false;
				}
			});
		}
		
		// 新規作成
		// それっぽいのを見つける
		var soreppoiUrlMatches = $contentElm.html().match(/href=(".*?\/add(\/.*?|)")|('.*?\/add(\/.*?|)')/ig);
		var soreppoiUrl = null;
		// 一番最後の
		if (soreppoiUrlMatches.length) {
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
		$("#ToolMenu ul").append("<li><a onclick='alert(\"Command + Enter<保存> \\nCommand + C<新規>\");' style='color:#FAA;'>GbcShotKey有効</a></li>");
	});
})(jQuery);