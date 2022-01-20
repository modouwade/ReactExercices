import { useState } from "react";
import "./sidebar.css";
const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleClickContent = () => {
    setToggle(false);
  };
  return (
    <div>
      <div className={toggle ? "side-bar active" : "side-bar"}>
        <div className="toggle-button" id="toggle-button" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <section className="content" onClick={handleClickContent}>
        <h1>Sidebar is life</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          eveniet, vitae eum consectetur ab beatae tenetur atque blanditiis,
          earum nobis in temporibus est! Asperiores earum rerum aspernatur in
          cupiditate ducimus quibusdam magnam eos saepe beatae nihil fugiat
          assumenda expedita aliquid, nemo placeat esse non ut perspiciatis
          eligendi quis! Illo similique distinctio sed quos autem veritatis
          consequatur rem illum molestias. Velit minus saepe ullam asperiores
          rem nisi architecto impedit numquam, illum officia, veniam, minima
          perspiciatis officiis rerum deserunt eius inventore aspernatur.
          Officiis expedita nesciunt odio nisi corrupti neque alias dignissimos
          upiditate, facilis, eaque rerum deserunt, esse ratione a quia
          laudantium at?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          eveniet, vitae eum consectetur ab beatae tenetur atque blanditiis,
          earum nobis in temporibus est! Asperiores earum rerum aspernatur in
          cupiditate ducimus quibusdam magnam eos saepe beatae nihil fugiat
          assumenda expedita aliquid, nemo placeat esse non ut perspiciatis
          eligendi quis! Illo similique distinctio sed quos autem veritatis
          consequatur rem illum molestias. Velit minus saepe ullam asperiores
          rem nisi architecto impedit numquam, illum officia, veniam, minima
          perspiciatis officiis rerum deserunt eius inventore aspernatur.
          Officiis expedita nesciunt odio nisi corrupti neque alias dignissimos
          upiditate, facilis, eaque rerum deserunt, esse ratione a quia
          laudantium at?
        </p>
        <p>
          Ipsum dolor sit amet consectetur, adipisicing elit. Quae eveniet,
          vitae eum consectetur ab beatae tenetur atque blanditiis, earum nobis
          in temporibus est! Asperiores earum rerum aspernatur in cupiditate
          ducimus quibusdam magnam eos saepe beatae nihil fugiat assumenda
          expedita aliquid, nemo placeat esse non ut perspiciatis eligendi quis!
          Illo similique distinctio sed quos autem veritatis consequatur rem
          illum molestias. Velit minus saepe ullam asperiores rem nisi
          architecto impedit numquam, illum officia, veniam, minima perspiciatis
          officiis rerum deserunt eius inventore aspernatur. Officiis expedita
          nesciunt odio nisi corrupti neque alias dignissimos upiditate,
          facilis, eaque rerum deserunt, esse ratione a quia laudantium at?
        </p>
        <p>
          Quae eveniet, vitae eum consectetur ab beatae tenetur atque
          blanditiis, earum nobis in temporibus est! Asperiores earum rerum
          aspernatur in cupiditate ducimus quibusdam magnam eos saepe beatae
          nihil fugiat assumenda expedita aliquid, nemo placeat esse non ut
          perspiciatis eligendi quis! Illo similique distinctio sed quos autem
          veritatis consequatur rem illum molestias. Velit minus saepe ullam
          asperiores rem nisi architecto impedit numquam, illum officia, veniam,
          minima perspiciatis officiis rerum deserunt eius inventore aspernatur.
          Officiis expedita nesciunt odio nisi corrupti neque alias dignissimos
          upiditate, facilis, eaque rerum deserunt, esse ratione a quia
          laudantium at?
        </p>
      </section>
    </div>
  );
};

export default SideBar;
