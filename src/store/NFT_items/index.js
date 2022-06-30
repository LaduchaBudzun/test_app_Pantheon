

export default {
actions:{
    async getItemsNFT({commit,dispatch},page){
        const response = await fetch(`https://mdatsev.dev/token-api?offset=${page}&limit=10`)
        const result = await response.json()
        if(result.error){
            setTimeout(() => {
                dispatch('getItemsNFT',page)
            }, 300)
            return
        }

        if(result.result.length == 0 ){
            commit('showWarn')
        } 
        if(page != 0){

            commit('addItems',result.result)
        }else{

            commit('setItems',result.result)
        }
        commit('changeLoadingNewItems',false)
        
    }
},
mutations:{
    setItems(store,items){
        store.items = items
    },
    addItems(store,items){
        store.items = store.items.concat(items)
    },
    changeLoadingNewItems(store,value){
        store.loadingNewItems = value
    },
    showWarn(store){
        store.showWarn = store.showWarn + 1
    }
},
state:  {
    items:[],
    loadingNewItems:false,
    showWarn:0

},
getters: {
    items: (store) => store.items,
    loadingNewItems: (store) => store.loadingNewItems,
    showWarn: (store) => store.showWarn
}
}