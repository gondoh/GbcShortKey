<?php
class GbcShortKeyViewEventListener extends BcViewEventListener {
	public $events = array(
		'beforeLayout',
	);

/**
 * beforeLayout
 *
 * @param CakeEvent $event
 * @return boolean
 */
	public function beforeLayout(CakeEvent $event) {
		$View = $event->subject;

		// 管理画面でJS自動的用
		if(BcUtil::isAdminSystem()) {
			// jsの読み込み
			$jsList = array();
			$jsList[] = 'GbcShortKey.gbc_short_key.js';
			$View->BcBaser->js($jsList, false);
		}

		return true;

	}
}
