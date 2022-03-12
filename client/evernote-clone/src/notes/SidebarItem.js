function SidebarItem(props) {
    return <li>
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    </li>
}

export default SidebarItem;