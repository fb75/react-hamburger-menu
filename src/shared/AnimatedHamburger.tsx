import React, { useState } from "react";
import cn from "classnames";

// esporto interfaccia per richiamarla altrove
export interface Item {
  icon: string;
  url: string;
}

// definisco le props in arrivo come array di Item
// e il metodo onIconClick che si aspetta una stringa da goto e gliela passo
// evitare opzionale per le props
interface AnimatedHamburgerProps {
  items: Item[];
  onIconClick: (url: string) => void;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const iconClickHandler = (url: string) => {
    console.log(url);
    // passo con le props il metodo
    props.onIconClick(url);
    setOpened(false);
  };

  return (
    <nav className="menu">
      <div className={cn("menu-open", { opened: opened })} />
      <label className="menu-open-button" onClick={() => setOpened(!opened)}>
        <span className="hamburger hamburger-1" />
        <span className="hamburger hamburger-2" />
        <span className="hamburger hamburger-3" />
      </label>
      {props.items.map((item) => (
        <div
          className="menu-item"
          key={item.icon}
          onClick={() => iconClickHandler(item.url)}
        >
          <i className={item.icon} />
        </div>
      ))}
      {/*         <div className="menu-item"> <i className="fa fa-bar-chart" /> </div>
        <div className="menu-item"> <i className="fa fa-plus" /> </div>
        <div className="menu-item"> <i className="fa fa-heart" /> </div>
        <div className="menu-item"> <i className="fa fa-envelope" /> </div>
        <div className="menu-item"> <i className="fa fa-cog" /> </div>
        <div className="menu-item"> <i className="fa fa-ellipsis-h" /> </div>   */}
    </nav>
  );
};
