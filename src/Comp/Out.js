
import style from  '../style/first.module.css'
import List from './List'

export default function Ouutlet(props){
    
    return(
        <div>
            <List setIssue={props.setIssue} setDetails={props.setDetails}></List>
        </div>
    )
}