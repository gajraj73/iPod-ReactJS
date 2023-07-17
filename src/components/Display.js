import '../assets/css/Display.css';
export default function Display({list, visibility, activeItem, }){
    return(
    <div id="display">
      {/* Side-Menu Section */}
        <ul id="side-menu" 
        style={!visibility ? { display: "none" } : {}}>
          {/* title of side-menu */}
          <div className="title">Ipod.js</div>
          {/* create a listItem */}
          {list.map((item) => (
            <li key={item.id} className={item.flag ? "active" : ""}>
              {item.listItem}
            </li>
          ))}
        </ul>
        {/* Screen Section */}
        <div id="screen">
          {/* title of Item */}
        <h2>{visibility ? "" : activeItem[0].listItem}</h2>
        {/* Create image-container with item-img */}
        {activeItem.src && <div className="img-container"><img src={visibility ? "" : activeItem.src} alt=""/></div>}
        </div>
    </div>
    );
}