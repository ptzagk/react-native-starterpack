import dispatcher from '../dispatcher'

export function setPageTitle(title) {
    dispatcher.dispatch({
        type: "SET_PAGE_TITLE",
        title
    })
}
