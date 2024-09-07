//要素系
const shoki = document.getElementById("shoki")
const picture = document.getElementById("picture")
const chose_geo = document.getElementsByName("geo")
const chose_qui = document.getElementsByName("qui")
const game_geo = document.getElementsByClassName("game_geo")
const game_qui = document.getElementsByClassName("game_qui")
const place_geo = document.getElementsByClassName("place_geo")
const place_qui = document.getElementsByClassName("place_qui")

//画像系
const num_geo = [6,5,3]
const num_qui = [4,3,3]
const num_play = [2,2,1]


//スタート
function start(){
    //リロード系
    window.localStorage.setItem("check_reload","yes")
        
    //要素定義
    let deside_geo = ""
    let hyou_geo = ""
    let hyou_qui = ""
    let where_geo = ""
    let where_qui = ""
    
    //geoチェック探し
    for(let i = 0;i < chose_geo.length;i++){
        if(chose_geo.item(i).checked){
            deside_geo = chose_geo.item(i).value
            //表に追加
            for(let j=0;j < num_geo[i];j++){
                hyou_geo+=j 
                }
            //ランダムに選ぶ
            for(let k = 0;k < num_play[i];k++){
                let l = 0
                l = Math.floor( Math.random() * hyou_geo.length);
                where_geo+=hyou_geo[l]
                hyou_geo = hyou_geo.replace(l,"")                }
            }
        　　
        }
    
    //quiチェック探し
    for(let i = 0;i < chose_qui.length;i++){
        if(chose_qui.item(i).checked){
            deside_qui = chose_qui.item(i).value
            //表に追加
            for(let j=0;j < num_qui[i];j++){
                hyou_qui+=j 
                }
            //ランダムに選ぶ
            for(let k = 0;k < num_play[i];k++){
                let l = 0
                l = Math.floor( Math.random() * hyou_qui.length);
                where_qui+=hyou_qui[l]
                hyou_qui = hyou_qui.replace(l,"")
                }
            }
        　　
        }
    window.localStorage.setItem("geo_nanido",deside_geo)
    window.localStorage.setItem("qui_nanido",deside_qui)
    window.localStorage.setItem("geo_where",where_geo)
    window.localStorage.setItem("qui_where",where_qui)
    set_picture()
}

//画像割当　
function set_picture(){
    //表示切替
    shoki.style.display = "none" 
    picture.style.display = "block"
    //要素
    let geo_nanido = window.localStorage.getItem('geo_nanido')
    let qui_nanido = window.localStorage.getItem('qui_nanido')
    let geo_where = window.localStorage.getItem('geo_where')
    let qui_where = window.localStorage.getItem('qui_where')

    //写真配置
    for(let i = 0;i < geo_where.length;i++){
        game_geo[i].src = "./geo/"+geo_nanido+"/"+geo_where[i]+".JPG"
        place_geo[i].textContent = geo_where[i]
    }
    for(let i = 0;i < qui_where.length;i++){
        game_qui[i].src = "./geo/"+qui_nanido+"/"+qui_where[i]+".jpg"
        place_qui[i].textContent = qui_where[i]
    }
}

//リロード処理
window.addEventListener("beforeunload",function(event){
    if(window.localStorage.getItem('check_reload') === "yes"){
        set_picture() 
    }
})

window.addEventListener("pageshow",function(event){
    if(window.localStorage.getItem('check_reload') === "yes"){
        set_picture() 
    }
})
