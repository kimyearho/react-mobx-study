import { action } from "mobx"
import EventEmitter from 'events'

class EventStore {

    constructor() {
        this.eventbus = new EventEmitter()
    }

    @action
    on = (eventName, listener) => {
        this.eventbus.on(eventName, listener)
    }

    @action
    removeAllListeners = (eventName) => {
        this.eventbus.removeAllListeners(eventName);
    }

    @action
    removeEventListener = (eventName, listener) => {
        this.eventbus.removeListener(eventName, listener);
    }

    @action
    emit = (event, payload, error = false) => {
        this.eventbus.emit(event, payload, error);
    }

    @action
    getEventEmitter = () => {
        return this.eventbus;
    }

}

export default EventStore