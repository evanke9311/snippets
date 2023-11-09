console.log('run vuex-utils snippets')

const getter = (moduleName, getterName) => {
    try {
        return v_store.getters[`${moduleName}/${getterName}`]
    } catch {
        console.error(e)
    }
}