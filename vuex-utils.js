console.log('run vuex-utils snippets')

window.getter = (moduleName, getterName) => {
    try {
        return v_store.getters[`${moduleName}/${getterName}`]
    } catch {
        console.error(e)
    }
}
