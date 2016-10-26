import EventEmitter from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super()
        this.page_title = 'Home';
    }

    getPageTitle() { return this.page_title }

    handleActions(action) {
        switch (action.type) {

            case "SET_PAGE_TITLE":
                this.page_title = action.title
                this.emit('page-title-changed')
                break;
        }
    }
}

const appStore = new AppStore()

dispatcher.register(appStore.handleActions.bind(appStore))

export default appStore
