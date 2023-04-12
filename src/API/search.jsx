import  axios  from "axios";


const UrlAuth = `?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_KEY_PUBLIC}&hash=${process.env.REACT_APP_HASH}`

async function searchCharacter(params) {

    let URL = `characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_KEY_PUBLIC}&hash=${process.env.REACT_APP_HASH}&limit=10`

    if (Object.keys(params).length > 0) {
    Object.keys(params).forEach((p,i)=>{
        switch (p) {
            case 'search':
                if (params.search !== '') {
                    URL = URL.concat('',`&nameStartsWith=${params.search}`)
                }
                break;
            case 'orderBy':
                if (params.orderBy !== '') {
                    URL = URL.concat('',`&orderBy=${params.orderBy}`)
                }
                break;
            case 'page':
                if (params.page === 0 || params.page === '' ) {
                    URL = URL.concat('',`&offset=${params.page}`)
                }else{
                    let multiply = params.page * 10 - 10;
                    URL = URL.concat('',`&offset=${multiply}`)
                }
                break;
            default:
                URL = `characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_KEY_PUBLIC}&hash=${process.env.REACT_APP_HASH}&limit=10`
                break;
        }
    })
    
    }

    try {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + 
            process.env.REACT_APP_API_URI +
            URL
            )
        return response.data.data
    } catch (error) {
        return error
    }
}


async function getDetailComic(url) {

    try {
        const response = await axios.get(
            url + UrlAuth
        )
        return response.data.data?.results[0]
    } catch (error) {
        
    }
    
}

export { searchCharacter, getDetailComic };