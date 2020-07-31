import React from 'react'
import './TabBar.css'
import {Link} from 'react-router-dom'
import HomeIcon from '../fonts/home.svg'
import MineIcon from '../fonts/mine.svg'
import HomeSelecctedIcon from '../fonts/homeSelected.svg'
import MineSelectedIcon from '../fonts/mineSelected.svg'
import Add from '../fonts/add.svg'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1,
            tarList:[
                {
                    id: 1,
                    link: '/',
                    title: '首页',
                    icon: HomeIcon,
                    selectedIcon: HomeSelecctedIcon
                },
                {
                    id: 2,
                    link: '/addNote',
                    icon: Add,
                },
                {
                    id: 3,
                    link: '/mine',
                    title: '我的',
                    icon: MineIcon,
                    selectedIcon: MineSelectedIcon
                }
            ]
        }
    }

    change(val){
        this.setState({
            selectedIndex: val
        })
    }
    

    render(){
        let list = this.state.tarList.map(el=>{
            if (el.id===2) {
                return (
                    <li className="add-btn" key={el.id}>
                        <Link to={el.link}>
                            <img src={el.icon} alt={el.title} onClick={(e)=>this.change(el.id)}/>
                        </Link>
                    </li>
                )
            } 
            return (
                <li className={this.state.selectedIndex===el.id?'active':''} key={el.id}>
                    <Link to={el.link} onClick={(e)=>this.change(el.id)}>
                        <img src={this.state.selectedIndex===el.id?el.selectedIcon:el.icon} alt={el.title} onClick={(e)=>this.change(el.id)}/>
                        <span>{el.title}</span>    
                    </Link>
                </li>
            )
        })
    return <ul className="tabber">{list}</ul>
    }
}

export default Nav