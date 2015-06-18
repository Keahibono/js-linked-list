/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

	var _head = null;
	var _tail = null;

	var linkedObject = {
		getHead: _getHead,
		getTail: _getTail,
		add: _add,
		remove: _remove,
		get: _get,
		insert: _insert
	};

	return linkedObject;

	function _getHead(){
		return _head;
	};

	function _getTail(){
		return _tail;
	};
	
	function _add(val){
		var newNode = {
			value: val,
			next: null
		};

		if (_head === null){
			_head = newNode;
			_tail = _head;

		} else {
			_tail.next = newNode;
			_tail = newNode;
		}
		return _tail;
	};

	function _remove(num){

		if (num < 0) {
			return false;

		}else if (_get(num) === false){
			return false;

		} else if (num === 0){
			_head = _get(num + 1);

		} else if (_get(num).next === null) {
			_get(num - 1).next = null;
			_tail = _get(num - 1);

		} else {
			var nodePre2 = _get(num - 1);
			var nodePost = _get(num + 1);

			nodePre2.next = nodePost;
		}

	};

	function _get(num){
		var currentNode = _head;

		for (var i = 0; i < num; i++){
				currentNode = currentNode.next;

			if (currentNode === null){
				return false;
			}
		}	
		return currentNode;
	};

	function _insert(val, num){
		var nodePost = _get(num);
		var newNode = {
				value: val,
				next: null
			}

		if (num < 0){
			return false;

		} else if (_get(num) === false){
			return false

		} else if (num === 0){
			newNode.next = _head;
			_head = newNode;

		// } else if (num === 1){
		// 	_head.next = newNode;
		// 	newNode.next = nodePost;

		} else {
			var nodePre = _get(num - 1);
			
			newNode.next = nodePost;
			nodePre.next = newNode;

		}
		
		return newNode;
	};
};

