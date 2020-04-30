class EventEmitter {
    constructor() {
        this._events = {};
    }

    //on(event,handler)：监听event事件，事件触发时调用handler函数；
    on(event, handler) {
        (this._events[event] || (this._events[event] = [])).push(handler);
    }

    //off(event, handler)：取消对事件event的监听
    off(event, handler) {
        if (this._events[event]) {
            this._events[event].splice(this._events[event].indexOf(handler) >>> 0, 1);
        }
    }

    //once(event,handler)：为指定事件注册一个单次监听器，单次监听器最多只触发一次，触发后立即解除监听器；
    once(event, handler) {
        let fired = false;

        function fn() {
            this.off(event, fn);
            if (!fired) {
                fired = true;
                handler.apply(this, arguments);
            }
        }
        this.on(event, fn);
    }

    //emit(event,arg1,arg2,arg3...)：触发event事件，并把参数arg1,arg2,arg3....传给事件处理函数；
    emit(event) {
        let payload = [].slice.call(arguments, 1);

        let array = this._events[event] || [];
        for (let i = 0; i < array.length; i++) {
            let handler = array[i];
            handler.apply(this, payload);
        }
    }
}
