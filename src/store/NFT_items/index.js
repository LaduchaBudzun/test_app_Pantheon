

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
    }
},
state:  {
    items:[],
    loadingNewItems:false 

},
getters: {
    items: (store) => store.items,
    loadingNewItems: (store) => store.loadingNewItems
}
}