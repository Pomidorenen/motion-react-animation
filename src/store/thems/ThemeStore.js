import {makeAutoObservable} from "mobx";

class ThemeStore{
    dark = {
        '--main-color': 'rgb(3, 8, 66)',
        '--second-color': 'rgb(58, 103, 214)',
        '--thrid-color': 'rgb(255, 255, 255)',
        '--four-color': 'rgb(0,0,0)'
    }
    light = {
        '--main-color': 'rgb(253,253,255)',
        '--second-color': 'rgb(106,137,236)',
        '--thrid-color': 'rgb(8,28,78)',
        '--four-color': 'rgb(0,0,0)'
    }
    constructor(){
        makeAutoObservable(this)
    }
    toggleTheme = (value)=>{
        if(value){
            this.changeTheme(this.light)
        }else {
            this.changeTheme(this.dark)
        }
    }
    changeTheme = (theme)=>{
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key,value)
        })
    }
}

export default new ThemeStore();