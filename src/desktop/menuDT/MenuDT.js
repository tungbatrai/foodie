import "./MenuDT.scss"
import imageHome from "../../assets/image/desktop/menu.png";
const MenuDT = () => {
  return (
    <div id="menu">
        <p>hello</p>
      <div className="row">

        <div className="col-lg-4"><img src={imageHome} alt="" /></div>
        <div className="col-lg-8"></div>
      </div>
    </div>
  );
};

export default MenuDT;
