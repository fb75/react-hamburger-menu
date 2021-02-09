import React, { useEffect, useState } from "react";

import { AnimatedHamburger, Item } from "./shared/AnimatedHamburger";
import "./App.css";
import Axios from "axios";
import { PageLayout } from "./layouts/PageLayout";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { ContactPage } from "./pages/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  // ricreo lo stato di items con useState
  // che accetta array vuoto di tipo Item, gli passo array vuoto come val iniziale per non ritipizzare in .map()
  const [items, setItems] = useState<Item[]>([]);
  // uso useEffect per far si che ogni volta la app viene inizializzata deve far girare del codice
  // se avessi lo useState qui in App.tsx ogni volta che cambio stato verrebbe invocato
  // si passano così array di dipendenze per far si che solo quando esse cambiano useEffect viene invocato
  // se le dipendenze sono un [] vuoto viene invocato solo la prima volta (alla creazione)
  useEffect(() => {
	console.log("useEffect");
	// tipizzo la risposta come array di Item con i generics
	// così la res viene tipizzata da axios
	Axios.get<Item[]>("http://localhost:3001/config").then((res) => {
	  setItems(res.data);
	});
  }, []);

  // const [ opened, setOpened ] = useState<boolean>(false)

  // const toggle = () => {
  //   setOpened(!opened)
  // }

  // il render di App avviene la prima volta con items vuoto e poi alla chiamata con useEffect()
  console.log("render", items);

  // const cls = opened ? 'menu-open opened' : 'menu-open'

  // using classNames: I arg class to hardcode, II arg obj with new class and opened value
  // const cls = cn('menu-open', { opened: opened})

  const goto = (url: string) => {
	window.location.href = url;
	// window.open(url)
	// alert(url)
	// setOpened(false)
  };

  return (
	<div>
		<BrowserRouter>
		<AnimatedHamburger items={items} onIconClick={goto} />
			<Switch>
				<Route path="/home">
					<PageLayout>
						<HomePage />
					</PageLayout>
				</Route>
				<Route path="/catalog">
					<PageLayout>
						<CatalogPage />
					</PageLayout>
				</Route>
				<Route path="/contact">
					<PageLayout>
							<ContactPage />
					</PageLayout>
				</Route>
			</Switch>
	  </BrowserRouter>
	</div>
  );
}

export default App;
